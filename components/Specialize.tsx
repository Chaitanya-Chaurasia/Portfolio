import React from "react";
import { Card, CardHeader } from "./ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const Specialize = () => {
  return (
    <CardContainer className="w-[370px] inter-var border rounded-xl">
      <CardBody className=" relative group/card w-auto h-auto rounded-xl p-6">
        <CardItem translateZ="50" className="text-center font-extrabold ">
          <span className="text-3xl leading-8 tracking-tighter font-semibold">
            I specialize in
          </span>
          <br />
          <br />
          <span
            className="text-4xl tracking-tighter leading-8"
            style={{
              background: "linear-gradient(to right, #FA1591 0%, #2D5AC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Full Stack Dev
          </span>
          <br />
          <span
            className="text-6xl tracking-tighter leading-10"
            style={{
              background: "linear-gradient(to right, #FA1591 0%, #2D5AC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frontend Dev. UI/UX
          </span>
          <br />
          <span
            className="text-5xl tracking-tighter leading-10"
            style={{
              background: "linear-gradient(to right, #FA1591 0%, #2D5AC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            RESTful APIs
          </span>
          <br />
          <span
            className="text-6xl tracking-tighter leading-10"
            style={{
              background: "linear-gradient(to right, #FA1591 0%, #2D5AC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            iOS Apps
          </span>
          <br />
          <span
            className="text-6xl tracking-tighter leading-12"
            style={{
              background: "linear-gradient(to right, #FA1591 0%, #2D5AC1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI & ML
          </span>
          <br />
          (hover on me)
        </CardItem>
        <br />
      </CardBody>
    </CardContainer>
  );
};
