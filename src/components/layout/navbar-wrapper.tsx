import { auth } from "@clerk/nextjs/server";
import Navbar from "./navbar";

export default async function NavbarWrapper(){
    const {has} = await auth();
    const isPro = has({plan: "pro_plan"})

    return (
        <Navbar isPro={isPro}/>
    )
}