"use client";
import { Divider } from "@mui/material";
import AboutMeContainer from "./components/about-me/about-me-container";
import Footer from "./components/footer";
import LeftContainer from "./components/homepage/left-container";
import SkillsContainer from "./components/skills-projects/skills-container";
import WorkExpContainer from "./components/work-exp/work-exp-container";
import HobbyContainer from "./components/hobbies/hobby-container";

export default function Home() {
  return (
    <main
      id="background"
      className="flex flex-col items-center justify-center gap-40 overflow-auto mt-20"
    >
      <div
        className="flex items-center justify-center p-2 bg-black rounded-3xl mt-10"
        id="me"
      >
        <div className="flex flex-[3_3_0%] justify-center p-10 g-2 text-black rounded-2xl bg-white ">
          <LeftContainer />
        </div>
      </div>

      {/* <div className="flex flex-[3_3_0%] justify-center p-1 border-4 border-white text-white bg-black rounded-2xl"></div> */}

      {/* Skills & Projects Section */}
      <Divider
        orientation="horizontal"
        sx={{ width: "50%" }}
        id="skillsProjects"
      >
        <span className="text-[30px] text-black">skills & projects</span>
      </Divider>
      <div className="flex flex-[3_3_0%] justify-center p-1 text-white w-full">
        <SkillsContainer />
      </div>

      {/* Work Experience Section */}
      <Divider orientation="horizontal" sx={{ width: "50%" }} id="work-exp">
        <span className="text-[30px] text-black">work exp.</span>
      </Divider>
      <div className="flex flex-col flex-[3_3_0%] justify-center items-center p-3 ">
        <WorkExpContainer />
      </div>

      {/* Hobbies Section */}
      <Divider orientation="horizontal" sx={{ width: "50%" }} id="hobbies">
        <span className="text-[30px] text-black">hobbies</span>
      </Divider>
      <div className="bg-none flex flex-[3_3_0%] w-full p-3">
        <HobbyContainer />
      </div>

      {/* Footer */}
      <div
        className="flex flex-[0.1_0.1_0%] p-5 m-1 text-white rounded-md items-center justify-center "
        id="contact"
      >
        <Footer />
      </div>
    </main>
  );
}
