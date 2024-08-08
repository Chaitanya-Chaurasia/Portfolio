"use client";

import React, { useState } from "react";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { CopyIcon, HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export const CurrentCard = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none text-center">
      <CardHeader>
        <h2 className="tracking-tighter font-bold text-4xl">My Two Cents</h2>
        <br />
        <span className="font-normal">
          To start with, I'm currently a student, pursuing my{" "}
          <span className="italic">Bachelors of Science</span> at{" "}
          <span className="italic">Arizona State University</span>. I'll be
          entering my final year as a student and yeah, time really does fly by.
          <br />
          <br />
          Only yesterday was I in grade nine, going to school, sitting for
          tests, sharing lunch with my friends, only a few hours ago did I step
          in as a freshman and fast forward to now, I'm ready to graduate and
          step into the real-word. Sometimes, it simply overwhelmes me. And yes,
          "it" really is out there.
          <br />
          <br />
          Everything has just been so quick and I wish I could go back in time,
          but I have grown to accept that change is inevitable, and that I
          should embrace it.
        </span>
      </CardHeader>
    </Card>
  );
};

export const CurrentCard02 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none  text-center">
      <CardHeader>
        <span className="font-normal">
          Life has really been incredibly benign to me, giving me more than I
          could ever have asked for. To reciprocate this respect, I have come to
          respect its certain aspects. I can conclude that they are{" "}
          <span className="italic">management</span> and{" "}
          <span className="italic">mindset</span> that differentiates the
          successful from the ordinary.
          <br />
          <br />
          Over the past few years in college, I have evolved from a rookie to,
          well let me put it this way, an accomplished tyro (get the pun?) when
          it comes to these two very indispensible skills. With time, I have
          adopted a versatile mindset, that has enabled me to evolve as a
          person, learn and become accomplished in new skills and to achieve
          excellence in whatever I indulge in.
          <br />
          <br />I believe that time, like a wise old owl, guides us to the best
          of our ability. It has taught me that when we are
        </span>
      </CardHeader>
    </Card>
  );
};

export const CurrentCard03 = () => {
  const [clicked, setClicked] = useState(false);
  const [like, setLike] = useState(240);

  const copyText = () => {
    const text =
      "To start off, I'm currently a student, pursuing my Bachelors of Science at Arizona State University. I'll be entering my final year as a student and yeah, time really does fly by. Only yesterday was I in grade nine, going to school, sitting for tests, sharing lunch with my friends, only a few hours ago did I step in as a freshman and fast forward to now, I'm ready to graduate and step into the real-word. Sometimes, it simply overwhelmes me. And yes, 'it' really is out there. Everything has just been so quick and I wish I could go back in time, but I have grown to accept that change is inevitable, and that I should embrace it Life has really been benign to me. It has given me more than I could ever have asked. To reciprocate this respect, I have come to the conclusion that they are management and mindset that differentiates the successful from the ordinary. Over the past few years in college, I have evolved from a rookie to, well let me put it this way, an accomplished tyro (get the pun?) when it comes to the two very indispensible skills. With time, I have adopted a versatile mindset, that has enabled me to evolve as a person, learn and become accomplished in new skills and to achieve excellence in whatever I indulge in. I believe that time, like a wise old owl, guides us to the best of our ability. It has taught me that when we are focused on the present moment, we are less likely to get lost in the past or the future. I believe that this principle, I call 'The Timeless Way of Life,' will be my lamp as I find my away through this very dense forest called Life. Fifty years down, when I reflect, I should feel a sense of satisfaction, accomplishment and gratitude for all the experiences that I would have lived through. That is something I strive for, everyday! Well, enough with this pedagogy, you don't say? If you have more time, continue scrolling down to learn about what I have learnt and how I want to contribute to the society.";
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="w-[350px] bg-transparent border-none  text-center">
      <CardHeader>
        <span>
          focused on the present moment, we are less likely to get lost in the
          past or the future. I believe that this principle, I call{" "}
          <span className="italic">"The Timeless Way of Life,"</span> will be my
          lamp as I find my away through this very dense forest called Life.
          <br />
          <br />
          Fifty years down, when I reflect, I should feel a sense of
          satisfaction, accomplishment and gratitude for all the experiences
          that I would have lived through. That is something I strive for,
          everyday!
          <br />
          <br />
          <h2 className="tracking-tighter leading-4 text-lg font-bold">
            Well, enough with the pedagogy, you don't say?
          </h2>
          <br />
          If you have more time, continue scrolling down to learn about what I
          have learnt and how I want to contribute to the society.
          <br />
          <br />
        </span>
        <div className="flex items-center gap-2">
          <span className="flex-1" />
          <span className="text-sm ">{like} likes</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (clicked) {
                setClicked(false);
                setLike(like - 1);
              } else {
                setClicked(true);
                setLike(like + 1);
              }
            }}
          >
            {clicked && <HeartFilledIcon />}
            {!clicked && <HeartIcon />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toast("Copied to Clipboard!")}
          >
            <CopyIcon onClick={copyText} />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
