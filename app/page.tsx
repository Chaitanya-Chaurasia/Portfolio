"use client";
import { Divider } from "@mui/material";
import AboutMeContainer from "./components/about-me/about-me-container";
import Footer from "./components/footer";
import LeftContainer from "./components/homepage/left-container";
import SkillsContainer from "./components/skills-projects/skills-container";

export default function Home() {
  return (
    <main
      id="background"
      className="flex flex-col items-center justify-center gap-20 p-1 overflow-auto "
    >
      <div className="flex flex-[3_3_0%] justify-center p-10 g-2 text-white rounded-2xl">
        <LeftContainer />
      </div>
      <div className="flex flex-[3_3_0%] justify-center p-1  text-white rounded-2xl border">
        <AboutMeContainer />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Divider
          orientation="horizontal"
          sx={{
            width: "100%",
          }}
        />
        <span className="text-[30px] text-white">skills & projects</span>
        <Divider
          orientation="horizontal"
          sx={{
            width: "100%",
          }}
        />
      </div>

      <div className="flex flex-[3_3_0%] justify-center p-1 text-white w-full">
        <SkillsContainer />
      </div>

      <div className="flex flex-[0.1_0.1_0%] p-5 m-1 text-white rounded-md items-center justify-center ">
        <Footer />
      </div>
    </main>
  );
}
