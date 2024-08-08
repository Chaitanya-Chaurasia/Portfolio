import { Card } from "@/components/ui/card";
import { WorkIntro, WorkIntro02 } from "@/components/WorkIntro";
import Image from "next/image";
import React from "react";
import para from "@/public/para.jpeg";
import { Separator } from "@/components/ui/separator";
import { Work01, Work02, Work03, Work04 } from "@/components/Work";
import { Free01, Free02, Free03 } from "@/components/Free";
import garfield from "@/public/garfield.gif";
import comic from "@/public/comic.gif";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const WorkPage = () => {
  return (
    <main className="min-h-screen p-2">
      <div className="flex flex-col items-center justify-center xs:gap-2 lg:gap-10">
        <div className="flex flex-col lg:flex-row items-top justify-center gap-2">
          <Card className="w-[350px] p-8 border-none bg-transparent">
            <Image src={para} alt="para" className="rounded-xl" />
          </Card>
          <WorkIntro />
          <WorkIntro02 />
        </div>
        <Separator className="w-96 my-10" />
        <h2 className="tracking-tighter text-3xl font-bold my-20">
          Professional Experience
        </h2>
        <div className="flex flex-col lg:flex-row items-top justify-center gap-4">
          <Work01 />
          <Work02 />
        </div>
        <div className="flex flex-col lg:flex-row items-top justify-center gap-4">
          <Work03 />
          <Work04 />
        </div>
        <Separator className="w-96 my-10" />
        <div className="flex flex-col lg:flex-row items-center gap-10 m-6">
          <h2 className="tracking-tight text-3xl font-extrabold italic text-orange-500">
            Daily Humor
          </h2>
          <Image src={comic} alt="gif" height={120} />
          <Image src={garfield} alt="gif" height={100} />
        </div>

        <Separator className="w-96 my-10" />

        <div className="flex flex-col lg:flex-row items-top justify-center gap-2">
          <Free01 />
          <Free02 />
          <Free03 />
        </div>
        <Separator className="w-96 my-10" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="tracking-tighter text-xl font-semibold">
            As <span>Robert Frost</span>, so eloquently, writes,
          </h2>
          <br />
          <br />
          <span className="text-center ">
            Whose woods these are I think I know.
            <br />
            His house is in the village though; <br />
            He will not see me stopping here
            <br /> To watch his woods fill up with snow.
          </span>
          <br />
          <span className="text-center">
            My little horse must think it queer <br />
            To stop without a farmhouse near
            <br />
            Between the woods and frozen lake <br />
            The darkest evening of the year.
          </span>
          <br />
          <span className="text-center ">
            He gives his harness bells a shake <br />
            To ask if there is some mistake.
            <br />
            The only other sound&apos;s the sweep <br />
            Of easy wind and downy flake.
          </span>
          <br />
          <span className="text-center ">
            The woods are lovely, dark and deep,
            <br />
            But I have promises to keep,
            <br /> And <span className="font-semibold">miles to go</span> before
            I sleep,
            <br /> And miles to go{" "}
            <span className="font-semibold">before I sleep.</span>
          </span>
        </div>
        <Separator className="w-96 my-10" />
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

export default WorkPage;
