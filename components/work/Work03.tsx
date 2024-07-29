import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { MysqlOriginal, PythonOriginal, SpackOriginal } from "devicons-react";
import SsidChartIcon from "@mui/icons-material/SsidChart";

const Work03 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg flex gap-1 items-center">
            Intuicomp Terascience
            <SsidChartIcon/>
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

export default Work03;
