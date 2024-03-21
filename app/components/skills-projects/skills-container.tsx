import React from "react";
import Skills from "./skills";
import Projects from "./projects";
import SoftSkills from "./soft-skills";

const SkillsContainer = () => {
  return (
    <div className="flex flex-col p-2 gap-40 w-full justify-center items-center h-full bg-none rounded-3xl">
      <div className="flex flex-col lg:flex-row gap-2 w-full h-full">
        <div className="flex flex-1">
          <SoftSkills />
        </div>
        <div className="flex flex-1">
          <Skills />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default SkillsContainer;
