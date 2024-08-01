"use client";
import React from "react";

// shadcn components
import { Separator } from "./ui/separator";
import { Card, CardHeader } from "./ui/card";
// Icons
import {
  BashOriginal,
  CsharpOriginal,
  LinuxOriginal,
  LuaOriginal,
  MysqlOriginal,
  PythonOriginal,
  SpackOriginal,
  JavaOriginal,
  JiraOriginal,
} from "devicons-react";
import ScienceIcon from "@mui/icons-material/Science";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import SchoolIcon from "@mui/icons-material/School";
import FunctionsIcon from "@mui/icons-material/Functions";

export const Work01 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg flex gap-1 items-center">
            IDEXX Laboratories
            <ScienceIcon />
          </h2>
          <h2 className="tracking-tight font-semibold text-md ">
            Embedded Software Engineering Intern
          </h2>{" "}
          <h2 className="tracking-tight font-normal text-sm flex text-muted-foreground gap-5">
            Portland, Maine
            <Separator orientation="vertical" className="h-[20px]" />
            June - August, 2024
          </h2>
          <br />
          <span className="text-sm">
            This summer, I'm at IDEXX, working with the Chemistry team on
            designing internal tools for testing a fleet of machines called{" "}
            <span className="font-semibold">"Autocats." </span>
            Autocats are a fleet of{" "}
            <span className="font-semibold">veterinary </span>
            machines used to prognose, diagnose and run sophisticated health
            tests.
            <br />
            <br />I am developing an full-fledged{" "}
            <span className="font-semibold">API</span> in{" "}
            <span className="font-semibold">C# (ASP.NET)</span> and{" "}
            <span className="font-semibold">Bash </span>, that enables
            communicating with these remote devices, enabling{" "}
            <span className="font-semibold">
              software installation, running remote tests, testing, remote
              health checkups{" "}
            </span>
            and <span className="font-semibold">machine maintainance</span>. I
            hope to deploy this feature before the end of my term. (hopefully
            :)) 🤞
            <br />
            <br />
            In terms of productivity and learning, this has been an exceptional
            experience. From the interview process, to getting onboarded, and to
            now almost finish, everything was so smooth and professional. I
            think I was able to level up my inter-personal skills, better
            communication for example, and also my technical prowess. I learnt a
            lot, and also got a chance to meetup with the Best Seller{" "}
            <span className="font-semibold">Keith Ferrazzi</span>. If I could
            rate it, a 12/10.
            <br />
            <br />
            <h2 className="font-semibold flex gap-2 items-center">
              Tools I used: <CsharpOriginal /> C# &#x2022; <LuaOriginal /> Lua
              &#x2022; <LinuxOriginal /> Linux &#x2022;
              <BashOriginal /> Bash
            </h2>
          </span>
        </span>
      </CardHeader>
    </Card>
  );
};

export const Work02 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg flex items-center gap-1">
            Indian Institute of Technology
            <FunctionsIcon />
          </h2>
          <h2 className="tracking-tight font-semibold text-md">
            Machine Learning Intern
          </h2>{" "}
          <h2 className="tracking-tight font-normal text-sm flex text-muted-foreground gap-5">
            New Delhi, India
            <Separator orientation="vertical" className="h-[20px]" />
            May - August, 2023
          </h2>
          <br />
          <span className="text-sm">
            I spent the summer of 2023 interning under the aeges of IIT Delhi
            working as a Machine Learning Intern, attempting to{" "}
            <span className="font-semibold">optimize </span>
            existing <span className="font-semibold">power systems.</span>
            <br />
            <br />
            Well, to be honest, it was a lot more Math and Physics than CS 😅...
            Imagine you have an existing network of transmission towers (the{" "}
            <span className="font-semibold">
              big Eiffel Tower-like pylons){" "}
            </span>{" "}
            and you could achieve the same/better performance by using an{" "}
            <span className="font-semibold">"optimized" layout.</span> This was
            our goal and we were also closely working with the{" "}
            <span className="font-semibold">United Nations SDGs.</span>
            <br />
            <br />
            To achieve this, we used open source tools such as{" "}
            <span className="font-semibold">PyPSA </span>(Python for Power
            Systems Analysis) and <span className="font-semibold">Altite</span>,
            as well as <span className="font-semibold">Machine Learning</span>{" "}
            and <span className="font-semibold">Mathematical tools</span> for
            detailed analysis. We mapped the networks into{" "}
            <span className="font-semibold">graphs </span>, and fed{" "}
            <span className="font-semibold">different parameters</span> into our{" "}
            <span className="font-semibold">algorithm</span> to come up with
            different layouts, to look for the most optimal network.
            <br />
            <br />
            This was something I believe actually has practical application in
            the future, and more so, it was something worthwhile and super
            interesting to work on.
            <br />
            <br />
            <h2 className="font-semibold flex gap-2 items-center">
              Tools I used: <PythonOriginal /> Python &#x2022; Linear
              Optimization &#x2022; Graphs
            </h2>
          </span>
        </span>
      </CardHeader>
    </Card>
  );
};

