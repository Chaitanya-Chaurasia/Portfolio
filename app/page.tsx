import * as React from "react";

import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/navbar";
import IntroCard from "@/components/IntroCard";
import ImageCard from "@/components/ImageCard";
import me from "@/public/profile.jpeg";

export default function Home() {
  return (
    <main className="bg-white min-h-screen p-10">
      <div className="flex flex-col items-center">
        <NavigationMenuDemo />
        <div className="flex flex-row w-screen p-10 items-center gap-10 justify-center">
          <ImageCard />
          <IntroCard />
        </div>
      </div>
    </main>
  );
}
