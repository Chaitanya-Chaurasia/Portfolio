import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-start text-white text-[13px] gap-10 ml-10 mt-5">
      <button className="hover-underline-animation">Home</button>
      <button className="hover-underline-animation">Skills</button>
      <button className="hover-underline-animation">Projects</button>
      <button className="hover-underline-animation">Work Exp.</button>
    </div>
  );
};

export default Navbar;
