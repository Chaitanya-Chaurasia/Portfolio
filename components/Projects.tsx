import * as React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import GavelIcon from "@mui/icons-material/Gavel";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import { Button } from "./ui/button";
import { GitHubLogoIcon, PlusIcon } from "@radix-ui/react-icons";
import PublicIcon from "@mui/icons-material/Public";
import LinkIcon from "@mui/icons-material/Link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    name: "LegalAId",
    desc: "Stuck in an accident? Can't get your insurance claim? Introducing Your New Generation Legal AI Platform- powered by Google Cloud! Just type it in and leave it to LegalAId! What's more, it gives you the recommended actions, AI-generated suggestions and best-matches local attorneys based on your location.",
    prize: "HackHarvard 2023 Winner- Best Use of Google Cloud.",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid",
  },
  {
    name: "Incognito",
    desc: "Unveiling digital vulnerability through facial recognition: Incognito puts control back in your hands. Scrape the entire web for digital footprints, your public information, and choose where to display what! Browse and choose where you want your information, and get an AI-generated summary of what the Internet says about you.",
    prize: "Built @ TreeHacks 2024, Stanford University",
    link: "https://devpost.com/software/icognito",
  },
  {
    name: "WealthWise",
    desc: "Tired of overspending? Need to achieve financial freedom but don't know how to? Presenting WealthWise, a new gen AI  webapp that secures your financial future and keeps track of spending habits! Get scored on your financial spendings, habits. Lastly, meet Charlie, our AI-Assistant that answers all your questions.",
    prize: "HackPrinceton 2024 Winner- Most Innovative Use of Verbwire.",
    link: "https://github.com/Chaitanya-Chaurasia/WealthWise",
  },
];

const schoolProjects = [
  {
    name: "BobaBrain",
    desc: "Exams are approaching? Stressed and need an AI teacher? Presenting BobaBrain, the new age AI professor! Upload your course notes and videos, and ask anything. What's more- Quizzes, Flashcards, AI Summary & Mind Maps!",
    prize: "Upcoming Startup. Check it out at bobabrain.ai.",
    link: "https://bobabrain.ai",
  },
  {
    name: "EffortLogger",
    desc: "Presenting an Agile-based productivity tool for Software teams. Log and store timings for different tasks, hold Planning Poker sessions with multiple users, and keep track of backlog items. What's more, create chat sessions for different tasks.",
    prize: "Part of CSE360 - Introduction to Software Engineering Principles",
    link: "https://github.com/Chaitanya-Chaurasia/Effort-Logger-with-Planning-Poker",
  },
  {
    name: "DocChain",
    desc: "Tired of waiting long queues for visa approval, or to update your SSN? Worry no more, because we present to you, a decentralized, blockchain-based solution that lets you do it all from home. Offers top-notch security, with end-to-end encryption.",
    prize: "Built @ HackPrinceton 2023, Princeton University",

    link: "https://github.com/Chaitanya-Chaurasia/HackPrinceton",
  },
];

export const SkillAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm font-normal">
          Why I work on projects?
        </AccordionTrigger>
        <AccordionContent>
          Well, Computer Science, or for any field for that matter, is not
          limited to theory. What matters is how you can apply your skills and
          contribute to your field.
          <br />
          <br />
          And trust me, there&apos;s no better way than to work on projects.
          Hands-on-experience imprints and polishes skills in your brain faster
          than just going through a course.
          <br />
          <br />
          And lastly, I develop because I love it. That&apos;s the most
          important factor. I hope one my inventions has potential to help the
          society.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm font-normal">
          My Tech Stack
        </AccordionTrigger>
        <AccordionContent>
          I usually use the <span className="font-semibold">T3</span> stack or{" "}
          <span className="font-semibold">Next.js + RadixUI/shadcn</span> for my
          personal projects. In fact, this website is developed on T3. Apart
          from that, I keep on switching between old and newer technologies to
          keep on learning.
          <br />
          <br />
          For frontend development, I use{" "}
          <span className="font-semibold">TypeScript</span> and{" "}
          <span className="font-semibold">CSS</span>. For backend development, I
          prefer sticking to <span className="font-semibold">Python </span>{" "}
          because of the diverse range of libraries it offers. Other tools I use
          on the go include <span className="font-semibold">SQL, Git</span> and{" "}
          <span className="font-semibold">AWS</span> for{" "}
          <span className="font-semibold">cloud services</span> and{" "}
          <span className="font-semibold">deployment</span>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm font-normal">
          How to start?
        </AccordionTrigger>
        <AccordionContent>
          I&apos;m really glad you clicked on this one. My best advice is to
          identify your strengths and interests. If you like designing websites
          and UI/UX work, start working on a website; if you like more backend
          stuff, design an API that does something as basic as getting weather
          information from different cities.
          <br />
          <br />
          So much information is available on the internet today, and that too
          for free. Go to YouTube, Medium or GeeksForGeeks and get started.
          Don&apos;t procrastinate, do it now!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const Projects = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-6 items-top justify-center">
      {Array.from(projects).map((project) => {
        return (
          <Card
            key={project.name}
            className="w-[300px]"
            id="glass-card-project"
          >
            <PlusIcon className="absolute h-6 w-6 -top-3 -left-3  text-violet-500" />

            <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <CardHeader>
              <h2 className="text-wrap tracking-tight text-4xl font-extrabold flex flex-row items-center gap-2">
                {project.name}
                {project.name === "LegalAId" && <GavelIcon />}
                {project.name === "Incognito" && <VpnLockIcon />}
                {project.name === "WealthWise" && <AccountBalanceIcon />}
                {project.name === "BobaBrain" && <LightbulbIcon />}
              </h2>
              <h2 className="text-wrap tracking-tight text-sm">
                {project.prize}
              </h2>

              <span className="text-wrap font-light">{project.desc}</span>
              <span className="flex items-center ">
                <span className="text-xs">Check it out here</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="p-0">
                    <GitHubLogoIcon />
                  </Button>
                </a>
              </span>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export const SchoolProjects = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-6 items-top justify-center ">
      {Array.from(schoolProjects).map((project) => {
        return (
          <Card
            key={project.name}
            className="w-[300px]"
            id="glass-card-project"
          >
            <PlusIcon className="absolute h-6 w-6 -top-3 -left-3  text-fuchsia-500" />

            <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <CardHeader>
              <h2 className="text-wrap tracking-tight text-4xl font-extrabold flex flex-row items-center gap-2">
                {project.name}
                {project.name === "EffortLogger" && <GroupsIcon />}
                {project.name === "DocChain" && <LinkIcon />}
                {project.name === "BobaBrain" && <LightbulbIcon />}
              </h2>
              <h2 className="text-wrap tracking-tight text-sm">
                {project.prize}
              </h2>

              <span className="text-wrap font-light">{project.desc}</span>
              <span className="flex items-center ">
                <span className="text-xs p-0">Check it out at</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="p-0">
                    {project.name === "EffortLogger" ||
                    project.name === "DocChain" ? (
                      <GitHubLogoIcon />
                    ) : (
                      <PublicIcon className="h-[18px]" />
                    )}
                  </Button>
                </a>
              </span>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};
