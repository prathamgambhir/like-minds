import { communitiesApp } from '@/app/server/communities-route';
import { userApp } from '@/app/server/user-route';
import { getOrCreateUserByClerkId } from '@/lib/user-utils';
import { auth } from '@clerk/nextjs/server';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { handle } from "hono/vercel";

type Variables = {
    userId: string;
    user: NonNullable<Awaited<ReturnType<typeof getOrCreateUserByClerkId>>>
}

const app = new Hono<{ Variables: Variables }>().basePath("/api");

//error handler
app.onError((err, c) => {
    console.error("Api Error :", err);

    if (err instanceof HTTPException) {
        return err.getResponse();
    }

    //DB error
    if (err instanceof Error) {
        if (err.message.includes("voilates") || err.message.includes("constraint")) {
            return c.json({ error: "Invalid data" }, 400);
        }

        if (err.message.includes("not found")) {
            return c.json({ error: "Data not found" }, 404);
        }
    }
    return c.json({ error: "Internal Server error" }, 500);
});

//middleware
app.use("/*", async(c, next) => {
    const publicRoutes = ["/api/communities/all"];

    if(publicRoutes.includes(c.req.path)){
        return await next();
    }

    const session = await auth();
    if(!session.userId){
        throw new HTTPException(401, {message: "Unauthorized"});
    }

    c.set("userId", session.userId);
    await next();
})

const routes = app
    .route("/communities", communitiesApp)
    .route("/user", userApp)


export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

