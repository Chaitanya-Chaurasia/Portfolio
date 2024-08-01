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
import legal from "@/public/legalaid.png";
import incog from "@/public/incognito.png";
import boba from "@/public/boba.png";
import React from "react";
import Image from "next/image";
import ImageVortex from "@/components/ImageVortex";

const ProjectPage = () => {
  return (
    <main className="p-10 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <ImageVortex />
        <h2 className="tracking-tight text-5xl font-extrabold text-center w-[550px]">
          Projects I feel can make a difference out there!{" "}
        </h2>
        <span className="w-96 text-center">
          Whether you're looking to collaborate, just say hi, or looking forward
          to having a chat, I'm all down for it. Go ahead, drop me a message and
          I'll get back to you within 24 hours.
        </span>
        <Separator className="w-96" />
      </div>
    </main>
  );
};

export default ProjectPage;
