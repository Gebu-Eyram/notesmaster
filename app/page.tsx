"use client";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);
  const checkUser = async () => {
    const result = await createUser({
      // @ts-ignore
      email: user?.primaryEmailAddress?.emailAddress,
      // @ts-ignore
      username: user?.fullName,
      //@ts-ignore
      imgUrl: user?.imageUrl,
    });
    console.log(result);
  };

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  return (
    <div>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
