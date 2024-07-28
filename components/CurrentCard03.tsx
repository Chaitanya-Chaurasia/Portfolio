import React from "react";
import { Card, CardHeader } from "./ui/card";
import { CopyIcon, HeartFilledIcon, Share1Icon } from "@radix-ui/react-icons";

const CurrentCard03 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none">
      <CardHeader>
        <span>
          focused on the present moment, we are less likely to get lost in the
          past or the future. I believe that this principle, I call "The
          Timeless Way of Life," will be my lamp as I find my away through this
          very dense forest called Life.
          <br />
          <br />
          Fifty years down, when I reflect, I should feel a sense of
          satisfaction, accomplishment and gratitude for all the experiences
          that I would have lived through. That is something I strive for,
          everyday!
          <br />
          <br />
          <h2 className="tracking-tight text-lg font-bold">
            Well, enough with this pedagogy, you don't say?
          </h2>
          <br />
          If you have more time, continue scrolling down to learn about what I
          have learnt. and how I want to contribute to the society.
          <br />
          <br />
        </span>
        <div className="flex gap-2 items-center">
          <span className="flex-1" />
          <span className="text-sm">10 likes</span>
          <HeartFilledIcon />
          <CopyIcon />
          <Share1Icon />
        </div>
      </CardHeader>
    </Card>
  );
};

export default CurrentCard03;
