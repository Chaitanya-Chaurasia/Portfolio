import React from "react";
import Image from "next/image";
import "../../styles/skills.css";
import skills from "../../../public/skillspic.jpeg";
import { Paper, Typography } from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";

const SoftSkills = () => {
  return (
    <Paper
      elevation={5}
      className="flex flex-col items-center justify-center gap-4 p-5 rounded-3xl w-full skillspaper"
    >
      <span className="text-[40px] text-black">
        {" "}
        Life is all about learning!{" "}
      </span>
      <div className="flex flex-col gap-1 items-center">
        <Image
          src={skills}
          alt="profilepic"
          height={200}
          className="rounded-full z-10"
        />
        <div className="flex flex-row items-center justify-center bg-gray-500/10 rounded-xl">
          <LocationOn
            sx={{
              height: 20,
              width: 20,
            }}
          />
          <Typography
            sx={{
              fontSize: "11px",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            Golden Gate Bridge, San Francisco, United States
          </Typography>
        </div>
      </div>

      <span className="text-center text-black rounded-3xl p-2">
        The way I see it, life is an endless journey of discovery. It is a quest
        that fuels me with a certain insatiable desire to learn. Think about it,
        why are we humans constantly looking to fathom miles deep into the
        oceans or observing galaxies trillions and trillions of light years away
        from us- to grow, and to strive for the betterment of humanity all
        along. And after so many years of learning, I can say that the beauty of
        this journey lies not just in acquiring knowledge, but in the
        realization that there's always more to learn, more to explore and that
        I am merely at the tip of the iceberg.
      </span>
      <span className="text-[20px] text-black text-center underline">
        Some skills that I hold in very high regard and hope to keep on
        polishing upon:
      </span>
      <span className=" text-black text-center p-3 rounded-3xl">
        <ul>
          <li style={{ fontWeight: 500 }}>
            {" "}
            Be disciplined and patient! There's light at the end of every
            tunnel.
          </li>
          <li style={{ fontWeight: 500 }}>Lead by example!</li>
          <li style={{ fontWeight: 500 }}>
            Achieve Excellence in whatever I do.
          </li>
          <li>& lastly, </li>
          <li style={{ fontWeight: 500 }}>
            {" "}
            Staying humble and always giving to the world.
          </li>
        </ul>
      </span>
    </Paper>
  );
};

export default SoftSkills;
