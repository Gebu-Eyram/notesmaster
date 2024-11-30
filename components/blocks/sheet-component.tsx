"use client";
import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
const navLinks = [
  {
    title: "Dashboard",
    icon: Library,
    href: "/dashboard",
  },
  {
    title: "Upgrade",
    icon: Coins,
    href: "/upgrade",
  },
];
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Coins, HomeIcon, Library, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import Home from "@/app/page";
import Image from "next/image";
import UploadPdfDialog from "./upload-pdf-dialog";

const SheetComponent = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col overflow-auto">
        <DialogTitle className="text-2xl hidden font-bold">
          Notesmaster AI Sheet
        </DialogTitle>
        <div className="my-4 border-b pb-2">
          <Link href="/" className="flex items-center gap-2  font-semibold">
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
        <nav className="flex flex-col mt-8 items-start gap-2 w-full font-medium">
          <UploadPdfDialog />
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${
                pathname === link.href
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground"
              }
`}
            >
              <link.icon className="h-4 w-4" />
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetComponent;
