import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="flex  gap-3">
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
    </div>
  );
};

export default Footer;
