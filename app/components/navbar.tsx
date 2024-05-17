import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-start text-white text-[13px] gap-10 ml-10 mt-5">
      <button className="hover-underline-animation">home</button>
      <button className="hover-underline-animation">skills</button>
      <button className="hover-underline-animation">
        <span>projects &</span>
        <span> work exp.</span>
      </button>
    </div>
  );
};

export default Navbar;
