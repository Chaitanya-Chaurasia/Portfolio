import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "./ui/separator";

const IntroCard02 = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <h2 className="tracking-tight text-5xl font-extrabold">
            EAT, CODE, DEPLOY, SLEEP, REPEAT!
          </h2>
        </CardHeader>
      </Card>
      <Card className="w-[350px]">
        
      </Card>
    </div>
  );
};

export default IntroCard02;
