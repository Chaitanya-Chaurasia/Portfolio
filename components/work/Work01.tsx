import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  BashOriginal,
  CsharpOriginal,
  LinuxOriginal,
  LuaOriginal,
} from "devicons-react";
import ScienceIcon from '@mui/icons-material/Science';

const Work01 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg flex gap-1 items-center">
            IDEXX Laboratories
            <ScienceIcon />
          </h2>
          <h2 className="tracking-tight font-semibold text-md ">
            Embedded Software Engineering Intern

          </h2>{" "}
          <h2 className="tracking-tight font-normal text-sm flex text-muted-foreground gap-5">
            Portland, Maine
            <Separator orientation="vertical" className="h-[20px]" />
            June - August, 2024
          </h2>
          <br />
          <span className="text-sm">
            This summer, I'm at IDEXX, working with the Chemistry team on
            designing internal tools for testing a fleet of machines called{" "}
            <span className="font-semibold">"Autocats." </span>
            Autocats are a fleet of{" "}
            <span className="font-semibold">veterinary </span>
            machines used to prognose, diagnose and run sophisticated health
            tests.
            <br />
            <br />I am developing an full-fledged{" "}
            <span className="font-semibold">API</span> in{" "}
            <span className="font-semibold">C# (ASP.NET)</span> and{" "}
            <span className="font-semibold">Bash </span>, that enables
            communicating with these remote devices, enabling{" "}
            <span className="font-semibold">
              software installation, running remote tests, testing, remote
              health checkups{" "}
            </span>
            and <span className="font-semibold">machine maintainance</span>. I
            hope to deploy this feature before the end of my term. (hopefully
            :)) 🤞
            <br />
            <br />
            In terms of productivity and learning, this has been an exceptional
            experience. From the interview process, to getting onboarded, and to
            now almost finish, everything was so smooth and professional. I
            think I was able to level up my inter-personal skills, better
            communication for example, and also my technical prowess. I learnt a
            lot, and also got a chance to meetup with the Best Seller{" "}
            <span className="font-semibold">Keith Ferrazzi</span>. If I could
            rate it, a 12/10.
            <br />
            <br />
            <h2 className="font-semibold flex gap-2 items-center">
              Tools I used: <CsharpOriginal /> C# &#x2022; <LuaOriginal /> Lua
              &#x2022; <LinuxOriginal /> Linux &#x2022;
              <BashOriginal /> Bash
            </h2>
          </span>
        </span>
      </CardHeader>
    </Card>
  );
};

export default Work01;
