// navbar.tsx
"use client";
import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="w-full p-4 flex flex-row justify-center items-center text-black bg-white">
      {/* Each button now contains a Link component that scrolls to the corresponding section */}
      <Button className="hover-underline-animation">
        <Link to="aboutMe" smooth={true} duration={1500} offset={-70}>
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
        </Link>
      </Button>

      <Button className="hover-underline-animation">
        <Link to="skillsProjects" smooth={true} duration={1500} offset={-70}>
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
        </Link>
      </Button>

      <Button className="hover-underline-animation">
        <Link to="work-exp" smooth={true} duration={1500} offset={-70}>
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
        </Link>
      </Button>

      <Button className="hover-underline-animation">
        <Link to="hobbies" smooth={true} duration={1500} offset={-70}>
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
        </Link>
      </Button>

      <Button className="hover-underline-animation">
        <Link to="contact" smooth={true} duration={1500} offset={-70}>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              textTransform: "none",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            contact
          </Typography>
        </Link>
      </Button>

      {/* If you have a blog section, add it here */}
      {/* <Button className="hover-underline-animation">
        <Link to="blog" smooth={true} duration={1500} offset={-70}>
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
        </Link>
      </Button> */}
    </div>
  );
};

export default Navbar;
