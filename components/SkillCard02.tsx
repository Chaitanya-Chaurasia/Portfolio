import React from "react";
import { Card, CardHeader } from "./ui/card";
import { BackpackIcon } from "@radix-ui/react-icons";

const SkillCard02 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none overflow-visible">
      <CardHeader>
        <span>
          <h2 className="tracking-tight text-3xl font-bold flex items-center gap-2 ">
            <BackpackIcon />
            What I Offer
          </h2>
          <br />
          To come up with solutions, identifying a problem that needs solving is
          very crucial. This reverse-engineering has helped me identify a lot of
          problems that we face day-to-day, not only as developers, but also as
          consumers.
          <br />
          <br />
          Given my experience with the aforementioned skillset, I have
          experience developing
          <span className="font-semibold">
            {" "}
            high quality, industry-standard software
          </span>{" "}
          for clients who look for change, including designing and building{" "}
          <span className="font-semibold">
            dashboards, internal tools
          </span> and <span className="font-semibold">interfaces. </span> I also
          readily participate in hackathons, winning some of the prestigious
          ones, and getting recognized by companies such as
          <span className="font-semibold"> Google</span>!
          <br />
          <br />
          Lets get in touch if you want to bring an idea to life.
          <br />
          <br />
        </span>
      </CardHeader>
    </Card>
  );
};

export default SkillCard02;
