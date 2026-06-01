import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth-middleware";
import prisma from "@/lib/db";

type Variables = {
    userId: string
}

const communitiesApp = new Hono<{Variables: Variables}>()
    .use("/*", authMiddleware)
    .get("/all", async(c) => {
        const allCommunities = await prisma.communities.findMany()

        return c.json({
            success: true,
            allCommunities
        });
    })
    .get("/", async (c) => {
        const user = c.get("user");

        const userCommunities = await prisma.communityMember.findMany({
            where: {
                userId: user.id
            },
            select: {
                id: true,
                communityId: true,
                userId: true,
                joinedAt: true,
                community: true,
            }
        })

        return c.json({
            success: true,
            userCommunities
        })
    })

export { communitiesApp };