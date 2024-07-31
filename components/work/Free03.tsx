import React from "react";
import { Card, CardHeader } from "../ui/card";

const Free03 = () => {
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
          <br /> I have a Canon 3000D, nothing fancy, but I'm still a rookie, which is why I keep learning and, on top of that,
          do it because I enjoy pursuing it. Find some of my clicks in the
          <span className="font-semibold"> Blogs</span> section.
        </span>
      </CardHeader>
    </Card>
  );
};

export default Free03;
