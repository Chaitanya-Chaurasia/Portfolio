"use client";
import React from "react";
import Image from "next/image";
import me from "@/public/profile.jpeg";
import legal from "@/public/legalaid.png";
import incog from "@/public/incognito.png";
import boba from "@/public/boba.png";
import sonic from "@/public/sonic.gif";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ImageCard = (img: any) => {
  return (
    <Card className="w-[350px]">
      <Image src={me} alt="image" className="rounded-xl h-full w-full" />
    </Card>
  );
};

export const ImageVortex = () => {
  return (
    <Card className="border-none drop-shadow-[0_0px_79px_rgba(171,214,70,0.5)]">
      <CardContent className="flex flex-col lg:flex-row items-center justify-center gap-0">
        <Image
          src={legal}
          alt="boba"
          className="rounded-xl -rotate-12 mt-20 hover:scale-110 transition-all shadow-lg shadow-gray-500 drop-shadow-[0_0px_79px_rgba(71,214,70,0.5)] "
          height={160}
        />
        <Image
          src={boba}
          alt="boba"
          className="rounded-xl h-52 w-96 z-40 hover:scale-110 transition-all shadow-lg shadow-indigo-400 drop-shadow-[0_0px_79px_rgba(200,14,170,0.5)] "
        />
        <Image
          src={incog}
          alt="boba"
          className="rounded-xl rotate-12 lg:mt-20 hover:scale-110 transition-all shadow-lg shadow-black drop-shadow-[0_0px_79px_rgba(171,214,70,0.5)] "
          height={160}
        />
      </CardContent>
    </Card>
  );
};

export const SonicLoader = () => {
  return (
    <Card className="border-none">
      <CardHeader className="flex flex-row items-center justify-center gap-10">
        <Image src={sonic} alt="loader" height={50} />
        <h2 className="tracking-tighter text-xs">
          Hold tight! Delivering your message...
        </h2>
      </CardHeader>
    </Card>
  );
};
