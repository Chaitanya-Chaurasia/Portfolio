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
      "LegalAId is an AI-powered legal assistant with a mission to organize the world's information and make it universally accessible. Our goal is to provide fast and efficient access to legal aid, ensuring that people have the information they need to understand and assert their rights. The webapp enables users to put in a query, and responds with solutions involving state and federal laws, as well as providing recommendations and referrals to closest law firms.",
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
      "Incognito is more than just a project; it's a profound wake-up call. Inspired by the unsettling portrayal of identity access in the anime 'Death Note,' we've crafted a system that vividly illustrates the ease with which personal information can be extracted from a simple photograph. The process begins with a snapshot, where your face becomes the gateway to delving into your digital persona. This image undergoes sophisticated processing algorithms followed by web scraping to  find out all the info we can. Lastly, we present a trace of the process to the user so the user can decide whether to keep or discard the information on any website. ",
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
      "Our web application revolutionizes the immigration process by providing a secure, efficient, and user-friendly platform for sending important documents directly to embassies. Given the sensitivity and urgency of immigration-related paperwork, our app employs state-of-the-art encryption and security protocols to ensure that every document remains confidential. With our web3 app and FTP through blockhain, applicants can confidently and conveniently manage their document submissions from anywhere in the world, knowing that their personal information is in safe hands. This innovative solution not only simplifies the immigration process but also reinforces the trust and reliability essential for such critical procedures.",
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
        {projects.map((project) => {
          return (
            <Paper elevation={7} className="card-container h-full">
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
