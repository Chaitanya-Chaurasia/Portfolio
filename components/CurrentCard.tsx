import React from "react";
import { Card, CardHeader } from "./ui/card";

const CurrentCard = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none">
      <CardHeader>
        <h2 className="tracking-tight font-bold text-4xl">My Two Cents</h2>
        <br />
        <span>
          To start off, I'm currently a student, pursuing my{" "}
          <span className="italic">Bachelors of Science</span> at{" "}
          <span className="italic">Arizona State University</span>. I'll be entering my final year as a student and yeah, time really does fly by.
          <br />
          <br />
          Only yesterday was I in grade nine, going to school, sitting for tests, sharing lunch with my friends, only a few hours ago did I step in as a freshman and fast forward to now, I'm ready to graduate and step into the real-word. Sometimes, it simply overwhelmes me. And yes, "it" really is out there.
          <br />
          <br />
          Everything has just been so quick and I wish I could go back in time, but I have grown to accept that change is inevitable, and that I should embrace it.
          </span>
      </CardHeader>
    </Card>
  );
};

export default CurrentCard;
