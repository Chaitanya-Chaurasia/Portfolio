import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { PythonOriginal } from "devicons-react";
import FunctionsIcon from '@mui/icons-material/Functions';

const Work02 = () => {
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
            <span className="font-semibold">
              PyPSA </span>(Python for Power Systems Analysis)
            {" "}
            and <span className="font-semibold">Altite</span>, as well as{" "}
            <span className="font-semibold">Machine Learning</span> and{" "}
            <span className="font-semibold">Mathematical tools</span> for
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

export default Work02;