export const Work03 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg flex gap-1 items-center">
            Intuicomp Terascience
            <SsidChartIcon />
          </h2>
          <h2 className="tracking-tight font-semibold text-md">
            Data Science Intern
          </h2>{" "}
          <h2 className="tracking-tight font-normal text-sm flex text-muted-foreground gap-5">
            Gurugram, India
            <Separator orientation="vertical" className="h-[20px]" />
            March - May, 2023
          </h2>
          <br />
          <span className="text-sm">
            My first ever professional work was in an Indian startup called
            Intuicomp Terascience, where I was positioned as a Data Science
            intern. During my role, I did an in-depth analysis on the{" "}
            <span className="font-semibold">in-vitro vs in-vivo</span> behaviors
            of certain chemicals.
            <br />
            <br />
            Our team was in charge of creating simple{" "}
            <span className="font-semibold">linear regression</span> models to
            predict <span className="font-semibold">time-releasing drug</span>{" "}
            potency and achieved{" "}
            <span className="font-semibold">87% accuracy</span> on a given
            dataset. Based on the outcomes, we were able to recommend data to
            increase <span className="font-semibold">drug-efficiency</span> by
            up to <span className="font-semibold">1.5 times</span>. I used data
            analysis tool such as{" "}
            <span className="font-semibold">Numpy, Pandas</span> and{" "}
            <span className="font-semibold">Scikit-learn</span> to extract
            insights into 5 distinct pharmaceutical properties of 2 specific
            drugs, namely
            <span className="font-semibold"> Divalproex </span> and{" "}
            <span className="font-semibold">Quetiapine</span>.
            <br />
            <br />
            Being my first proper gig, I was really excited to embark on this
            journey, and made the most of this experience.
            <br />
            <br />
            <h2 className="font-semibold flex gap-2 items-center">
              Tools I used: <PythonOriginal /> Python &#x2022; <MysqlOriginal />{" "}
              MySQL &#x2022; <SpackOriginal /> Apache Spark
            </h2>
          </span>
        </span>
      </CardHeader>
    </Card>
  );
};

export const Work04 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg flex items-center gap-1">
            Arizona State University
            <SchoolIcon />
          </h2>
          <h2 className="tracking-tight font-normal text-sm flex text-muted-foreground gap-5">
            Tempe, Arizona
            <Separator orientation="vertical" className="h-[20px]" />
            January, 2023 - May, 2024
          </h2>
          <Separator className="my-2" />
          <h2 className="tracking-tight font-semibold text-md">
            &#x2022; Undergraduate Teaching Assistant
          </h2>
          <br />
          <span className="text-sm">
            I was fortunate to hold this position for two classes, namely CPI111
            (Introduction to Game Dev.) and CSE360 (Software Engineering
            Principles). During my tenure, I prepared training modules, videos
            and lecture material on{" "}
            <span className="font-semibold">
              Agile Software Development, Java
            </span>{" "}
            and <span className="font-semibold">JavaFX, Documentation</span> and{" "}
            <span className="font-semibold">delivery guidelines</span> and{" "}
            <span className="font-semibold">GameMaker Studio 2</span>.
          </span>
          <br />
          <h2 className="font-semibold flex gap-2 items-center text-sm">
            Tools I used: <JavaOriginal /> Java &#x2022; <MysqlOriginal /> MySQL
            &#x2022; <JiraOriginal /> Agile (Jira)
          </h2>
          <br />
          <h2 className="tracking-tight font-semibold text-md">
            &#x2022; Gold Guide
          </h2>{" "}
          <br />
          <span className="text-sm">
            During my tenure, I was working with the New Students Programs to
            outreach incoming freshman, provide support, organize annual college
            fests, volunteer all around the university, holding campus tours,
            and providing everything else that a freshman needs to feel at home!
          </span>
        </span>
      </CardHeader>
    </Card>
  );
};
