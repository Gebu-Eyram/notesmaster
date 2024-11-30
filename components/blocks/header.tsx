import React from "react";
import SheetComponent from "./sheet-component";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <SheetComponent />

      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
