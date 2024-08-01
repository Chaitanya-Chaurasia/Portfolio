"use client";
import React from "react";

// shadcn components
import { Card, CardHeader } from "./ui/card";

export const Free01 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <h2 className="tracking-tight text-3xl font-bold">
          My <span className="text-red-300"> Journey</span> as a{" "}
          <span className="bg-teal-400 text-lime-100 dark:text-white">
            {" "}
            Freelancer!
          </span>
        </h2>
        <br />
        We're about to touch 8 billion people on this planet. Thus, it is safe
        to say that there are a number of unique and magnificient ideas out
        there. For instance, every hackathon I've been to, I've talked to
        atleast 20 developers with a good, unique idea I have never thought or
        heard of, and thats just out of a couple hundred students. Now then,
        imagine the enormity of diverse ideas and creativity that lies out
        there. As a developer, this makes me contribute to this
      </CardHeader>
    </Card>
  );
};

export const Free02 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        forum as much as possible. I love helping other people build their
        ideas. In the past year so, I've freelanced for over 10 clients
        including both budding startups and established private firms. I've also
        been fortunate to be a part of Echo Labs at Arizona State having brought
        in more opportunities and opened new doors.
        <br />
        <br />I really feel that this has been a a true test of skills. In the
        process, I have also learnt a lot of new things about what goes behind
        the scenes from the development stages all the way to production. I
        really want to thank the people who bet on me.
      </CardHeader>
    </Card>
  );
};

export const Free03 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <h2 className="tracking-tight text-3xl font-bold flex gap-2 items-center">
          Travel & Photography
        </h2>
        <br />
        <span>
          Two more things I really enjoy are travelling and capture some of the
          moments I've lived. Its truly a privilege to travel, explore what
          different parts of the world have in store.
          <br />
          <br /> I have a Canon 3000D, nothing fancy, but I'm still a rookie,
          which is why I keep learning and, on top of that, do it because I
          enjoy pursuing it. Find some of my clicks in the
          <span className="font-semibold"> Blogs</span> section.
        </span>
      </CardHeader>
    </Card>
  );
};
