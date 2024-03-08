"use client";

import React from "react";
import "../styles/navbar.css";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="w-full p-4 flex flex-row justify-center items-center">
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
          }}
        >
          home
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
          }}
        >
          projects
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
          }}
        >
          resume
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
          }}
        >
          hobbies
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
          }}
        >
          photography
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
          }}
        >
          blog
        </Typography>
      </Button>
    </div>
  );
};

export default Navbar;
