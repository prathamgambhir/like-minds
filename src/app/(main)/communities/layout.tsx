import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-conatiner">
      <div className="flex justify-between px-24 py-16">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-6xl font-bold mb-4">Communities</h1>
          <p className="text-sm px-2">
            Manage your communities, learning goals and find learning partners
          </p>
        </div>
        <div className="py-8">
          <Link href={"/communities/all"}>
            <Button className="" size={"lg"}>
              <PlusIcon /> Join More Communities
            </Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
