import { Card } from "@/components/ui/card";
import WorkIntro from "@/components/WorkIntro";
import Image from "next/image";
import React from "react";
import para from "@/public/para.jpeg";
import WorkIntro02 from "@/components/WorkIntro02";
import { Separator } from "@/components/ui/separator";
import Work02 from "@/components/work/Work02";
import Work01 from "@/components/work/Work01";
import Work03 from "@/components/work/Work03";

const WorkPage = () => {
  return (
    <main className="min-h-screen p-2">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col lg:flex-row items-top justify-center gap-2">
          <Card className="w-[350px] p-8 border-none bg-transparent">
            <Image src={para} alt="para" className="rounded-xl" />
          </Card>
          <WorkIntro />
          <WorkIntro02 />
        </div>
        <Separator className="w-96" />
        <h2 className="tracking-tight text-3xl font-bold">
          Professional Experience
        </h2>
        <div className="flex flex-col lg:flex-row items-top justify-center gap-2">
          <Work01 />
          <Work02 />
          {/* <Work03 /> */}
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
