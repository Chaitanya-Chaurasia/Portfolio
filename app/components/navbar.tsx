import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-start text-white text-[13px] gap-10 ml-10 mt-5">
      <button>home</button>
      <button className="flex flex-col">
        <span>skills &</span>
        <span>projects</span>
      </button>
      <button>work exp.</button>
    </div>
  );
};

export default Navbar;
