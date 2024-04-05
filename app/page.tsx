"use client";
import Navbar from "./components/navbar";
import profile from "@/public/profile.jpeg";
import ellipse from "@/public/ellipse.svg";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen font-new-font w-full">
      <div className="bg-black flex lg:flex-col flex-row flex-[0.2_0.2_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start">
        <Image src={ellipse} alt="" className=" h-5 lg:mt-8" />
        <Image src={ellipse} alt="" className=" h-5" />
        <Image src={ellipse} alt="" className=" h-5" />
      </div>
      <div className="bg-purple-new flex-col flex-[3_3_0%]">
        <Navbar />
      </div>
      <div className="bg-yellow-new flex-col flex-[2.5_2.5_0%]">3</div>
      <div className="flex-[3_3_0%]">
        <Image src={profile} alt="me" className="h-full w-full" />
      </div>
      <div className="bg-black flex-col flex-[0.2_0.2_0%]">5</div>
    </main>
  );
}
