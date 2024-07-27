import * as React from "react";

import { Navbar } from "@/components/navbar";
import IntroCard from "@/components/IntroCard";
import ImageCard from "@/components/ImageCard";
import IntroCard02 from "@/components/IntroCard02";
import CurrentCard02 from "@/components/CurrentCard02";
import CurrentCard from "@/components/CurrentCard";
import CurrentCard03 from "@/components/CurrentCard03";
import SkillCard from "@/components/SkillCard";
import SkillCard02 from "@/components/SkillCard02";

export default function Home() {
  return (
    <main className="min-h-screen p-2">
      <div className="flex flex-col items-center justify-center gap-10">
        <Navbar />
        <div className="flex flex-col lg:flex-row w-screen p-4 items-center gap-10 justify-center lg:items-top">
          <ImageCard />
          <IntroCard />
          <IntroCard02 />
        </div>
        <div className="flex flex-col lg:flex-row w-screen p-10 items-center gap-10 justify-center lg:items-top">
          <CurrentCard />
          <CurrentCard02 />
          <CurrentCard03 />
        </div>
        <div className="flex flex-col lg:flex-row w-screen p-10 items-center gap-10 justify-center lg:items-top">
          <SkillCard />
          <SkillCard02 />
        </div>
      </div>
    </main>
  );
}
