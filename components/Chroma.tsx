import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export const ChromaIntro = () => {
  return (
    <Card className="border-none w-[350px]">
      <CardHeader>
        <h2 className="tracking-tight text-3xl font-extrabold text-center ">
          Presenting <br />
          <span
            className="underline text-6xl"
            style={{
              background: "linear-gradient(to right, #0EB5E6 0%, #CE3BCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Chroma
          </span>
          <br />
          <span className="font-normal text-3xl">
            A{" "}
            <span className=" font-semibold">
              modern, user-friendly, light-weight
            </span>{" "}
            and <span className=" font-semibold">intuitive</span> component
            library that helps you code your imaginations.
          </span>
        </h2>
      </CardHeader>
    </Card>
  );
};

export const ChromaDesc = () => {
  return (
    <Card className="border-none w-[350px]">
      <CardHeader>
        <h2 className="tracking-tight text-xl font-bold text-center ">Why?</h2>
        <span className="text-center">
          If you've worked with React.js, you might have seen how annoying it is to
          style components when it comes to color combinations, gradients and
          image sizing. 
          <br />
          <br /> Well, worry no more, because now you can use pre-built
          components to acheive this feat.
          For example, the image vortex and drop shadow on the very top of the
          page is a part of my component library that lets you do that in 2-3
          lines.
        </span>
      </CardHeader>
    </Card>
  );
};

export const WaitlistChroma = () => {
  return (
    <Card className="w-[280px] h-[300px] bg-gradient-to-t from-inherit to-lime-500">
      <CardHeader className="flex flex-col items-center justify-center h-full gap-10">
        <h2 className="tracking-tight text-center font-light">
          Sign up with to get notifications on product launch, updates and
          more...
        </h2>
        <Input placeholder="Email" />
        <div className="flex gap-2 items-center">
          <Button variant="ghost">
            <FigmaLogoIcon />
          </Button>
          &
          <Button variant="ghost">
            <GitHubLogoIcon />
          </Button>
          <span className="text-xs">coming soon!</span>
        </div>
      </CardHeader>
    </Card>
  );
};
