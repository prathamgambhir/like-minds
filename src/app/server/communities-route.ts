import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth-middleware";
import prisma from "@/lib/db";
import { getOrCreateUserByClerkId } from "@/lib/user-utils";
import { HTTPException } from "hono/http-exception";

type Variables = {
  userId: string;
  user: NonNullable<Awaited<ReturnType<typeof getOrCreateUserByClerkId>>>;
};

const app = new Hono<{ Variables: Variables }>();

const communitiesApp = app
  .use("/*", authMiddleware)
  .get("/all", async (c) => {
    const allCommunities = await prisma.communities.findMany();

    return c.json({
      success: true,
      allCommunities,
    });
  })
  .get("/", async (c) => {
    const user = c.get("user");

    const userCommunities = await prisma.communityMember.findMany({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        communityId: true,
        userId: true,
        joinedAt: true,
        community: true,
      },
    });

    return c.json({
      success: true,
      userCommunities,
    });
  })
  .post("/:communityId/join", async (c) => {
    const user = c.get("user");
    const communityId = c.req.param("communityId");

    const isExisting = await prisma.communityMember.findFirst({
      where: {
        userId: user.id,
        communityId: communityId,
      },
    });

    if (isExisting) {
      throw new HTTPException(400, {
        message: "User already joined community",
      });
    }

    await prisma.communityMember.create({
      data: {
        userId: user.id,
        communityId: communityId,
      },
    });

    return c.json({
      success: true,
      message: "Joined community successfully",
    });
  })
  .get("/:communityId/goals", async (c) => {
    const user = c.get("user");
    const communityId = c.req.param("communityId");

    const goals = await prisma.learningGoal.findMany({
      where: {
        communityId: communityId,
        userId: user.id,
      },
    });

    return c.json({
      success: true,
      goals,
    });
  });

export { communitiesApp };
