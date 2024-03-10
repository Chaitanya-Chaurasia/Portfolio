import React from "react";
import Image from "next/image";
import princeton from "../../../public/princeton.jpeg";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const AboutMeContainer = () => {
  return (
    <div className="flex xs:flex-col sm:flex-col lg:flex-row xs:gap-2 sm:gap-1 md:gap-10 lg:gap-20  p-1 ">
      <div className="flex flex-col gap-1 p-1">
        <span
          className="text-[40px]"
          style={{
            fontFamily: "Courier New",
            fontWeight: "bold",
          }}
        >
          Life Stats
        </span>
        <span>
          <span>
            <span
              style={{
                fontFamily: "Courier New",
                fontWeight: "",
              }}
            >
              My nickname:{" "}
            </span>
            <span
              style={{
                fontFamily: "Courier New",
                fontWeight: "bold",
              }}
            >
              ChaiT
            </span>
          </span>
        </span>
        <span
          style={{
            fontFamily: "Courier New",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "",
            }}
          >
            Age:{" "}
          </span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "bold",
            }}
          >
            young enough
          </span>
        </span>
        <span>
          <span>
            <span
              style={{
                fontFamily: "Courier New",
                fontWeight: "",
              }}
            >
              I am from:{" "}
            </span>
            <span
              style={{
                fontFamily: "Courier New",
                fontWeight: "bold",
              }}
            >
              New Delhi, India
            </span>
          </span>
        </span>
        <span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "",
            }}
          >
            Where am I?:{" "}
          </span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "bold",
            }}
          >
            Tempe, Arizona, United States
          </span>
        </span>
        <span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "",
            }}
          >
            Studying:{" "}
          </span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "bold",
            }}
          >
            Computer Science at Arizona State University
          </span>
        </span>

        <span>
          <span>
            <span
              style={{
                fontFamily: "Courier New",
                fontWeight: "",
              }}
            >
              Favorite Midnight Snack:{" "}
            </span>
            <span
              style={{
                fontFamily: "Courier New",
                fontWeight: "bold",
              }}
            >
              A slice of pizza never hurts
            </span>
          </span>
        </span>
        <span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "",
            }}
          >
            Dream destination (soon 🤞):{" "}
          </span>
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: "bold",
            }}
          >
            Camp Nou, Barcelona
          </span>
        </span>
      </div>
      <div className="flex flex-col p-1 items-center gap-1">
        <div
          className="flex flex-row items-center justify-center bg-gray-500/
        10 rounded-xl"
        >
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
            Princeton University, NY, United States
          </Typography>
        </div>
        <Image src={princeton} alt="nyc" height={250} className="rounded-xl" />
      </div>
    </div>
  );
};

export default AboutMeContainer;
