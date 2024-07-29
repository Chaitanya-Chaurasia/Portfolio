import React from "react";
import Image from "next/image";
import me from "@/public/profile.jpeg";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImageCard = (img: any) => {
  return (
    <Card className="w-[350px]">
      <Image src={me} alt="image" className="rounded-xl h-full w-full" />
    </Card>
  );
};

export default ImageCard;
