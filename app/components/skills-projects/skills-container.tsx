import React from "react";
import Skills from "./skills";
import Projects from "./projects";

const SkillsContainer = () => {
  return (
    <div className="flex flex-col p-1 gap-10 w-full justify-center items-center rounded-3xl">
      <Skills /> <Projects />
    </div>
  );
};

export default SkillsContainer;
