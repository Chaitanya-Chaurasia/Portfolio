import React from "react";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import leh from "../../../public/leh.jpeg";
import LocationOn from "@mui/icons-material/LocationOn";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import mara from "../../../public/mara.jpg";
import MovieContainer from "./movie-container";
import "../../styles/hobby.css";
import { SportsFootball, SportsSoccer } from "@mui/icons-material";
import im from "../../../public/im.jpeg";

const HobbyContainer = () => {
  return (
    <div className="paper-hobby flex flex-col text-black w-full ">
      <div className="flex flex-col lg:flex-row gap-4 justify-center p-5 ">
        <Paper
          elevation={0}
          className="flex flex-col flex-[3_3_0%] rounded-3xl p-5 bg-transparent text-[white]"
        >
          <span
            className="text-[50px] "
            style={{ fontFamily: "Playfair Display, sans-serif" }}
          >
            my hobby palette
          </span>
          <span>
            Reflecting over my brief yet a rich & diverse past, I've held firm
            to the belief that every individual should nurture a certain
            creative & imaginative acumen that empowers you to think outside the
            box and lends you a new lens to view the world with. This is why I
            try to develop and polish such skills. After all, life's brevity
            compels us to seize every moment, exploring every avenue that might
            enrich our existence. The hobbies and pursuits I've engaged in over
            the years have not only shaped my personality but also stand as a
            testament to the diverse paths our lives can take. It's through
            these endeavors that we often stumble upon our true passions,
            perhaps even defining what we ultimately choose to do with our
            lives.
          </span>
        </Paper>
        <Paper
          elevation={0}
          className="flex flex-[2_2_0%] flex-col rounded-3xl p-5"
          sx={{
            background: "none",
          }}
        >
          <div className="flex flex-col gap-5 items-center justify-center text-[white]">
            <div className="flex flex-row items-center justify-center gap-1">
              <div className="flex flex-col items-center justify-center gap-1 w-full">
                <div className="flex flex-row items-center justify-center bg-black rounded-xl p-1">
                  <DirectionsRunIcon
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
                    My first marathon, 2014, Tanzania
                  </Typography>
                </div>

                <Image src={mara} alt="sports" className="rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-col gap-1 items-center justify-center w-full">
                  <div className="flex flex-row items-center justify-center bg-black rounded-xl p-1">
                    <SportsSoccer
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
                      Intramural Soccer Champs, ASU
                    </Typography>
                  </div>

                  <Image src={im} alt="sports" className="rounded-xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col hobby-card p-4 ">
              <span
                className="text-[30px] text-[white]"
                style={{ fontFamily: "Bungee Shade" }}
              >
                Sports
              </span>
              <span
                className=" text-[black]"
                style={{ fontFamily: "Poiret One" }}
              >
                Sports, especially football has been a major factor of my life.
                What it has taught me and still continues to, till date, is
                priceless and I will forever be grateful for that! I've
                dedicated a huge part of my life to sports and will continue to
                do so, striving to push my limits, both on the field and beyond.
              </span>
            </div>
          </div>
        </Paper>
        <Paper
          elevation={10}
          className="flex flex-[2_2_0%] bg-white flex-col rounded-3xl p-5"
        >
          <span className="text-[30px]" style={{ fontFamily: "Nabla" }}>
            Travelling
          </span>
          <span
            style={{
              fontSize: 15,
            }}
          >
            Travelling and exploring the wonders of our planet is a privilege I
            deeply cherish. Immersing myself in diverse cultures, living amongst
            unique communities, and interacting with a tapestry of individuals
            has broadened my horizons in profound ways. Ultimately, it's the
            richness of these experiences that shapes us and becomes a treasure
            trove of memories to revisit in the years to come.
          </span>
          <div className="flex flex-col gap-1 items-center justify-center text-[white]">
            {/* <div className="flex flex-row items-center justify-center bg-black rounded-xl p-1">
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
                The breathtaking mountains of Ladakh, India
              </Typography>
            </div>

            <Image src={leh} alt="leh" className="rounded-xl" /> */}
          </div>
        </Paper>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-center p-5">
        <Paper
          elevation={10}
          className="flex flex-col flex-[2_2_0%] bg-white rounded-3xl p-5"
        >
          <span
            style={{ fontFamily: "Sono, sans-serif" }}
            className="text-[23px] "
          >
            Exploring my Curiosity
          </span>
          <span>
            Imagine a world devoid of curiosity. A world where Newton, struck by
            a falling apple, felt no urge to unravel the mystery of its descent.
            A world where Neanderthals remained in perpetual darkness, never
            questioning the spark that could ignite from friction. This inherent
            human desire to explore and understand fuels progress. Engineering
            thrives on the relentless pursuit of unraveling complex systems, and
            its true beauty lies in its ability to bridge disciplines.
            Thankfully, information is more accessible than ever, acting as a
            springboard for curious minds like yours. This ever-growing well of
            knowledge allows me to delve into diverse concepts and
            collaboratively push the boundaries of discovery. Therefore,
            curiosity isn't merely a privilege; it's the very lifeblood of human
            advancement, the fire that ignites the path towards a brighter
            future.
          </span>
        </Paper>
        <Paper
          elevation={10}
          className="flex flex-[3_3_0%] bg-white flex-col rounded-3xl p-5"
        >
          <span
            style={{ fontFamily: "Shantell Sans, sans-serif" }}
            className="text-[30px]"
          >
            Watching Movies
          </span>
          <span>
            Movies have always been a cornerstone of my upbringing. My dad has
            always stressed upon their importance in broadening our horizons and
            nurturing creativity. He believed, and I've come to agree, that
            they're not just entertainment but a vital tool for enhancing our
            creative intellect. Through the art of cinema, we're invited into
            diverse worlds, exposed to different perspectives, and inspired by
            the endless possibilities of storytelling. This has ingrained in me
            a deep appreciation for film as a powerful medium for education,
            empathy, and, most importantly, envisioning the limitless bounds of
            our imagination.
          </span>

          <MovieContainer />
        </Paper>
      </div>
    </div>
  );
};

export default HobbyContainer;
