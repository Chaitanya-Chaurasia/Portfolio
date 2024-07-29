import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

const getMyTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes() >= 10 ? currentTime.getMinutes().toString() : "0" + currentTime.getMinutes(); 
  const suffix = hours >= 12 ? "PM" : "AM";

  return " " + hours.toString() + ":" + minutes + " " + suffix;
};

const IntroCard = () => {
  return (
    <Card className="w-[350px] p-6 flex flex-col gap-2 text-card-foreground shadow bg-transparent">
      <CardTitle className="text-4xl font-bold tracking-tight lg:text-5xl">
        Hi, I'm <span className="text-green-400">Chaitanya,</span>
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
        <Badge>💻 IDEXX</Badge>
      </CardTitle>
      <CardTitle className="flex flex-row gap-2 my-2 items-center">
        <GitHubLogoIcon
          height={20}
          width={20}
          className="hover:scale-125"
        />
        <LinkedInLogoIcon height={20} width={20} className="hover:scale-125" />
        <TwitterLogoIcon height={20} width={20} className="hover:scale-125" />
        <InstagramLogoIcon height={20} width={20} className="hover:scale-125" />
        <Separator orientation="vertical" className="h-[20px]"/>
        <span className="font-medium text-muted-foreground text-sm">cchauras@asu.edu</span>
      </CardTitle>
      <CardTitle className="text-sm font-medium text-muted-foreground">
        My local time:
        {getMyTime()}
      </CardTitle>
    </Card>
  );
};

export default IntroCard;
