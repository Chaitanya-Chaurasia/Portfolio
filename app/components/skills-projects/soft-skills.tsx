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

      <span className="text-center text-black rounded-3xl p-2 text-[16px]">
        <p className="italic">
          Life, to me, is an infinite odyssey of discovery, an insatiable quest
          for knowledge that keeps moving me forward. From delving into the
          depths of the oceans to gazing upon galaxies light-years away,
          humanity&apos;s relentless pursuit of understanding fuels our growth
          and endeavors for the betterment of our world. After these many years,
          I&apos;ve come to appreciate that the true beauty of this journey
          transcends mere acquisition of knowledge; it is when you come to the
          realization that there&apos;s always more to learn, more to explore.
          Each revelation is but a glimpse of the vast expanse of knowledge that
          awaits, reminding me that I am merely scratching the surface of what
          is possible.
        </p>{" "}
        <br />
        <p className="italic">
          In aspiring towards excellence, I hold steadfast to certain virtues.
          Discipline and patience serve as guiding lights, illuminating the path
          even in the darkest of tunnels. Leading by example, I strive to
          inspire those around me to reach for their highest potential. Yet,
          amidst achievements, I remain grounded, understanding the importance
          of humility and the duty to give back to the world that has granted me
          so much. These qualities intertwine, forming the fabric of my journey,
          as I navigate through the boundless realms of discovery with purpose
          and grace.
        </p>
      </span>
    </Paper>
  );
};

export default SoftSkills;
