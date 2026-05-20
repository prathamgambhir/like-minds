"use client";

import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Brain, SkullIcon, TrophyIcon } from "lucide-react";

export default function Navbar({ isPro }: { isPro: boolean }) {
  const { isSignedIn } = useUser();
  return (
    <header>
      <div className="layout-container">
        {/* Logo */}
        <div className="text-2xl font-semibold flex items-center justify-center gap-2">
          <Brain />
          <Link href={"/"}>LikeMinds</Link>
        </div>
        {/* Links */}
        {isSignedIn && (
          <nav className="flex items-center justify-center gap-3">
            <Link href={"/dashboard"}>
              <Button variant={"ghost"}>Dashboard</Button>
            </Link>
            <Link href={"/communities"}>
              <Button variant={"ghost"}>Communities</Button>
            </Link>
            <Link href={"/chat"}>
              <Button variant={"ghost"}>Chat</Button>
            </Link>
          </nav>
        )}
        {/* Auth Buttons */}
        <div>
          {isSignedIn ? (
            <div className="flex items-center justify-center gap-4 ">
              {isPro ? (
                <Badge variant={"outline"} className="h-7 w-auto gap-2 ">
                  <TrophyIcon /> Pro
                </Badge>
              ) : (
                <Badge variant={"outline"} className="h-7 w-auto gap-2 ">
                  <TrophyIcon /> Free
                </Badge>
              )}
              <UserButton 
                appearance={{
                  elements: {
                    
                  },
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center gap-3">
              <Link href={"/sign-in"}>
                <Button variant={"outline"} className="normal-button">SignIn</Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="normal-button">SignUp</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
