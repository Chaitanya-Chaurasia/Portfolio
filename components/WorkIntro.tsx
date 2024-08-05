"use client";
import React from "react";
import { Card, CardHeader } from "./ui/card";

export const WorkIntro = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <h2 className="tracking-tight text-5xl font-extrabold">
          What is <span className="underline text-lime-400">life </span>without{" "}
          <span className="text-fuchsia-400">work</span>, I ask.
        </h2>
        <br />
        <span>
          A lot of people I have spoken to seem to interchange the word "job"
          with "work". Well, I agree to disagree on this one. When I say I am
          working on something, I put in efforts, be it physical or mental, to
          achieve something. That something could either be monetary in nature,
          or something abstract such as success, or satisfaction. Well, for the
          most part, people get so involved in their job, that they start
          assuming it as work. Therefore, I urge people to take some
        </span>
      </CardHeader>
    </Card>
  );
};

export const WorkIntro02 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <span>
          time off, think about what they really want to acheive in their life,
          and start to climb the ladders to reach that goal. Now that is what I
          call work.
          <br />
          <br />
          And I'm not the one saying this, I'm merely reiterating what many
          successful people I have met have advised.
          <br />
          <br />
          <h2 className="tracking-tight font-semibold">
            What am I working towards?
          </h2>
          <br />
          My passion lies in creating unique, state-of-the-art solutions. One of
          my end goals is to develop something sustainable. Our planet is facing
          extensive turmoil, and to engineer something that could help the
          generations to come would be my pleasure.
        </span>
      </CardHeader>
    </Card>
  );
};
