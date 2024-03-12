"use client";
import { Divider } from "@mui/material";
import AboutMeContainer from "./components/about-me/about-me-container";
import Footer from "./components/footer";
import LeftContainer from "./components/homepage/left-container";
import SkillsContainer from "./components/skills-projects/skills-container";
import WorkExpContainer from "./components/work-exp/work-exp-container";

export default function Home() {
  return (
    <main
      id="background"
      className="flex flex-col items-center justify-center gap-20 p-1 overflow-auto "
    >
      <div className="flex flex-[3_3_0%] justify-center p-10 g-2 text-white rounded-2xl">
        <LeftContainer />
      </div>
      <div className="flex flex-[3_3_0%] justify-center p-1 border  text-white rounded-2xl">
        <AboutMeContainer />
      </div>
      <Divider
        orientation="horizontal"
        sx={{
          width: "50%",
        }}
      >
        <span className="text-[30px] text-white">skills & projects</span>
      </Divider>

      <div className="flex flex-[3_3_0%] justify-center p-1 text-white w-full">
        <SkillsContainer />
      </div>
      <Divider
        orientation="horizontal"
        sx={{
          width: "50%",
        }}
      >
        <span className="text-[30px] text-white">work exp.</span>
      </Divider>
      <span className="text-[40px] text-center text-white">
        From My Desk to the World:{" "}
        <span
          style={{
            fontFamily: "Anton, sans-serif",
          }}
        >
          Engineering a Better Tomorrow!!
        </span>{" "}
      </span>
      <div
        className="flex flex-col flex-[3_3_0%] justify-center p-1 text-white w-full items-center gap-10 rounded-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(18, 18, 56) 0%, black 100%)",
          // backgroundImage: "linear-gradient(to right, black, #203a43, black)",
        }}
      >
        <WorkExpContainer />
      </div>

      <div className="flex flex-[0.1_0.1_0%] p-5 m-1 text-white rounded-md items-center justify-center ">
        <Footer />
      </div>
    </main>
  );
}
