"use client";
import Navbar from "./components/navbar";
import profile from "@/public/profile.jpeg";
import mesh from "@/public/mesh.svg";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import devpost from "@/public/devpost.svg";
import gmail from "@/public/gmail.svg";
import Image from "next/image";
import legalaid from "@/public/legalaid.png";
import inc from "@/public/incognito.png";
import ww from "@/public/ww.png";
import boba from "@/public/boba.png";

import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowOutward, GitHub, LinkedIn } from "@mui/icons-material";
import { CardBody, CardContainer, CardItem } from "./components/3d-card";

const skills = [
  {
    type: "Frontend Development",
    skills:
      "<ul><li>HTML5 SCSS & CSS3</li> <li>Tailwind JSX</li> <li>Bootstrap RadixUI</li> <li>MaterialUI ShadCN</li </ul>",
  },
];
const projects = [
  {
    name: "LegalAId",
    desc: "Stuck in an accident? Can't get your insurance claim? Introducing Your New Generation Legal AI Chatbot- powered by Google Cloud! Just type it in and leave it to LegalAId!",
    prize: "HackHarvard 2023 Winner- Best Use of Google Cloud.",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid",
    pic: legalaid,
  },
  {
    name: "Incognito",
    desc: "Unveiling digital vulnerability through facial recognition: Incognito puts control back in your hands. Scrape the entire web for all your public information, and choose where to display what!",
    prize: "Built @ TreeHacks 2024, Stanford University",
    link: "https://devpost.com/software/icognito",
    pic: inc,
  },
  {
    name: "WealthWise",
    desc: "Tired of overspending? Need to achieve financial freedom but don't know how to? Presenting WealthWise, a new gen AI  webapp that secures your financial future and keeps track of spending habits!",
    prize: "HackPrinceton 2024 Winner- Most Innovative Use of Verbwire.",
    link: "https://github.com/Chaitanya-Chaurasia/WealthWise",
    pic: ww,
  },
  {
    name: "BobaBrain",
    desc: "Exams are approaching? Stressed and need an AI teacher? Presenting BobaBrain, the new age AI professor! Upload your course notes and videos, and ask about anything. What's more- flashcards, AI Summary & Mind Maps!",
    prize: "Upcoming Startup. Check it out at bobabrain.ai.",
    pic: boba,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-new-font w-full text-white overflow-hidden bg-dot-blue-700/[0.3] relative items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
      <section
        className="flex flex-col lg:flex-row font-new-font w-full text-black overflow-hidden bg-transparent h-full"
        id="home"
      >
        <div className=" bg-transparent flex flex-col flex-[2.5_2.50%] p-1 gap-20 w-full items-center justify-center">
          <Navbar />

          <div className="flex flex-col lg:flex-row">
            <div className="flex-[3_3_0%] p-4 flex items-center lg:justify-center">
              <Image
                src={profile}
                alt="me"
                height={300}
                className="rounded-xl bg-cover bg-center"
              />
            </div>
            <div className="flex flex-col ml-10">
              <span className="font-bold h-1">he/him</span>
              <span className="text-[70px] h-16">Hey, I&apos;m</span>
              <span className="text-[70px] font-bold h-16">Chaitanya,</span>
              <span className="text-[70px] h-18 flex flex-row gap-6">
                a
                <span className="font-bold bg-gradient-to-r from-neon to-green-new text-transparent bg-clip-text break-words">
                  &lt;software-dev/&gt;.
                </span>
              </span>
              {/* <hr className=" h-px my-8 border-2 border-black dark:bg-red-700" /> */}

              <span className="text-[16px]">
                building something innovative & sustainable for the future!
              </span>

              <div className="flex flex-row w-full mt-10">
                <button className="bg-gray-new flex items-center justify-center hover:scale-125 transition-transform duration-300">
                  <Image src={github} alt="" height={40} />
                </button>
                <button className="bg-blue-new p-1 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                  <Image src={linkedin} alt="" height={30} />
                </button>
                <button className="bg-pink-new p-1 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                  <Image src={devpost} alt="" height={30} />
                </button>
                <button className="bg-white p-1 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                  <Image src={gmail} alt="" height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-black flex flex-col flex-[2.5_2.5_0%] items-center justify-start">
            <div className="p-10 flex flex-col gap-10 h-full">
              <div className="flex flex-col flex-[3_3_0%] text-white border-x border-t-4 border-white px-10 w-full h-full text-[22px] items-left justify-center">
                <span className="font-bold h-5">i&apos;m</span>
                <span className="h-5">an engineer,</span>
                <span className="h-5">curious,</span>
                <span className="h-5">creative,</span>
                <span className="h-5">passionate,</span>
                <span className="font-bold h-5">a footballer,</span>
                <span className="h-5">love travelling,</span>

                <span className="h-5">in tempe, az</span>
                <span className="flex flex-row gap-2 h-5">
                  <span className="font-bold">from</span>
                  <span className="font-bold">india,</span>
                </span>
                <span className="flex flex-row gap-2">
                  <span className="font-bold">junior</span>
                  <span>at</span>
                  <span className="font-bold">arizona state,</span>
                </span>
              </div>
              {/* for extra space. do NOT remove */}
        {/* <div></div>
            </div>
          </div>
           */}
      </section>

      <section
        className="flex flex-col min-h-screen font-new-font p-10 text-white p-10 bg-transparent w-screen h-full items-center justify-center text-center"
        id="skills"
      >
        <div className="flex flex-col items-center justify-center border-black ">
          <span className="text-[110px] text-center p-10 flex-1 bg-gradient-to-b from-pink-600 via-purple-800 to-blue-600 text-transparent bg-clip-text flex flex-col mt-20 border-t-2 border-black ">
            <span className="flex flex-col lg:flex-row text-[30%] lg:text-[70px]">
              {" "}
              <span className="font-bold"> believe. </span>
              <span>engineer. </span>
            </span>
            <span className="flex flex-col lg:flex-row text-[30%] lg:text-[70px]">
              {" "}
              <span>inspire.</span>
              <span className="font-bold">innovate.</span>
            </span>
          </span>
          <div className="flex w-full items-center justify-center p-10">
            <span className="w-80 text-center text-[15px] flex-1 text-black">
              As an engineer, I always strive to learn as much as possible.
              Given how dynamic the field is, I need to be equipped with the
              latest technology out in the market- be it the modern age AI or
              traditional operating systems! Below are some skills I&apos;ve
              picked up that make development easy for me.
            </span>
          </div>
        </div>

        <div className="flex flex-col p-10 w-full items-center justify-center text-black">
          <div className="p-10 flex flex-col lg:flex-row">
            {/* <div className="border border-black p-10">
              <span className="font-bold">Frontend Development</span>
              <span>
                <ul>
                  <li>HTML5 SCSS & CSS3</li>
                  <li>Tailwind JSX</li>
                  <li>Bootstrap RadixUI</li>
                  <li>MaterialUI ShadCN</li>
                </ul>
                <span>and yes, I can center a div ;p</span>
              </span>
            </div>
            <div className="border p-10 border-black">
              <span className="font-bold"> Backend Development </span>
              <span>
                <ul>
                  <li>Python (Flask) Java</li>
                  <li>Node.js Express React</li>
                  <li> C C++ RESTful APIs</li>
                  <li>PostreSQL MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </span>
            </div>
            <div className="border p-10 border-black">
              <span className="font-bold"> Tools and Services</span>
              <span>
                <ul>
                  <li>AWS (Amazon Web Services)</li>
                  <li>Google Developer Cloud</li>
                  <li>Git Docker Maven Jira</li>
                  <li>Gradle Git Github</li>
                  <li>Visual-Studio Figma PyTorch</li>
                  <li>Scikit-learn OpenCV Tensorflow</li>
                </ul>
              </span>
            </div>
            <div className="border p-10 border-black">
              <span className="font-bold">
                {" "}
                My areas of expertise and interest
              </span>
              <span>
                <ul>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                  <li>Image & Audio Processing</li>
                  <li>Full-Stack Development</li>
                  <li>Decentralized Applications(Web3)</li>
                </ul>
              </span>
            </div> */}

            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card  border-black/[0.1] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-black"
                >
                  Frontend Development{" "}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black text-sm mt-2 "
                >
                  {(document.createElement("div").innerHTML = skills[0].skills);
                  }
                  <span>and yes, I can center a div ;p</span>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col min-h-screen font-new-font w-screen items-center text-black "
        id="projects"
      >
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center text-center gap-5 ">
          <span className="flex flex-col items-center justify-center gap-5">
            <span className="text-[400%] lg:text-[70px]">Projects</span>
            <span className="text-[20px]">
              The best way to learn is to do it yourself!
            </span>
            <div className="flex">
              <span className="flex items-center gap-2 text-[15px]">
                <GitHub />
                Check out more on my
                <a
                  href="https://www.linkedin.com/in/chai-t"
                  className="underline"
                  target="_blank"
                >
                  GitHub
                  <ArrowOutward className="w-4 h-3" />
                </a>
              </span>
            </div>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 p-10">
          {projects.map((p, i) => {
            return (
              <div
                className="flex flex-col gap-2 p-4 w-full glass-card"
                key={i}
              >
                <span className="text-[20px] font-bold">{p.name}</span>
                <span className="text-[20px]">{p.desc}</span>
                <span>{p.prize}</span>
                {p.name !== "BobaBrain" && (
                  <span className="flex items-center gap-2">
                    Check it out at{" "}
                    <a href={p.link} className="underline" target="_blank">
                      Github
                      <ArrowOutward className="w-4 h-3" />
                    </a>{" "}
                    <GitHub />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="flex flex-col min-h-screen font-new-font w-screen bg-transparent gap-20 p-10 text-black"
        id="work"
      >
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="bg-orange-500 flex lg:flex-col flex-row flex-[0.1_0.1_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start h-40" />

          <div className="flex-[4_4_0%] flex flex-col border-l-8 p-0 border-blue-200">
            <span className="text-[300%] lg:text-[70px] ml-10 break-words">
              Work Experience
            </span>
          </div>

          <div className="bg-yellow-400 flex lg:flex-col flex-row flex-[0.5_0.5_0%] gap-0 lg:gap-1 p-1 items-center justify-center lg:items-center lg:justify-start h-20" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="p-10 border flex flex-1 flex-col gap-2">
              <span className="text-[20px] font-bold">
                Incoming Embedded Systems SWE Intern @ IDEXX Laboratories
              </span>
              <span>Portland, Maine, United States</span>
              <hr />

              <span>
                This summer, I will be working on building software for the
                various in-house analyzers that IDEXX is developing, such as the
                ProCyteX, and in the process, discover my creative side & of
                course, learn a lot!
                <br />
                <br />
                Through my tenure, I&apos;ll be using technologies such as{" "}
                <span className="font-bold">
                  C, C++, Python, JavaScript, Lua and Linux
                </span>
                .
              </span>
            </div>
            <div className="p-10 border flex flex-1 flex-col gap-2">
              <span className="text-[20px] font-bold">
                Undergraduate Teaching Assistant @ Arizona State University
              </span>
              <hr />
              <span>
                So, I&apos;m a teaching assistant for two classes:{" "}
                <span className="font-bold">
                  Intro to Software Development (CSE360) and Game Development
                  (CPI111)
                </span>
                . My job is to make sure students get the hang of the stuff
                without feeling overwhelmed. Basically, I&apos;m here to make
                sure students stay engaged and interested in what they&apos;re
                learning! CSE360 introduces students to{" "}
                <span className="font-bold">
                  Agile software development stages,
                </span>
                employing tools such as{" "}
                <span className="font-bold">
                  Java, JavaFX GUI, Astah, JUnit, and client documentation
                  practices{" "}
                </span>
                . Conversely, Game Development focuses on 2-D game creation
                using <span className="font-bold">Gamemaker Studio </span>,
                equipping students with practical skills in game design and
                implementation.
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="p-10 border flex flex-1 flex-col gap-2">
              <span className="text-[20px] font-extrabold">
                Machine Learning & AI Intern @ Indian Institute of Technology
                (IIT Delhi)
              </span>
              <hr />
              <span>
                So, imagine you have a bunch of electric towers distributing
                power. Now, what if I told you that we could actually make the
                whole system work better by changing things up a bit?
                Here&apos;s the deal: we looked at all the{" "}
                <span className="font-bold">different factors </span>
                that go into running these systems, like{" "}
                <span className="font-bold">
                  how much energy they produce, how much it costs, and how much
                  pollution they create
                </span>
                .
                <br />
                <br />
                By messing around with more than 10 such parameters, such as the
                size & the type of the power plants, we managed to make
                everything work way more efficiently. And we didn&apos;t just
                stop there - we also made sure to consider things like
                environmental impact and cost-effectiveness. To make all this
                happen, we used
                <span className="font-bold">
                  {" "}
                  Graph algorithms, Clustering, Machine Learning, Python scripts
                  and data visualization{" "}
                </span>
                to write code that analyzed the network of electric towers and
                figured out the best way to optimize everything. And the result?
                A more sustainable and cost-effective way of powering Kenya and
                Great Britain&apos;s homes and businesses with upto{" "}
                <span className="font-bold"> 25% efficiency.</span>
              </span>
            </div>
            <div className="p-10 border flex flex-1 flex-col gap-2">
              <span className="text-[20px] font-bold">
                Data Science Intern @ Intuicomp Terascience
              </span>
              <span>Gurugram, India</span>

              <hr />
              <span>
                What if I told you that code can help make
                <span className="font-bold"> medicines better</span>? Yeah, you
                heard it! I worked with a team to develop really smart models
                that can predict how strong certain drugs will be over time. By
                doing this, we&apos;ve been able to make more drugs faster,
                which is pretty cool. Utilizing{" "}
                <span className="font-bold">Apache Spark and Python </span> for{" "}
                <span className="font-bold">big data analytics, </span>I
                contributed to the goal of augmenting pharmaceutical industry
                productions by 33%. Collaborating within an agile team , our
                efforts were directed towards the development of
                <span className="font-bold">
                  {" "}
                  multiple polynomial regression models
                </span>
                .
                <br />
                <br />
                These models were instrumental in accurately forecasting the
                potency of time-releasing drugs with an{" "}
                <span className="font-bold">
                  impressive precision rate of 87%
                </span>
                , resulting in an upscale in pharmaceutical productions by up to
                1.5 times. I used data science libraries such as
                <span className="font-bold">
                  {" "}
                  Numpy, Pandas and Scikit Learn{" "}
                </span>{" "}
                to analyse
                <span className="font-bold">
                  {" "}
                  five distinct pharmaceutical properties of Divalproex and
                  Quetiapine{" "}
                </span>
                . These insights hold significant implications and hence,
                reinforcing the bridge between computational sciences and
                biomedicine.
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <span className="flex-1 flex items-center gap-2">
              <LinkedIn />
              Check out more on my
              <a
                href="https://www.linkedin.com/in/chai-t"
                className="underline"
                target="_blank"
              >
                LinkedIn
                <ArrowOutward className="w-4 h-3" />
              </a>
            </span>
            <a
              className="flex items-center underline"
              href="https://drive.google.com/file/d/1ldfqf3Q-u3-XBxsKa5mNNJIXCOIoXjvL/view?usp=sharing"
              target="_blank"
            >
              My Resume
              <ArrowOutward className="w-4 h-3" />
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center font-new-font w-screen gap-5 p-10 text-black text-center">
        {/* <span className="text-[20px]">
          Keep an eye out for more on this website in near future!
        </span> */}
        <span className="font-bold">
          {" "}
          Developed with Next.js, Tailwind & Spline
        </span>
        <span> &copy; Chaitanya Chaurasia, 2024 </span>
      </section>
    </main>
  );
}
