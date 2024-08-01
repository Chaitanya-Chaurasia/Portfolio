import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import legal from "@/public/legalaid.png";
import incog from "@/public/incognito.png";
import boba from "@/public/boba.png";
import { AspectRatio } from "./ui/aspect-ratio";

const ImageVortex = () => {
  return (
    <Card className="border-none">
      <CardContent className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <Image
          src={legal}
          alt="boba"
          className="rounded-xl -rotate-12 mt-20 hover:scale-110 transition-all shadow-lg shadow-gray-500 hover:z-[1000] "
          height={160}
        />
        <Image
          src={boba}
          alt="boba"
          className="rounded-xl h-52 w-96 z-50 hover:scale-110 transition-all shadow-lg shadow-indigo-400"
        />
        <Image
          src={incog}
          alt="boba"
          className="rounded-xl rotate-12 lg:mt-20 hover:scale-110 transition-all shadow-lg shadow-black hover:z-[1000]"
          height={160}
        />
      </CardContent>
    </Card>
  );
};

export default ImageVortex;
