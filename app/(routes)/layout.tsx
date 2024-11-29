import Header from "@/components/blocks/header";
import Sidebar from "@/components/blocks/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="h-screen">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
