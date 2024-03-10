import React from "react";
import Skills from "./skills";
import Projects from "./projects";

const SkillsContainer = () => {
  return (
    <div className="flex flex-col gap-10 w-full justify-center items-center">
      <Skills /> <Projects />
    </div>
  );
};

export default SkillsContainer;
