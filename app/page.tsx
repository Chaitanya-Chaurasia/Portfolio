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
import SkillCard03 from "@/components/SkillCard03";
import Image from "next/image";
import mario from "@/public/mario.gif";
import Footer from "@/components/Footer";

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
        <div className="flex flex-col lg:flex-row w-screen p-10 gap-10 justify-center items-top">
          <CurrentCard />
          <CurrentCard02 />
          <CurrentCard03 />
        </div>
        <div className="flex flex-col lg:flex-row w-screen p-10 items-center gap-10 justify-center border">
          <Image src={mario} alt="mario" height={250} />
          <h2 className="tracking-tight text-5xl font-extrabold text-center w-[550px]">
            <span className="text-red-300">Mario says </span>
            <span className="text-green-300">keep scrolling! </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row w-screen p-10 items-top gap-10 justify-center">
          <SkillCard />
          <SkillCard03 />
          <SkillCard02 />
        </div>
        <div className="flex flex-col w-screen p-10 items-center gap-10 justify-center">
          <h2 className="tracking-tight text-2xl font-semibold text-center w-[550px]" style={{
            background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Well, that was a little bit about me. Feel free to check out other
            links and keep an eye out for updates. Back to work then, chop chop!
            <br />
            <br />
            Thank you.
          </h2>
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </main>
  );
}
