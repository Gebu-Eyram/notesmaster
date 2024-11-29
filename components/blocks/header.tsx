import React from "react";
import SheetComponent from "./sheet-component";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <SheetComponent />

      <div className="ml-auto">
        <Button variant="outline" size="icon" className="shrink-0">
          <CircleUser className="h-6 w-6" />
          <span className="sr-only">User menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
