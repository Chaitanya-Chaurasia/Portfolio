import React from "react";
import Skills from "./skills";
import Projects from "./projects";

const SkillsContainer = () => {
  return (
    <div className="flex flex-col p-1 gap-10 w-full justify-center items-center rounded-3xl">
      <div
        className="flex flex-col lg:flex-row gap-3 w-full justify-center items-center
      "
      >
        <Skills />
        <Skills />
      </div>
      <Projects />
    </div>
  );
};

export default SkillsContainer;
