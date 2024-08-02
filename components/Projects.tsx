import * as React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import GavelIcon from "@mui/icons-material/Gavel";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from '@mui/icons-material/Groups';
import { Button } from "./ui/button";
import { GitHubLogoIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";
import PublicIcon from "@mui/icons-material/Public";
import LinkIcon from '@mui/icons-material/Link';
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
  },
  {
    name: "EffortLogger",
    desc: "Presenting an Agile-based productivity tool for Software teams. Log and store timings for different tasks, hold Planning Poker sessions with multiple users, and keep track of backlog items. What's more, create chat sessions for different tasks.",
    prize: "Part of CSE360 - Introduction to Software Engineering Principles",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid",
  },
  {
    name: "DocChain",
    desc: "Tired of waiting long queues for visa approval, or to update your SSN? Worry no more, because we present to you, a decentralized, blockchain-based solution that lets you do it all from home. Offers top-notch security, with end-to-end encryption.",
    prize: "Built @ HackPrinceton 2023, Princeton University",

    link: "https://devpost.com/software/icognito",
  },
];

export function Projects() {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-4 items-top justify-center ">
      {Array.from(projects).map((project) => {
        return (
          <Card key={project.name} className="w-[300px]">
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
                <ThickArrowUpIcon />
                <span className="text-xs p-2">10 upvotes</span>
                <a href={project.link}>
                  <Button variant="ghost" size="icon" className="p-0">
                    {(project.name === "LegalAId" ||
                      project.name === "Incognito" ||
                      project.name === "WealthWise") && <GitHubLogoIcon />}

                    {project.name === "BobaBrain" && (
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
}

export const SchoolProjects = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-4 items-top justify-center ">
      {Array.from(schoolProjects).map((project) => {
        return (
          <Card key={project.name} className="w-[300px]">
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
                <ThickArrowUpIcon />
                <span className="text-xs p-2">10 upvotes</span>
                <a href={project.link}>
                  <Button variant="ghost" size="icon" className="p-0">
                    {(project.name === "EffortLogger" ||
                      project.name === "DocChain" ||
                      project.name === "BobaBrain") && <GitHubLogoIcon />}

                    {project.name === "BobaBrain" && (
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
