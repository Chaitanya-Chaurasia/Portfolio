import * as React from "react";

import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/navbar";
import IntroCard from "@/components/IntroCard";
import ImageCard from "@/components/ImageCard";
import me from "@/public/profile.jpeg";
import IntroCard02 from "@/components/IntroCard02";

export default function Home() {
  return (
    <main className="bg-white h-screen p-10">
      <div className="flex flex-col items-center gap-10">
        <NavigationMenuDemo />
        <div className="flex flex-col lg:flex-row w-screen p-10 items-top gap-10 justify-center md:items-top">
          <ImageCard />
          <IntroCard />
          <IntroCard02 />
        </div>
      </div>
    </main>
  );
}
