import React from "react";
import { Card, CardHeader } from "./ui/card";
import {
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  NextjsPlain,
  JavascriptOriginal,
  TypescriptOriginal,
  ExpressOriginal,
  NodejsPlain,
  AmazonwebservicesPlainWordmark,
  GitOriginal,
  DockerOriginal,
  PostcssOriginal,
  PostgresqlOriginal,
} from "devicons-react";

const SkillCard03 = () => {
  return (
    <Card className="w-[350px] bg-transparent border-none">
      <CardHeader>
        <span>
          <h2 className="tracking-tight text-3xl font-bold">My Skillset</h2>
          <br />
          I'm only a student, but soon will become a professional. Keeping this
          mind, I keep on polishing my skillset to keep up with the market. Now,
          I don't talk only of technical competency but also of soft-skills.
          <br />
          <br />
          Some of the most important ones I believe are leadership,
          adaptability, management and effective speech. Now, coming to
          technical skills, these are the skills I have used the most:
        </span>
        <br />
        <div className="flex text-sm font-semibold items-center gap-2">
          <PythonOriginal /> Python
          <JavascriptOriginal /> JavaScript
          <TypescriptOriginal /> TypeScript
        </div>
        <div className="flex text-sm font-semibold items-center gap-2">
          <NextjsPlain /> Nextjs
          <ReactOriginal /> React
          <TailwindcssOriginal /> Tailwind
          <ExpressOriginal /> Express
        </div>
        <div className="flex text-sm font-semibold items-center gap-2">
          <NodejsPlain /> Node
          <AmazonwebservicesPlainWordmark /> AWS
          <GitOriginal /> Git
          <DockerOriginal /> Docker
          <PostgresqlOriginal /> SQL
        </div>
        <br />
        <span>
          After all, given how vast Computer Science is, as a domain, I try to
          keep my feet in all different spheres, learning something new!
        </span>
      </CardHeader>
    </Card>
  );
};

export default SkillCard03;
