import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import Image from "next/image";
import leh from "../../../public/leh.jpeg";
import LocationOn from "@mui/icons-material/LocationOn";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import mara from "../../../public/mara.jpg";
import MovieContainer from "./movie-container";
import "../../styles/hobby.css";
import { SportsFootball, SportsSoccer, YouTube } from "@mui/icons-material";
import im from "../../../public/im.jpeg";
import ftbl from "../../../public/ftbl.jpeg";
import petr from "../../../public/petr.jpeg";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import GameContainer from "./game";
import yt from "../../../public/yt.jpg";
import av from "../../../public/av.jpg";

const HobbyContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row p-2 bg-white rounded-3xl gap-2">
      <div className="flex flex-[2_2_0%] flex-col gap-20">
        <div className="flex flex-col flex-[3_3_0%] p-2 gap-5 text-[white] rounded-3xl">
          <div className="flex flex-col p-4 rounded-3xl palette">
            <span
              className="text-[50px]"
              style={{ fontFamily: "Playfair Display, sans-serif" }}
            >
              my hobby palette 🎨
            </span>
            <span className="text-[15px]">
              Reflecting over my brief yet a rich &amp; diverse past, I&apos;ve
              held firm to the belief that everyone should nurture a certain
              creative side, a certain imaginative side that encourages you to
              think like the &quot;little you&quot; within, think outside the
              box and that lends you a new lens to view the world with. This is
              what I think a hobby builds within oneself. After all, life&apos;s
              brevity compels me to seize every moment, exploring every avenue
              that might enrich my existence. The hobbies and pursuits I&apos;ve
              engaged in over the years have not only shaped my personality but
              also stand as a testament to the diverse paths our lives can take.
              It&apos;s through these endeavors that we often stumble upon our
              true passions, perhaps even defining what we ultimately choose to
              do with our lives.
            </span>
          </div>
          <div className="flex flex-col w-full rounded-3xl gap-8">
            <span
              style={{
                fontFamily: "Honk",
                fontSize: 40,
              }}
            >
              {" "}
              Games I grew up playing! 🎮
            </span>
            <GameContainer />
            <div className="flex flex-col gap-3">
              <div className="flex flex-row">
                <span
                  className="flex gap-3 items-center  text-black"
                  style={{
                    fontFamily: "Potta One",
                    fontSize: 30,
                  }}
                >
                  i found this interesting
                </span>
              </div>
              <div className="flex flex-row w-full bg-white rounded-3xl border-2 border-black p-5 gap-3 items-center">
                <div className="flex flex-[2_2_0%]">
                  <Image src={yt} alt="yt" className="rounded-2xl" />
                </div>
                <div
                  className="flex flex-col text-[15px] h-full rounded-2xl flex-[3_3_0%] gap-2
                "
                >
                  <a
                    href="https://www.youtube.com/watch?v=yVTNge3sXpg&ab_channel=BeerBiceps"
                    className="href"
                    style={{
                      fontFamily: "Noto Sans, sans-serif",
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    India &amp; International Relations, Geopolitics, Foreign
                    Policies explained | Dr. Jaishankar | TRS 314
                  </a>
                  <span
                    style={{
                      fontFamily: "Noto Sans, sans-serif",
                      color: "black",
                      fontWeight: 300,
                      fontSize: 12,
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <YouTube
                      sx={{
                        height: 20,
                        width: 20,
                        fill: "red",
                      }}
                    />
                    8.8M views 9 months ago
                  </span>
                  <span
                    className="flex flex-row items-center gap-2 text-black"
                    style={{
                      fontFamily: "Noto Sans, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                    }}
                  >
                    <Image
                      alt="avatar"
                      src={av}
                      height={40}
                      className="rounded-3xl"
                    />
                    BeerBiceps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Paper
          elevation={0}
          className="flex flex-col flex-[2_2_0%] bg-transparent rounded-3xl p-5  "
        >
          <span
            style={{ fontFamily: "Sono, sans-serif" }}
            className="text-[23px] text-black "
          >
            Exploring my Curiosity
          </span>
          <span className="text-[15px]">
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
            curiosity isn&apos;t merely a privilege; it&apos;s the very
            lifeblood of human advancement, the fire that ignites the path
            towards a brighter future.
          </span>
        </Paper>
      </div>
      <div className="flex flex-[3_3_0%] flex-col">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col flex-[2_2_0%] gap-5">
            <div className="flex flex-row gap-3 text-white">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row rounded-3xl gap-1 p-1">
                  <DirectionsRunIcon />
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    My first marathon, 2014, Tanzania
                  </Typography>
                </div>
                <Image
                  src={mara}
                  alt="sports"
                  className="rounded-3xl"
                  height={400}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <div className="flex flex-row items-center justify-center rounded-3xl p-1 gap-1">
                    <SportsSoccer />
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontFamily: "Urbanist, sans-serif",
                      }}
                    >
                      Intramural Soccer Champs, ASU
                    </Typography>
                  </div>
                  <Image
                    src={im}
                    alt="sports"
                    className="rounded-3xl"
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3.5 rounded-3xl bg-white text-[white] sports">
              <span
                className="text-[30px] "
                style={{ fontFamily: "Bungee Shade" }}
              >
                Sports 🏆
              </span>
              <span className="text-[15px]" style={{ fontFamily: "Urbanist" }}>
                Sports, especially football has been a major factor of my life.
                What it has taught me and still continues to, till date, is
                priceless and I will forever be grateful for that! I&apos;ve
                dedicated a huge part of my life to sports and will continue to
                do so, striving to push my limits, both on the field and beyond.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Image src={ftbl} alt="sports" className="rounded-3xl" />
            </div>
          </div>
          <div className="flex flex-[2_2_0%] flex-col gap-4">
            <div className="flex flex-col p-2 rounded-3xl travel">
              <span className=" text-[30px]" style={{ fontFamily: "Nabla" }}>
                Travelling ✈️🧳🏖️
              </span>
              <span
                style={{
                  fontSize: 15,
                  color: "black",
                }}
              >
                Travelling and exploring the wonders of our planet is a
                privilege I deeply cherish. Trying to immerse myself in
                different cultures, adapting & living amongst unique
                communities, and interacting with a tapestry of individuals has
                broadened my horizons in just so many ways. At the end,
                it&apos;s the richness of these experiences that has shaped me
                and becomes a treasure trove of memories to revisit in the years
                to come.
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center text-[white]">
              <div className="flex flex-row items-center justify-center bg-black rounded-3xl p-1">
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
                  The Petronas Towers, Kuala Lumpur, Malaysia, 2022
                </Typography>
              </div>

              <Image src={petr} alt="leh" className="rounded-3xl " />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <Paper
            elevation={0}
            className="flex flex-[3_3_0%] bg-transparent flex-col gap-3 rounded-3xl p-5"
          >
            <span
              style={{ fontFamily: "Shantell Sans, sans-serif" }}
              className="text-[30px] text-black flex gap-2 items-center"
            >
              Watching Movies
              <CameraRollIcon />
            </span>
            <span className="text-[15px] text-black ">
              Movies have always been a cornerstone of my upbringing. My dad has
              always stressed upon their importance in broadening our horizons
              and nurturing creativity. He believed, and I&apos;ve come to
              agree, that they&apos;re not just entertainment but a vital tool
              for enhancing our creative intellect. Through the art of cinema,
              we&apos;re invited into diverse worlds, exposed to different
              perspectives, and inspired by the endless possibilities of
              storytelling. This has ingrained in me a deep appreciation for
              film as a powerful medium for education, empathy, and, most
              importantly, envisioning the limitless bounds of our imagination.
            </span>
            <MovieContainer />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default HobbyContainer;
