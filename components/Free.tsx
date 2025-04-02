"use client";
import React from "react";

// shadcn components
import { Card, CardHeader } from "./ui/card";

export const Free01 = () => {
  return (
    <Card className="w-[350px] border-none text-center">
      <CardHeader className="text-sm">
        <h2 className="tracking-tighter text-3xl font-bold">Freelancing!</h2>
        <br />
        As we approach a global population of 8 billion, the sheer number of
        unique and brilliant ideas is staggering. Every hackathon I&apos;ve
        attended reveals at least 10-20 innovative ideas I&apos;ve never
        encountered before, and that&apos;s only from a couple hundred students.
        <br />
        <br />
        Imagine then, the vast diversity of creativity worldwide. As a
        developer, this motivates me to contribute actively. This is precisely
        why I love helping others build their ideas.
      </CardHeader>
    </Card>
  );
};

export const Free02 = () => {
  return (
    <Card className="w-[350px] border-none text-center">
      <CardHeader className="text-sm inline-block">
        Over the past year, I&apos;ve freelanced for over 10 clients, including
        startups and established firms, and had the privilege of being part of{" "}
        <span className="font-semibold">Echo Labs </span>
        at <span className="font-semibold">Arizona State University</span>.
        These experiences have tested my skills and taught me invaluable lessons
        about the development process, from initial stages to production.
        I&apos;m deeply grateful to those who believed in me and provided these
        opportunities.
        <br />
        <br />I really feel that this has been a a true test of skills. In the
        process, I have also learnt a lot of new things about what goes behind
        the scenes from the development stages all the way to production. I
        really want to thank the people who bet on me.
      </CardHeader>
    </Card>
  );
};

export const Free03 = () => {
  return (
    <Card className="w-[350px] border-none text-center">
      <CardHeader>
        <h2 className="tracking-tighter text-3xl font-bold flex gap-2 items-center">
          Travel & Photography
        </h2>
        <br />
        <span className="text-sm">
          I love traveling and capturing the moments I experience. It&apos;s
          truly a privilege to explore different parts of the world. I use a
          Canon 3000D for my photography. While it&apos;s not the most advanced
          camera, it suits me well as I continue to learn and improve.
          <br />
          <br />
          You&apos;ll catch some of my favorite shots in the{" "}
          <span className="font-semibold"> Blogs</span> section, where I share
          not just the images, but the stories and experiences behind them. For
          me, photography is about about preserving memories and sharing the
          beauty of our world with others.
        </span>
      </CardHeader>
    </Card>
  );
};
