"use client";
import Navbar from "../components/navbar";
import profile2 from "@/public/profile2.jpeg";
import ellipse from "@/public/ellipse.svg";
import pattern from "@/public/pattern.jpg";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import devpost from "@/public/devpost.svg";
import gmail from "@/public/gmail.svg";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen font-new-font w-full text-white overflow-auto bg-black">
      <div className="bg-black flex lg:flex-col flex-row flex-[0.1_0.1_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start">
        <Image src={ellipse} alt="" className=" h-5 lg:mt-5" />
        <Image src={ellipse} alt="" className=" h-5" />
        <Image src={ellipse} alt="" className=" h-5" />
      </div>
      <div className="bg-purple-new flex flex-col flex-[2_2_0%] p-1 gap-2 ">
        <Navbar />
        <div className="flex flex-col px-10">
          <span className="text-[40px] h-12">i specialize</span>
          <span className="text-[40px] h-12">in the following</span>
          <span className="font-bold bg-gradient-to-r from-neon to-green-new text-transparent bg-clip-text text-[40px]">
            &lt;skills/&gt;
          </span>
          <div className="flex flex-col flex-[3_3_0%] text-white border-x border-t border-white px-10 py-2 w-full h-full text-[16px] items-left justify-center mt-5 font-bold">
            python, java, c++, swift <br />
            javascript, typescript
            <br /> html, scss, tailwind <br /> react.js, node.js, express.js
            <br />
            flask, keras, opencv <br />
            git, github <br />
            postgres, mysql mongodb <br />
            amazon web services <br />
            google cloud
            <br /> rest apis <br />
            docker, linux <br />
            software qa & testing- selenium, jUnit
            <br />
            product design & figma
            <br />
            machine learning & ai technologies
            <br />
            <span className="font-bold text-[20px]">
              and always learning more!
            </span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-new flex flex-col flex-[4_4_0%] items-center justify-start"></div>
      {/* <div className="flex-[1.5_1.5_0%] h-full">
        <Image src={profile2} alt="me" className="w-full h-full" />
      </div> */}

      <div className="bg-black flex lg:flex-col flex-row flex-[0.2_0.2_0%]  p-0 items-center justify-center lg:items-center lg:justify-end">
        <div className="flex flex-row lg:flex-col h-full ">
          <div className="bg-gray-new lg:mt-20 flex items-center justify-center">
            <Image src={github} alt="" height={40} />
          </div>
          <div className="bg-blue-new p-1 flex items-center justify-center">
            <Image src={linkedin} alt="" height={30} />
          </div>
          <div className="bg-pink-new p-1 flex items-center justify-center">
            <Image src={devpost} alt="" height={30} />
          </div>
          <div className="bg-white p-1 flex items-center justify-center">
            <Image src={gmail} alt="" height={20} />
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row lg:flex-col gap-0 lg:gap-1 p-1">
          <Image src={ellipse} alt="" className=" h-5 " />
          <Image src={ellipse} alt="" className=" h-5" />
          <Image src={ellipse} alt="" className=" h-5 lg:mb-6" />
        </div>
      </div>
    </main>
  );
}
