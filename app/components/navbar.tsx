"use client";

import React from "react";
import "../styles/navbar.css";
import { Button, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="w-full p-4 flex flex-row justify-center items-center">
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
            textDecoration: "none",
          }}
        >
          me
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
            textDecoration: "none",
          }}
        >
          skills & projects
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
            textDecoration: "none",
          }}
        >
          work exp.
        </Typography>
      </Button>
      <Button className="hover-underline-animation">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            textTransform: "none",
            fontSize: "15px",
            textDecoration: "none",
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
            textDecoration: "none",
          }}
        >
          blog
        </Typography>
      </Button>
    </div>
  );
};

export default Navbar;
