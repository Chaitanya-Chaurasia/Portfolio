"use client";
import Navbar from "../components/navbar";
import ellipse from "@/public/Ellipse 1.svg";
import ellipse2 from "@/public/Ellipse 2.svg";
import ellipse3 from "@/public/Ellipse 3.svg";
import pattern from "@/public/pattern.jpg";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import devpost from "@/public/devpost.svg";
import gmail from "@/public/gmail.svg";

// import "../../styles/project.css";
import inc from "@/public/incognito.png";
// import doc from "../../../public/doc.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Paper } from "@mui/material";
import legalaid from "@/public/legalaid.png";
import pattern2 from "@/public/pattern_white.svg";
import Image from "next/image";

const projects = [
  {
    name: "Legal AId",
    loc: "HackHarvard 2023 Winner, Harvard University",
    date: "October 22nd, 2023",
    image: legalaid,
    description:
      "Got involved in an accident? Need help with insurance? Introducing Your New Generation Legal AI Chatbot- powered by Google Cloud!",
    techstack:
      "Python (Flask), React.js, Chakra UI, HTML, CSS, Google Vertex, GC PaLM, OAuth2, Firebase, Kubernetes Vector Search",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid",
  },
  {
    name: "Incognito",
    loc: "TreeHacks, Stanford University",
    image: inc,
    date: "February 16th, 2024",
    description:
      "Unveiling digital vulnerability through facial recognition: Incognito puts control back in your hands.",
    link: "https://devpost.com/software/icognito",
    techstack:
      "Python (Flask), React.js, Material UI, Selenium, VGG Facial Recognition Models, DeepFace Validation, Together.AI",
  },

  {
    name: "WealthyWise",
    loc: "HackPrinceton 2024 Winner, Princeton University",
    date: "November 10th, 2023",
    prize: true,
    // image: doc,
    description:
      "Don't want to go to the embassy to submit your visa application? Use our application to securely transfer confidential information over blockchain!",
    techstack:
      "Javascript, React.js, Solidity, Material UI, Aleo for Blockchain Services, Tailwind CSS, Smart Contracts",
    link: "https://github.com/Chaitanya-Chaurasia/HackPrinceton",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen font-new-font w-full text-white overflow-hidden bg-black">
      {/* <div className="bg-black flex lg:flex-col flex-row flex-[0.1_0.1_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start">
        <Image src={ellipse} alt="" className=" h-5 lg:mt-5" />
        <Image src={ellipse2} alt="" className=" h-5" />
        <Image src={ellipse3} alt="" className=" h-5" />
      </div> */}
      <div className="bg-black flex flex-col flex-[2_2_0%] gap-2 ">
        <div className="flex-[0.2_0.2_0%]">
          <Navbar />
        </div>
        <div className="flex flex-col px-10 py-10 flex-[0.9_0.9_0%]">
          <span className="flex flex-col">
            <span className="font-bold text-yellow-new text-transparent bg-clip-text text-[38px] h-10">
              &lt;Skills/&gt;
            </span>
            <span className="text-[37px] ">I have learnt over the years.</span>
          </span>
        </div>
        <span className="px-10 text-[15px]">
          <span className="font-bold">Python</span>, React, Node, HTML, CSS,
          Express, C++, Java, JavaScript, TypeScript, Next.js, SQL, AWS, Google
          Cloud, Docker, Maven, Gradle, GraphQL, Rest API, Tailwind, Bootstrap,
          Keras, Tensorflow, OpenCV, PyTorch, Git, Linux, JUnit, Figma, GSAP,
          Swift, Firebase, Postman, FastAPI, Spline, GSAP, API Integrations,
          Operating Systems, Multimedia Processing, Machine Learning and AI
          Concepts, Data Structures & Algorithms!
        </span>

        <span className="flex-1 px-10 font-bold">
          and always learning more!
        </span>
      </div>

      <div className="bg-white flex flex-col flex-[4_4_0%] text-black w-full overflow-scroll gap-2 p-2">
        {projects.map((project, index) => {
          return (
            <div
              className="flex-1 flex flex-col p-4 gap-2 mb-0 rounded-3xl"
              key={index}
              style={{
                height: "100%",
              }}
            >
              <div className="flex flex-row items-center">
                <span className="font-bold text-[40px] ">{project.name}</span>
                <div className="flex-1" />
                <a href={project.link}>
                  <Image
                    src={github}
                    alt=""
                    height={30}
                    className="hover:scale-125 transition-transform duration-300"
                  />
                </a>
              </div>

              <span className="text-[15px] font-bold">{project.loc}</span>
              {/* <Image src={project.image} alt="" /> */}

              <span className="text-[25px] font-bold">
                {project.description}
              </span>
              <span className="text-[15px]">
                <ul>
                  <li>
                    Ask any problem related to state or federal law. Get
                    recommended actions, and closest help centers including law
                    firms, rehab centers, hospitals etc.
                  </li>
                </ul>
                <span className="font-bold text-[15px]">
                  Developed with {project.techstack}
                </span>
              </span>

              <hr className=" border-black border-2" />
            </div>
          );
        })}
      </div>

      {/* <div className="bg-black flex lg:flex-col flex-row flex-[0.2_0.2_0%]  p-0 items-center justify-center lg:items-center lg:justify-end">
        <div className="flex flex-row lg:flex-col gap-0 lg:gap-1 p-1">
          <Image src={ellipse3} alt="" className=" h-5 " />
          <Image src={ellipse2} alt="" className=" h-5" />
          <Image src={ellipse} alt="" className=" h-5 lg:mb-6" />
        </div>
      </div> */}
    </main>
  );
}
