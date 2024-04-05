"use client";
import Navbar from "./components/navbar";
import profile from "@/public/profile.jpeg";
import ellipse from "@/public/ellipse.svg";
import pattern from "@/public/pattern.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen font-new-font w-full text-white overflow-hidden">
      <div className="bg-black flex lg:flex-col flex-row flex-[0.1_0.1_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start">
        <Image src={ellipse} alt="" className=" h-5 lg:mt-6" />
        <Image src={ellipse} alt="" className=" h-5" />
        <Image src={ellipse} alt="" className=" h-5" />
      </div>
      <div className="bg-purple-new flex flex-col flex-[2.5_2.50%] p-1 gap-10 ">
        <Navbar />
        <div className="flex flex-col ml-10">
          <span className="font-bold h-1">he/him</span>
          <span className="text-[50px] h-12">Hey, I'm</span>
          <span className="text-[50px] font-bold h-12">Chaitanya,</span>
          <span className="text-[50px] flex flex-row gap-6 h-14">
            a
            <span className="font-bold bg-gradient-to-r from-neon to-green-new text-transparent bg-clip-text">
              &lt;full stack/&gt;
            </span>
          </span>
          <span className="text-black text-[50px]">developer.</span>
          <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-red-700" />
          <span className="text-[16px]">
            building something sustainable for the
          </span>
          <span className="text-[16px]">future!</span>
        </div>
      </div>
      <div className="bg-yellow-new flex flex-col flex-[2.5_2.5_0%] items-center justify-start">
        <div className="px-10 flex flex-col gap-10 h-full">
          <div>
            <Image src={pattern} alt="me" className="" />
          </div>
          <div className="flex flex-col flex-[3_3_0%] text-black border-x border-t border-black px-10 w-full h-full text-[22px] items-left justify-center">
            <span className="font-bold h-5">i'm a/an</span>
            <span className="h-5">engineer,</span>
            <span className="h-5">curious,</span>
            <span className="h-5">creative,</span>
            <span className="h-5">passionate,</span>
            <span className="font-bold h-5">footballer,</span>
            <span className="h-5">love travelling,</span>
            <span className="flex flex-row gap-2 h-5">
              <span className="font-bold">junior</span>
              <span>at</span>
              <span className="font-bold">arizona state,</span>
            </span>
            <span className="h-5">in tempe, az</span>
            <span className="flex flex-row gap-2 h-5">
              <span className="font-bold">from</span>
              <span className="font-bold">delhi,india,</span>
            </span>
            <span className="flex flex-col">
              <span className="h-5">still learning</span>
              <span className="font-bold">& exploring!</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-[3_3_0%]">
        <Image
          src={profile}
          alt="me"
          className="h-full w-full bg-cover bg-center"
        />
      </div>
      <div className="bg-black flex-col flex-[0.2_0.2_0%]">5</div>
    </main>
  );
}
