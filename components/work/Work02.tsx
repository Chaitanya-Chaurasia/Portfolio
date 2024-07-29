import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { DockerOriginal, PythonOriginal, ScikitlearnOriginal } from "devicons-react";

const Work02 = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <span className="flex flex-col gap-1">
          <h2 className="tracking-tight font-semibold text-lg">
            Indian Institute of Technology
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
            working as a Machine Learning Intern, attempting to optimize
            existing power systems.
            <br />
            <br />
            Well, to be honest, it was a lot more Math and Physics than CS 😅...
            Imagine you have an existing network of transmission towers (the big
            Eiffel Tower-like pylons) and you could achieve the same/better
            performance by using an "optimized" layout. This was our goal and we
            were also closely working with the United Nations SDGs.
            <br />
            <br />
            To achieve this, we used open source tools such as PyPSA (Python for
            Power Systems Analysis) and Altite, as well as Machine Learning
            tools for detailed analysis. We mapped the networks into graphs, and
            fed different parameters into our algorithm to come up with
            different layouts, to look for the most optimal network.
            <br />
            <br />
            This was something, I believe actually has practical application in
            the future, and more so, it was something worthwhile and super
            interesting to work on.
            <br />
            <br />
            <h2 className="font-semibold flex gap-2 items-center">
              Tools I used: <PythonOriginal /> Python &#x2022; <ScikitlearnOriginal /> SKLearn &#x2022; <DockerOriginal /> Docker
            </h2>
          </span>
        </span>
      </CardHeader>
    </Card>
  );
};

export default Work02;
