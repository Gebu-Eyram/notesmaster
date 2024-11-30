import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" font-semibold text-primary ">
            Learn easier and faster
          </h2>
          <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight  sm:text-5xl lg:text-balance">
            Note taking made simple with Notesmaster AI
          </p>
          <p className="mt-4 md:text-lg text-muted-foreground">
            The most advanced note taking app with AI capabilities.
          </p>
          <Button className="mt-4 lg:mt-6 ">
            <Link
              href="/dashboard"
              className="text-white flex gap-2 items-center"
            >
              Get started
              <Rocket className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
