import React from "react";
import { Card, CardHeader } from "./ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const Specialize = () => {
  return (
    <CardContainer className="w-[370px] border-none inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6">
        <CardItem translateZ="50" className="text-center font-extrabold ">
          <span className="text-5xl">I specialize in</span>
          <br />
          <span
            className="text-3xl"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Full Stack Software
          </span>
          <br />
          <span
            className="text-6xl"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frontend Dev. UI/UX
          </span>
          <br />
          <span
            className="text-5xl"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            RESTful APIs
          </span>
          <br />
          <span
            className="text-6xl"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            iOS Apps
          </span>
          <br />
          <span
            className="text-6xl"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI & ML
          </span>
        </CardItem>
        <br />
      </CardBody>
    </CardContainer>
  );
};
