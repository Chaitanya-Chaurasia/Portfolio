"use client";
import Image from "next/image";
import React from "react";
import profile from "../../../public/profile.jpeg";
import Spotify from "./spotify";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SongsContainer from "./songs-container";
import Reads from "./reads";

const LeftContainer = () => {
  return (
    <div className="flex xs:flex-col sm:flex-col lg:flex-row  gap-10 items-center justify-center">
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-row items-center justify-center bg-gray-500/10 rounded-xl">
          <LocationOnIcon
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
            Japanese Tea Garden, San Francisco, United States
          </Typography>
        </div>

        <Image src={profile} alt="profile" width={300} className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-[75px] ">
          Hey!{" "}
          <span
            style={{
              fontFamily: "Dancing Script, sans-serif",
              fontWeight: "100",
            }}
          >
            I'm Chaitanya.
          </span>
        </span>
        <span className="text-[15px]">
          Three things you should know about me: studying cs 💻, playing soccer
          ⚽ & love travelling 🧳.
        </span>
        <span className="text-[15px]">
          If I had to describe myself in 3 words, they'd be-{" "}
          <span
            style={{
              fontFamily: "Delius Unicase, sans-serif",
              fontWeight: "100",
            }}
          >
            Cheerful,
          </span>{" "}
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "100",
            }}
          >
            Adventurous
          </span>{" "}
          &{" "}
          <span
            style={{
              fontFamily: "Playfair Display, sans-serif",
              fontWeight: "100",
            }}
          >
            Ambitious
          </span>
          .
        </span>

        <span className="text-[25px]">
          If this was you, explore the website to learn more about me!
        </span>
        <div className="h-full flex flex-row">
          <SongsContainer />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
