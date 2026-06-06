import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth-middleware";
import { auth } from "@clerk/nextjs/server";

type Variables = {
    userId: string
}


const userApp = new Hono<{Variables: Variables}>()
    .use("*/", authMiddleware)
    .get("/me", async (c) => {
        const user = c.get("user");
        const { has } = await auth();

        const isPro = await has({plan: "pro_plan"})

        return c.json({
            ...user,
            isPro
        });
    })

export { userApp }