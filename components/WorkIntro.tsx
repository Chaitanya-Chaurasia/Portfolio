"use client";
import React from "react";
import { Card, CardHeader } from "./ui/card";

export const WorkIntro = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <h2 className="tracking-tighter text-4xl font-extrabold text-center">
          What is <span className="underline text-lime-400">life </span>without{" "}
          <span className="text-fuchsia-400">work</span>, I ask?
        </h2>
        <br />
        <span className="text-[14px] text-center">
          Most people I make conversation with tend to interchange the words
          &quot;job&quot; and &quot;work&quot;. I implore them to retrospect. To
          me, work should be a harbinger of jubilation- something that gets you
          out of your bed every morning. The goal could be anything. Think of it
          as a spectrum that includes a multitude of desires- from something
          materialistic, monetary in value to something as abstract as success
          or satisfaction.
          <br />
          <br />
          So often, people get so immersed in their jobs that they start
          equating it with work. I&apos;m not denying saying that couldn&apos;t
          be the case; if it is, you&apos;re on your way to become successful.
          <br />
          <br />
          If not, I urge everyone to take a step back and ponder.
        </span>
      </CardHeader>
    </Card>
  );
};

export const WorkIntro02 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <span className="text-[14px] text-center">
          Think about what you truly want to achieve in life. Identify your
          goals and start working towards them. Now that&apos;s what I call real
          work.
          <br />
          <br />
          And don&apos;t quote me on this— it&apos;s advice I&apos;ve received
          from only so many successful people.
          <br />
          <br />
          <h2 className="tracking-tighter font-semibold text-[16px]">
            So, what am I working towards?
          </h2>
          <br />
          My passion lies in creating unique, state-of-the-art solutions that
          deliver innovation and impact at scale. To give an idea, one of my
          goals is to contribute towards achieving sustainability.
          <br />
          <br />
          Our planet is facing significant challenges, and contributing to a
          solution that benefits future generations would be incredibly
          fulfilling for me.
          <br />
          <br />
          <span className="italic">
            &quot; Life is like art. You have to work hard to keep it simple and
            still have meaning. &quot;
          </span>
          <br />
          <div className="text-right p-2 ">-Charles De Lint</div>
        </span>
      </CardHeader>
    </Card>
  );
};
