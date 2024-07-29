import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { JavaOriginal, JiraOriginal, MysqlOriginal } from "devicons-react";
import SchoolIcon from "@mui/icons-material/School";

const Work04 = () => {
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

export default Work04;
