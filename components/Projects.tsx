import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactOriginal } from "devicons-react";

const projects = [
  {
    name: "LegalAId",
    desc: "Stuck in an accident? Can't get your insurance claim? Introducing Your New Generation Legal AI Chatbot- powered by Google Cloud! Just type it in and leave it to LegalAId!",
    prize: "HackHarvard 2023 Winner- Best Use of Google Cloud.",
    link: "https://github.com/Chaitanya-Chaurasia/LegalAid",
  },
  {
    name: "Incognito",
    desc: "Unveiling digital vulnerability through facial recognition: Incognito puts control back in your hands. Scrape the entire web for all your public information, and choose where to display what!",
    prize: "Built @ TreeHacks 2024, Stanford University",
    link: "https://devpost.com/software/icognito",
  },
  {
    name: "WealthWise",
    desc: "Tired of overspending? Need to achieve financial freedom but don't know how to? Presenting WealthWise, a new gen AI  webapp that secures your financial future and keeps track of spending habits!",
    prize: "HackPrinceton 2024 Winner- Most Innovative Use of Verbwire.",
    link: "https://github.com/Chaitanya-Chaurasia/WealthWise",
  },
  {
    name: "BobaBrain",
    desc: "Exams are approaching? Stressed and need an AI teacher? Presenting BobaBrain, the new age AI professor! Upload your course notes and videos, and ask about anything. What's more- flashcards, AI Summary & Mind Maps!",
    prize: "Upcoming Startup. Check it out at bobabrain.ai.",
  },
];

export function Projects() {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-4 items-top justify-center ">
      {Array.from(projects).map((project) => {
        return (
          <Card key={project.name} className="w-[300px]">
            <CardHeader>
              <h2 className="text-wrap tracking-tight text-4xl font-extrabold">
                {project.name}
              </h2>
              <h2 className="text-wrap tracking-tight text-sm">
                {project.prize}
              </h2>
              <span className="text-wrap font-light">{project.desc}</span>
              {/* <h2 className="text-wrap">{project.link}</h2> */}
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
