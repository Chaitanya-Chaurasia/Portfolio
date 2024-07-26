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

const IntroCard = () => {
  return (
    <Card className="w-[350px] p-6 flex flex-col gap-2">
      <CardTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hi, I'm <span className="text-green-400">Chaitanya,</span>
        <br /> a budding{" "}
        <span className="text-white drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
          engineer
        </span>{" "}
        and a <span className="text-orange-400">full-stack</span> developer!
      </CardTitle>
      <br />
      <CardContent className="p-0 flex flex-row gap-1">
        <Badge>he/him</Badge>
        <Badge>📌 Tempe, Arizona, USA</Badge>
        <Badge>💻 IDEXX</Badge>
      </CardContent>
      <CardContent className="flex gap-2 p-4 items-center justify-center">
        <GitHubLogoIcon height={20} width={20} />
        <LinkedInLogoIcon height={20} width={20} />
        <TwitterLogoIcon height={20} width={20} />
        <InstagramLogoIcon height={20} width={20} />
      </CardContent>
    </Card>
  );
};

export default IntroCard;
