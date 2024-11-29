"use client";

const navLinks = [
  {
    title: "Workspace",
    icon: Library,
    href: "/workspace",
  },
  {
    title: "Upgrade",
    icon: Coins,
    href: "/upgrade",
  },
];
import {
  Bell,
  Coins,
  Home,
  Library,
  LineChart,
  Package,
  Package2,
  Plus,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src={"/pencil.png"}
              height={20}
              width={20}
              alt="logo"
              className="h-6 w-6"
            />
            <span className="font-bold lg:text-lg">Notesmaster AI</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Button
              variant={"outline"}
              className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all delay-300 ease-out my-2"
            >
              <Plus className="h-4 w-4" />
              Add Note
            </Button>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary mt-1 ${
                  pathname === link.href
                    ? "text-foreground bg-muted border "
                    : "text-muted-foreground"
                }
`}
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
