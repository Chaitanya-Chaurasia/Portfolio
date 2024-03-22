import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black text-[15px]">
      <div className="flex flex-row gap-3">
        <a href="https://github.com/Chaitanya-Chaurasia/">
          <GitHubIcon />
        </a>{" "}
        •
        <a href="https://instagram.com">
          <InstagramIcon />
        </a>{" "}
        •
        <a href="https://www.linkedin.com/in/chai-t">
          <LinkedInIcon />
        </a>
        •<span>cchauras@asu.edu</span>
        <div className="flex-1" />
        ©Chaitanya Chaurasia, 2024
        <div className="flex-1" />
      </div>
    </div>
  );
};

export default Footer;
