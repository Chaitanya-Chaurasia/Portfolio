import * as React from "react";

import { Navbar } from "@/components/navbar";
import IntroCard from "@/components/IntroCard";
import ImageCard from "@/components/ImageCard";
import IntroCard02 from "@/components/IntroCard02";

export default function Home() {
  return (
    <main className="bg-white h-screen p-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <Navbar />
        <div className="flex flex-col lg:flex-row w-screen p-10 items-top gap-10 justify-center lg:items-top">
          <ImageCard />
          <IntroCard />
          <IntroCard02 />
        </div>
      </div>
    </main>
  );
}
