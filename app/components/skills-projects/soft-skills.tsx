import { Paper } from "@mui/material";
import React from "react";
import Image from "next/image";
import "../../styles/skills.css";

const SoftSkills = () => {
  return (
    <Paper
      elevation={0}
      className="flex flex-col items-center gap-4 p-5 rounded-3xl w-full"
      sx={{
        background: "none",
      }}
    >
      <span className="text-[40px] text-white">
        {" "}
        Life is all about learning!{" "}
      </span>
      <span className="text-center text-white">
        Yes, you heard it! The way I see it, life is an endless journey of
        discovery. It is a sort of quest that fuels oneself with a certain
        insatiable desire to learn. Think about it, why are we humans curious,
        why are we humans constantly looking to fathom miles deep into the
        oceans or to observe galaxies trillions and trillions of light years
        away from us- to grow, and to strive for the betterment of humanity all
        along. The thirst for knowledge drives me to push boundaries, to
        question the status quo, and to seek out the new and the unknown. And
        after so many years of learning, I can say that the beauty of this
        journey lies not just in acquiring knowledge, but in the realization
        that there's always more to learn, more to explore and that I am merely
        at the tip of the iceberg. It's a testament to the human spirit's
        boundless curiosity, a reminder that life, in its essence, is an endless
        quest for understanding.
      </span>
      <span className="text-[20px] text-white text-center">
        Some skills that I hold in very high regard and hope to keep on
        polishing upon:
      </span>
      <span
        className="text-[24px] text-white text-center"
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Be disciplined and patient! There's light at the end of every tunnel.
        Strive to be a leader! Achieve Excellence! & lastly, Staying humble and
        always giving to the world
      </span>
    </Paper>
  );
};

export default SoftSkills;
