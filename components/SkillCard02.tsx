import React from "react";
import { Card, CardHeader } from "./ui/card";

const SkillCard02 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none">
      <CardHeader>
        <span>
          <h2 className="tracking-tight text-xl font-bold">
            What I Have to Offer
          </h2>
          <br />
          To come up with solutions, identifying a problem that needs solving is
          very crucial. This reverse-engineering has helped me identify a lot of
          problems that we face day-to-day, not only as developers, but also as
          consumers.
          <br />
          <br />
          Given my expertise and longevity with the aforementioned skillset, I
          have readily developed
          <span className="font-bold"> high quality, industry-standard software</span> for clients who
          look for change. I also readily participate in
          hackathons all over the nation, winning some of the prestigious ones,
          and getting recognized by companies such as <span className="font-bold"> Google</span>!
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
