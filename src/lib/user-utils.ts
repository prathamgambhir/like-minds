import prisma from "@/lib/db"
import { User, currentUser } from "@clerk/nextjs/server"

const createUserByClerkId = async (clerkUser: User) => {
    const user = await prisma.user.create({
        data: {
            clerkId: clerkUser.id,
            email: clerkUser.emailAddresses[0].emailAddress || "" as string,
            name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim() || "User" + Math.random().toString(36).substring(2, 5).toUpperCase(),
            imageUrl: clerkUser.imageUrl || "",       
        }
    })

    return user;
}

export const getOrCreateUserByClerkId = async (clerkId: string) => {
    let user = await prisma.user.findFirst({
        where: {
            clerkId: clerkId
        }
    })

    if (!user) {
        const clerkUser = await currentUser();
        if (!clerkUser) {
            return null;
        }

        const email = clerkUser.emailAddresses[0].emailAddress || "" as string;

        const existingUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (existingUser) {
            user = await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    clerkId: clerkUser.id,
                    name: clerkUser.firstName || clerkUser.lastName || clerkUser.username || existingUser.name,
                    imageUrl: clerkUser.imageUrl || existingUser.imageUrl,
                    updatedAt: new Date()
                }
            })
        }else{
            user = await createUserByClerkId(clerkUser);
        }
    }

    return user;
}