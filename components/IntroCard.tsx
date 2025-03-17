"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import medium from "@/public/medium.svg";
import { Separator } from "./ui/separator";
import Image from "next/image";

const getMyTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes =
    currentTime.getMinutes() >= 10
      ? currentTime.getMinutes().toString()
      : "0" + currentTime.getMinutes();
  const suffix = hours >= 12 ? "PM" : "AM";

  return " " + hours.toString() + ":" + minutes + " " + suffix;
};

export const IntroCard = () => {
  return (
    <Card
      className="w-[350px] p-6 flex flex-col gap-2 text-card-foreground shadow bg-transparent"
      id="glass-card"
    >
      <CardTitle className="text-4xl font-bold tracking-tighter lg:text-5xl">
        Hi, I&apos;m <span className="text-green-400">Chaitanya,</span>
        <br /> a budding{" "}
        <span className="text-white drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
          engineer
        </span>{" "}
        and a <span className="text-orange-400">full-stack</span> developer!
      </CardTitle>
      <br />
      <CardTitle className="p-0 flex flex-row gap-1 ">
        <Badge>he/him</Badge>
        <Badge>📌 Tempe, Arizona, USA</Badge>
        <Badge>💻 B:Side</Badge>
      </CardTitle>
      <CardTitle className="flex flex-row gap-2 my-2 items-center">
        <a
          href="https://github.com/Chaitanya-Chaurasia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon height={20} width={20} className="hover:scale-125" />
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
        <a
          href="https://medium.com/@chaitanyalvis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={medium} alt="logo" height={20} width={20} />
        </a>
        <Separator orientation="vertical" className="h-[20px]" />
        <span className="font-medium text-muted-foreground text-sm">
          cchauras@asu.edu
        </span>
      </CardTitle>
      <CardTitle className="text-sm font-medium text-muted-foreground">
        My local time:
        {getMyTime()}
      </CardTitle>
    </Card>
  );
};

export const IntroCard02 = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <Card className="w-[350px] bg-transparent border-none">
        <CardHeader>
          <h2 className="tracking-tighter text-5xl font-extrabold">
            <span className="text-yellow-500">eat,</span>{" "}
            <span className="text-violet-400"> code,</span>{" "}
            <span className="text-yellow-800">debug😖,</span>{" "}
            <span className="text-red-400">sleep,</span>{" "}
            <span className="text-blue-500">repeat!</span>
          </h2>
        </CardHeader>
      </Card>
      <Card className="w-[350px] bg-transparent border-none">
        <CardHeader>
          <h2 className="tracking-tighter text-sm">
            Hey, it&apos;s me. A small introduction, I&apos;m a{" "}
            <span className="font-medium">
              full-stack application developer
            </span>{" "}
            from the ever-so vibrant and convivial land of India. I live out
            coding my imaginations into innovative and creative solutions.
            <br />
            <br />
            This pursuit of creativity has brought me all the way to the US,
            where I&apos;ve embarked on a{" "}
            <span className="font-medium">
              scintillating and enriching
            </span>{" "}
            journey. I&apos;ve realized how much more there is to learn and
            grow.{" "}
            <span className="font-medium">
              From here on, sky&apos;s the limit!
            </span>
          </h2>
        </CardHeader>
      </Card>
    </div>
  );
};
