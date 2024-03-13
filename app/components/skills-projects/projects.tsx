import * as React from "react";
import "../../styles/project.css";
import { GitHub } from "@mui/icons-material";
import Image from "next/image";
import legalaid from "../../../public/legalaid.png";
import inc from "../../../public/incognito.png";
import doc from "../../../public/doc.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Paper } from "@mui/material";

const projects = [
  {
    name: "Legal AId",
    loc: "HackHarvard, Harvard University",
    date: "October 22nd, 2023",
    image: legalaid,
    prize: true,
    description:
      "Introducing Your New Generation Legal AI Chatbot- powered by Google Cloud!",
    techstack:
      "Python (Flask), React.js, Chakra UI, HTML, CSS, Google Vertex, GC PaLM, OAuth2, Firebase, Kubernetes Vector Search",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid",
  },
  {
    name: "Incognito",
    loc: "TreeHacks, Stanford University",
    image: inc,
    prize: false,
    date: "February 16th, 2024",
    description:
      "Unveiling digital vulnerability through facial recognition: Incognito puts control back in your hands.",
    link: "https://devpost.com/software/icognito",

    techstack:
      "Python (Flask), React.js, Material UI, Selenium, VGG Facial Recognition Models, DeepFace Validation, Together.AI",
  },

  {
    name: "DocuShare",
    loc: "HackPrinceton, Princeton University",
    date: "November 10th, 2023",
    prize: true,
    image: doc,
    description:
      "Don't want to go to the embassy to submit your visa application? Use our application to securely transfer confidential information over blockchain!",
    techstack:
      "Javascript, React.js, Solidity, Material UI, Aleo for Blockchain Services, Tailwind CSS, Smart Contracts",
    link: "https://github.com/Chaitanya-Chaurasia/HackPrinceton",
  },
];

export default function Project() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5">
      <span className="text-[40px] text-center">
        Projects I think can make a{" "}
        <span
          style={{
            fontFamily: "Anton, sans-serif",
          }}
        >
          difference
        </span>{" "}
        out there!
      </span>
      <div className="flex flex-col lg:flex-row justify-center items-center rounded-3xl gap-5">
        {projects.map((project, index) => {
          return (
            <Paper elevation={7} className="card-container h-full" key={index}>
              <main className="main-content">
                <h1 className="heading-card">
                  <div
                    style={{
                      fontFamily: "Playfair Display, sans-serif",
                      fontSize: 25,
                    }}
                    className="flex flex-row"
                  >
                    {project.name}

                    <div className="flex-1"></div>
                    {project.prize ? <EmojiEventsIcon /> : ""}

                    <a href={project.link}>
                      <GitHub style={{ height: 20, width: 20 }} />
                    </a>
                  </div>
                </h1>
                <div className="flex flex-row">
                  <p className="para-card">{project.loc}</p>
                  <div className="flex-1"></div>
                  <p className="para-card mb-4">{project.date}</p>
                </div>

                <div>
                  <Image
                    src={project.image}
                    alt="pic"
                    className="rounded-xl"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>

                <div className="flex-row ">
                  <div className="coin-base">
                    <h2 className="heading-2-card">{project.description}</h2>
                  </div>
                </div>
              </main>
              <div className="card-attribute">
                Created using {project.techstack}
              </div>
            </Paper>
          );
        })}
      </div>
      <a href="https://github.com/Chaitanya-Chaurasia/">
        <span className="text-[15px] text-center flex flex-row items-center justify-center gap-2 bg-black p-2 rounded-full">
          Checkout more on my Github
          <GitHub />
        </span>
      </a>
    </div>
  );
}
