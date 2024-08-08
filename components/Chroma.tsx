"use client";
import React, { useState } from "react";
import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { isEmailValid } from "@/lib/helper";
import { toast } from "sonner";

export const ChromaIntro = () => {
  return (
    <Card className="border-none w-[350px]">
      <CardHeader>
        <h2 className="tracking-tighter text-3xl font-extrabold text-center ">
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
        <h2 className="tracking-tighter text-xl font-bold text-center ">
          Why?
        </h2>
        <span className="text-center text-sm">
          If you&apos;ve worked with React.js, you know how annoying it is to
          style components when it comes to color combinations, gradients and
          image sizing. Writing huge blocks of CSS definitely becomes a chore in
          big projects.
          <br />
          <br /> Well, worry no more, because now you can use pre-built
          components to achieve this feat. In fact, a lot fo styled components
          on this website have been created using Chroma.
        </span>
      </CardHeader>
    </Card>
  );
};

export const WaitlistChroma = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: any) => {
    // add email to database and send an alert saying subscribed.
    e.preventDefault();
    setLoading(true);
    console.log("first");

    if (!isEmailValid(email)) {
      toast.error("Please enter a valid email address.");
    } else {
      toast.success("You were added to waitlist!");
    }

    setLoading(false);
    setEmail("");

    return;
  };
  return (
    <Card className="w-[280px] h-[300px] bg-gradient-to-t from-inherit to-lime-500">
      <CardHeader className="flex flex-col items-center justify-center h-full gap-5">
        <h2 className="tracking-tight text-center font-light">
          Sign up with to get notifications on product launch, updates and
          more...
        </h2>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          size="sm"
          className="text-xs"
          onClick={(e) => handleSubscribe(e)}
        >
          Get on Waitlist
        </Button>
        <div className="flex gap-2 items-center">
          <Button variant="ghost" disabled className="p-0">
            <FigmaLogoIcon />
          </Button>
          <Button variant="ghost" disabled className="p-0">
            <GitHubLogoIcon />
          </Button>
          <span className="text-xs">coming soon!</span>
        </div>
      </CardHeader>
    </Card>
  );
};
