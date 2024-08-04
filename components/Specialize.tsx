import React from "react";
import { Card, CardHeader } from "./ui/card";

export const Specialize = () => {
  return (
    <Card className="w-[370px] border-none">
      <CardHeader>
        <span className="text-center font-extrabold">
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
        </span>
        <br />
      </CardHeader>
    </Card>
  );
};
