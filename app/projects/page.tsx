import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
import ImageVortex from "@/components/ImageVortex";

const ProjectPage = () => {
  return (
    <main className="p-10 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <ImageVortex />
        <h2 className="tracking-tight text-5xl font-extrabold text-center max-w-[550px] text-wrap drop-shadow-[0_0px_79px_rgba(151,95,217,1)]">
          Projects I feel can make a difference out there!{" "}
        </h2>
        <span className="w-96 text-center">
          As an engineer, I try to find creative ways I can make lives easier.
        </span>
        <Separator className="w-96" />
        
        <h2 className="tracking-tight text-5xl font-extrabold text-center w-[550px]">
        </h2>
      </div>
    </main>
  );
};

export default ProjectPage;
