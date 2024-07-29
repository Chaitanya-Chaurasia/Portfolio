import React from "react";
import { Card, CardHeader } from "./ui/card";

const WorkIntro = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <h2 className="tracking-tight text-5xl font-extrabold">
          What is <span className="underline bg-lime-400">life </span>without{" "}
          <span className="text-fuchsia-400">work</span>, I say.
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

export default WorkIntro;
