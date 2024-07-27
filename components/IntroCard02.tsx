import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const IntroCard02 = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <h2 className="tracking-tight text-5xl font-extrabold">
            <span className="text-yellow-500">EAT,</span>{" "}
            <span className="text-violet-400"> CODE,</span>{" "}
            <span className="text-yellow-800">DEPLOY,</span>{" "}
            <span className="text-red-400">SLEEP,</span>{" "}
            <span className="text-blue-500">REPEAT!</span>
          </h2>
        </CardHeader>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <h2 className="tracking-tight font-light text-sm">
            Hey, it's me. A small introduction, I'm a{" "}
            <span className="font-medium">
              full-stack application developer
            </span>{" "}
            from the{" "}
            <span className="font-medium text-purple-500">
              vibrant and convivial
            </span>{" "}
            land of India. I love building things, seeing it as a way to channel
            and{" "}
            <span className="font-medium text--500">
              unleash my creativity.
            </span>
            <br />
            <br />
            This pursuit of creativity has brought me all the way to the US,
            where I've embarked on a{" "}
            <span className="font-medium text-emerald-600">
              scintillating and enriching
            </span>{" "}
            journey. I've realized how much more there is to learn and grow.{" "}
            <span className="underline">
              From here on, the sky's the limit!
            </span>
          </h2>
        </CardHeader>
      </Card>
    </div>
  );
};

export default IntroCard02;
