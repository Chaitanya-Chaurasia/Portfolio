import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const IntroCard02 = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <Card className="w-[350px] bg-transparent border-none">
        <CardHeader>
          <h2 className="tracking-tight text-5xl font-extrabold">
            <span className="text-yellow-500">eat,</span>{" "}
            <span className="text-violet-400"> code,</span>{" "}
            <span className="text-yellow-800">debug😖,</span>{" "}
            <span className="text-red-400">sleep,</span>{" "}
            <span className="text-blue-500">repeat!</span>
          </h2>
        </CardHeader>
      </Card>
      <Card className="w-[350px] bg-transparent border-none">
        <CardHeader>
          <h2 className="tracking-tight text-sm">
            Hey, it's me. A small introduction, I'm a{" "}
            <span className="font-medium">
              full-stack application developer
            </span>{" "}
            from the vibrant and convivial land of India. I build innovative and
            creative solutions for a living.
            <br />
            <br />
            This pursuit of creativity has brought me all the way to the US,
            where I've embarked on a{" "}
            <span className="font-medium">
              scintillating and enriching
            </span>{" "}
            journey. I've realized how much more there is to learn and grow.{" "}
            <span className="font-medium">
              From here on, the sky's the limit!
            </span>
          </h2>
        </CardHeader>
      </Card>
    </div>
  );
};

export default IntroCard02;
