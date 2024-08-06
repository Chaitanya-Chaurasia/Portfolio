import * as React from "react";
import { IntroCard, IntroCard02 } from "@/components/IntroCard";
import { ImageCard } from "@/components/CustomComponents";
import {
  CurrentCard,
  CurrentCard02,
  CurrentCard03,
} from "@/components/CurrentCard";
import { SkillCard, SkillCard02, SkillCard03 } from "@/components/SkillCard";
import Image from "next/image";
import mario from "@/public/mario.gif";
import Footer from "@/components/Footer";
import { Specialize } from "@/components/Specialize";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen p-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row w-screen p-4 items-center gap-10 justify-center lg:items-top">
          <ImageCard />
          <IntroCard />
          <IntroCard02 />
        </div>
        <Separator className="w-96 my-20" />
        <div className="dark:drop-shadow-[0_0px_19px_rgba(200,14,170,0.8)] drop-shadow-[0_0px_60px_rgba(2,14,70,0.3)]">
          <Specialize />
        </div>
        <Separator className="w-96 my-10" />
        <div className="flex flex-col lg:flex-row w-screen p-10 gap-10 justify-center items-top">
          <CurrentCard />
          <CurrentCard02 />
          <CurrentCard03 />
        </div>
        <div className="flex flex-col lg:flex-row w-screen p-10 items-center gap-10 justify-center border my-20">
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
        <Separator className="w-96 my-10" />
        <div className="flex flex-col w-screen p-10 items-center gap-10 justify-center">
          <h2
            className="tracking-tight text-2xl font-semibold text-center w-[550px]"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Well, that was a little bit about me. Feel free to check out other
            links and keep an eye out for updates.
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
