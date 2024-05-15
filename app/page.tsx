"use client";
import Navbar from "./components/navbar";
import profile from "@/public/profile.jpeg";
import ellipse from "@/public/Ellipse 1.svg";
import ellipse2 from "@/public/Ellipse 2.svg";
import ellipse3 from "@/public/Ellipse 3.svg";

import pattern from "@/public/pattern.jpg";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import devpost from "@/public/devpost.svg";
import gmail from "@/public/gmail.svg";
import pat from "@/public/pattern.gif";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-new-font w-full text-white overflow-hidden">
      <section className="flex flex-col lg:flex-row min-h-screen font-new-font w-full text-white overflow-hidden">
        <div className="bg-black flex lg:flex-col flex-row flex-[0.1_0.1_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start">
          {/* <Image src={ellipse} alt="" className=" h-5 lg:mt-5" />
        <Image src={ellipse2} alt="" className=" h-5" />
        <Image src={ellipse3} alt="" className=" h-5" /> */}
        </div>
        <div className="bg-purple-new flex flex-col flex-[2.5_2.50%] p-1 gap-20">
          <Navbar />
          <div className="flex flex-col ml-10">
            <span className="font-bold h-1">he/him</span>
            <span className="text-[50px] h-12">Hey,I'm</span>
            <span className="text-[50px] font-bold h-12">Chaitanya,</span>
            <span className="text-[50px] flex flex-row gap-6">
              a
              <span className="font-bold bg-gradient-to-r from-neon to-green-new text-transparent bg-clip-text">
                &lt;full-stack/&gt;
              </span>
            </span>
            <span className="text-black text-[50px]">developer.</span>
            <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-red-700" />

            <span className="text-[16px]">
              building something innovative & sustainable for the future!
            </span>

            <div className="flex flex-row h-full w-full mt-10">
              <button className="bg-gray-new flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <Image src={github} alt="" height={40} />
              </button>
              <button className="bg-blue-new p-1 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <Image src={linkedin} alt="" height={30} />
              </button>
              <button className="bg-pink-new p-1 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <Image src={devpost} alt="" height={30} />
              </button>
              <button className="bg-white p-1 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <Image src={gmail} alt="" height={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-yellow-new flex flex-col flex-[2.5_2.5_0%] items-center justify-start">
          <div className="px-10 flex flex-col gap-10 h-full">
            <div>
              <Image src={pattern} alt="me" className="" />
            </div>
            <div className="flex flex-col flex-[3_3_0%] text-black border-x border-t border-black px-10 w-full h-full text-[22px] items-left justify-center">
              <span className="font-bold h-5">i'm</span>
              <span className="h-5">an engineer,</span>
              <span className="h-5">curious,</span>
              <span className="h-5">creative,</span>
              <span className="h-5">passionate,</span>
              <span className="font-bold h-5">a footballer,</span>
              <span className="h-5">love travelling,</span>

              <span className="h-5">in tempe, az</span>
              <span className="flex flex-row gap-2 h-5">
                <span className="font-bold">from</span>
                <span className="font-bold">india,</span>
              </span>
              <span className="flex flex-row gap-2">
                <span className="font-bold">junior</span>
                <span>at</span>
                <span className="font-bold">arizona state,</span>
              </span>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex-[3_3_0%]">
          <Image
            src={profile}
            alt="me"
            className="h-full w-full bg-cover bg-center"
          />
        </div>
        <div className="bg-black flex lg:flex-col flex-row flex-[0.2_0.2_0%] p-0 items-center justify-center lg:items-center lg:justify-end">
          <div className="flex flex-row lg:flex-col gap-0 lg:gap-1 p-1">
            <Image src={ellipse3} alt="" className=" h-5 " />
            <Image src={ellipse2} alt="" className=" h-5" />
            <Image src={ellipse} alt="" className=" h-5 lg:mb-6" />
          </div>
        </div>
      </section>
      <section className="flex flex-col min-h-screen font-new-font w-screen bg-black text-white text-center p-10 border-r-4 border-b-2 border-white">
        <div className="flex flex-row items-center border-r-4 border-t-2">
          <div className="flex-1">
            {" "}
            <Image src={pat} alt="" />
          </div>
          <span className="text-[100px] font-bold text-center p-10 flex-1">
            <span>believe. </span>
            <span>create. </span>
            <span>inspire.</span>
          </span>
          <span className="text-left w-80 p-10">
            As an engineer, I always strive to learn as much as possible. Given
            how dynamic the field is, I need to be requipped with the latest
            technology out in the market- be it the modern age AI or the
            traditional operating systems!
          </span>
        </div>
      </section>
    </main>
  );
}
