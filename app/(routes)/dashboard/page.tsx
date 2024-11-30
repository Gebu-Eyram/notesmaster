import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import SheetComponent from "@/components/blocks/sheet-component";

export const description =
  "A dashboard for viewing, adding, and managing your notes. We're building a note taking app with AI capabilities.";
export const metadata = {
  title: "Workspace | Notemaster AI",
  description,
};

const Dashboard = () => {
  return (
    <div className="flex flex-col ">
      <main className="flex flex-1 h-full  flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        </div>
        <Nofiles />
      </main>
    </div>
  );
};

export default Dashboard;

const Nofiles = () => {
  return (
    <div
      className="flex flex- h-96 items-center justify-center rounded-lg border border-dashed shadow-sm"
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">You have no notes</h3>
        <p className="text-sm text-muted-foreground">
          You can manage your notes when you upload them.
        </p>
        <Button className="mt-4">Create new note</Button>
      </div>
    </div>
  );
};
