"use client";
import React from "react";
import { Card, CardHeader } from "./ui/card";
import { BackpackIcon, RocketIcon } from "@radix-ui/react-icons";
import {
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  NextjsPlain,
  JavascriptOriginal,
  TypescriptOriginal,
  ExpressOriginal,
  NodejsPlain,
  AmazonwebservicesPlainWordmark,
  GitOriginal,
  DockerOriginal,
  PostgresqlOriginal,
} from "devicons-react";
import { SketchLogoIcon } from "@radix-ui/react-icons";

export const SkillCard = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none text-center">
      <CardHeader>
        <span>
          <h2 className="tracking-tighter text-3xl font-bold flex items-center gap-2 justify-center">
            <RocketIcon />
            Why Engineering?
          </h2>
          <br />
          What I&apos;m about to say will resonate with any
          <span className="italic"> Minecraft</span> player: Engineering is like
          that first <span className="italic"> diamond pickaxe</span> that has
          enabled humanity to unlock new realms, new possibilities, and level up
          in their game.
          <br />
          <br />
          Engineering has <span className="italic"> empowered </span> us to
          achieve feats once thought impossible. It equips every person with a
          potential to bring about a change. This is what attracted me to
          engineering, and what still motivates me everyday. It not only
          personifies but also serves as a testament to our collective
          evolution.
          <br />
          <br />
          If only the <span className="italic"> Wright Brothers </span> could
          witness the planes flying today, an invention they conceptualized over
          150 years ago...
          <br />
          <br />
        </span>
      </CardHeader>
    </Card>
  );
};

export const SkillCard02 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none  text-center">
      <CardHeader>
        <span>
          <h2 className="tracking-tighter text-3xl font-bold flex items-center gap-2 justify-center">
            <BackpackIcon />
            What I Offer
          </h2>
          <br />
          To come up with solutions, identifying a problem statement is very
          crucial. This kind of reverse-engineering has helped me identify a lot
          of problems that we face day-to-day, not only as a developer, but also
          as a consumer.
          <br />
          <br />
          Given my experience with the aforementioned skillset, I have
          experience developing
          <span className="font-semibold">
            {" "}
            high quality, industry-standard software
          </span>{" "}
          for clients who look for change, including designing and building{" "}
          <span className="font-semibold">
            dashboards, internal tools
          </span> and <span className="font-semibold">interfaces. </span> I also
          readily participate in hackathons, winning some of the prestigious
          ones, and getting recognized by companies such as
          <span className="font-semibold"> Google</span>!
          <br />
          <br />
          Lets get in touch if you want to bring an idea to life.
          <br />
          <br />
        </span>
      </CardHeader>
    </Card>
  );
};

export const SkillCard03 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none text-center">
      <CardHeader>
        <span>
          <h2 className="tracking-tighter text-3xl font-bold flex items-center gap-2 justify-center">
            <SketchLogoIcon />
            My Skillset
          </h2>
          <br />
          I find myself at a junction. I see my childhood slipping away with the
          advent of my career. Sucks right? I&apos;m only a student, but soon
          about to become a professional which is why I keep on polishing my
          skillset to keep up with the market. Now, I don&apos;t talk only of
          technical competency but also of soft-skills.
          <br />
          <br />
          Some of the most important ones I believe are{" "}
          <span className="font-semibold">
            leadership, adaptability, management
          </span>{" "}
          and <span className="font-semibold">effective, impactful speech</span>
          . Coming to technical skills, these are the skills I have used the
          most:
        </span>
        <br />
        <div className="flex text-sm font-medium items-center gap-2">
          <PythonOriginal /> Python
          <JavascriptOriginal /> JavaScript
          <TypescriptOriginal /> TypeScript
        </div>
        <div className="flex text-sm font-medium items-center gap-2">
          <NextjsPlain /> Nextjs
          <ReactOriginal /> React
          <TailwindcssOriginal /> Tailwind
          <ExpressOriginal /> Express
        </div>
        <div className="flex text-sm font-medium items-center gap-2">
          <NodejsPlain /> Node
          <AmazonwebservicesPlainWordmark /> AWS
          <GitOriginal /> Git
          <DockerOriginal /> Docker
          <PostgresqlOriginal /> SQL
        </div>
        <br />
        <span>
          After all, given how vast my field is, as a domain, I try to keep my
          feet in different spheres, learning something new!
        </span>
      </CardHeader>
    </Card>
  );
};
