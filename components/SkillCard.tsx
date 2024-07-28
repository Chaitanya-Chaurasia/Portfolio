import React from "react";
import { Card, CardHeader } from "./ui/card";
import { RocketIcon } from "@radix-ui/react-icons";

const SkillCard = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none">
      <CardHeader>
        <span>
          <h2 className="tracking-tight text-3xl font-bold flex items-center gap-2">
            <RocketIcon />
            Why Engineering?
          </h2>
          <br />
          What I'm about to say will resonate with any
          <span className="italic"> Minecraft</span> player: Engineering is like
          that first <span className="italic"> diamond pickaxe</span> that has
          allowed humanity to unlock new realms, new possibilities, and level up
          in their game.
          <br />
          <br />
          Engineering has <span className="italic"> empowered </span> humanity
          to achieve feats once thought impossible. It has enabled every man, no
          matter where he lives, or what he does, to bring about a change. This
          is what attracted me to engineering, and what still motivates me
          everyday. It not only personifies but also serves as a testament to
          our collective evolution.
          <br />
          <br />
          If only <span className="italic"> Leonardo da Vinci</span> could
          witness the helicopters flying today, an invention he conceptualized
          over 500 years ago...
          <br />
          <br />
        </span>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
