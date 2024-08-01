import { Separator } from "@/components/ui/separator";
import React from "react";
import { ImageVortex } from "@/components/CustomComponents";
import { ChromaDesc, WaitlistChroma, ChromaIntro } from "@/components/Chroma";
import { Projects } from "@/components/Projects";

const ProjectPage = () => {
  return (
    <main className="p-10 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <ImageVortex />
        <h2 className="tracking-tight text-5xl font-extrabold text-center max-w-[550px] text-wrap drop-shadow-[0_0px_79px_rgba(171,214,70,0.5)]">
          Projects I feel can make a difference out there!{" "}
        </h2>
        <span className="w-96 text-center">
          As an engineer, I try to find creative ways I can make lives easier.
        </span>
        <Separator className="w-96 my-10" />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <ChromaIntro />
          <ChromaDesc />
          <WaitlistChroma />
        </div>
        <Separator className="w-96 my-10" />
        {/* <h2 className="tracking-tight text-xl font-light text-center text-wrap drop-shadow-[0_0px_79px_rgba(171,214,70,0.5)]">
          Check these out
        </h2> */}
        <Projects />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-2"></div>
      </div>
    </main>
  );
};

export default ProjectPage;
