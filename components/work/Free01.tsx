import React from "react";
import { Card, CardHeader } from "../ui/card";

const Free01 = () => {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
      <h2 className="tracking-tight text-3xl font-bold">
          My <span className="text-red-300"> Journey</span> as a <span className="bg-teal-400 text-lime-100 dark:text-white"> Freelancer!</span>
        </h2>
        <br />
        We're about to touch 8 billion people on this planet. Thus, it is safe
        to say that there are a number of unique and magnificient ideas out
        there. For instance, every hackathon I've been to, I've talked to
        atleast 20 developers with a good, unique idea I have never thought or heard of, and
        thats just out of a couple hundred students. Now then, imagine the
        enormity of diverse ideas and creativity that lies out there. As a developer, this makes me contribute to this
      </CardHeader>
    </Card>
  );
};

export default Free01;
