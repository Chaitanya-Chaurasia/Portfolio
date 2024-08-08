"use client";
import React from "react";
import { Card, CardHeader } from "./ui/card";

export const WorkIntro = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <h2 className="tracking-tighter text-4xl font-extrabold">
          What is <span className="underline text-lime-400">life </span>without{" "}
          <span className="text-fuchsia-400">work</span>, I ask.
        </h2>
        <br />
        <span className="text-[14px]">
         
          A lot of people I have spoken to, tend to use the words "job" and
          "work" interchangeably. Well, I agree to disagree on this one. To me,
          "working on something" means putting in physical or mental effort to
          achieve a goal. The goal could lie anywhere on a vast spectrum- from
          something matereliastic, monetary in value to something as abstract as
          success or satisfaction.
          <br />
          <br />
          Often, people get so immersed in their jobs that they start equating
          them with work. I'm not saying that couldn't be the case, if it is, I
          think you're on the right track.
          <br />
          <br />
          If not, I urge everyone to take a step back
        </span>
      </CardHeader>
    </Card>
  );
};

export const WorkIntro02 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <span className="text-[14px]">
          and think about what they truly want to achieve in life. Identify your
          goals and start working towards them. That's what I call real work.
          <br />
          <br />
          I'm not alone in this belief—it's advice I've received from many
          successful individuals.
          <br />
          <br />
          <h2 className="tracking-tighter font-semibold text-[16px]">
            So, what am I working towards?
          </h2>
          <br />
          My passion lies in creating unique, state-of-the-art solutions. One of
          my ultimate goals is to develop something sustainable.
          <br />
          <br />
          Our planet is facing significant challenges, and contributing to a
          solution that benefits future generations would be incredibly
          fulfilling for me.
          <br />
          <br />
          <span className="italic">
            " Life is like art. You have to work hard to keep it simple and
            still have meaning. "
          </span>
          <br />
          <div className="text-right p-2 ">-Charles De Lint</div>
        </span>
      </CardHeader>
    </Card>
  );
};
