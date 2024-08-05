import { Separator } from "@/components/ui/separator";
import React from "react";
import { ImageVortex } from "@/components/CustomComponents";
import { ChromaDesc, WaitlistChroma, ChromaIntro } from "@/components/Chroma";
import {
  Projects,
  SchoolProjects,
  SkillAccordion,
} from "@/components/Projects";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const ProjectPage = () => {
  return (
    <main className="p-10 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <ImageVortex />
        <h2 className="tracking-tight text-6xl font-extrabold text-center max-w-[550px] text-wrap drop-shadow-[0_0px_79px_rgba(171,214,70,0.5)]">
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
        <div className="flex flex-col lg:flex-row gap-2 w-[350px]">
          <SkillAccordion />
        </div>
        <Separator className="w-96 my-10" />

        <Projects />
        <SchoolProjects />
        <h2 className="tracking-tight text-xl font-light text-center text-wrap drop-shadow-[0_0px_79px_rgba(171,214,70,0.5)] my-20">
          any many more on the way...{" "}
        </h2>
        <div className="flex items-center justify-center gap-10 mb-20">
          <a
            href="https://github.com/Chaitanya-Chaurasia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon
              height={20}
              width={20}
              className="hover:scale-125"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chai-t/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon
              height={20}
              width={20}
              className="hover:scale-125"
            />
          </a>

          <a
            href="https://www.instagram.com/chaitanya_chaurasia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon
              height={20}
              width={20}
              className="hover:scale-125"
            />
          </a>
          <Separator orientation="vertical" className="h-[20px]" />
          <span className="font-medium text-muted-foreground text-sm">
            cchauras@asu.edu
          </span>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
