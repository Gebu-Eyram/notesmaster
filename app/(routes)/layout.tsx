import Header from "@/components/blocks/header";
import Sidebar from "@/components/blocks/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="lg:grid h-screen w-full lg:grid-cols-[230px_1fr]">
        <Sidebar />
        <div className="h-screen">{children}</div>
      </div>
    </div>
  );
};

export default layout;
