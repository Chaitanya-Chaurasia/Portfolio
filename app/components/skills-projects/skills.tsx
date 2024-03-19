import { Paper } from "@mui/material";
import React from "react";
import Image from "next/image";
import "../../styles/skills.css";

const Skills = () => {
  return (
    <Paper
      elevation={5}
      className="flex flex-col justify-center items-center gap-4 p-5 rounded-3xl skillspaper w-full"
    >
      <span className="text-[40px] text-white">
        {" "}
        Technical Skills I have learnt so far!
      </span>
      <div className="flex flex-col items-center gap-2">
        <span
          style={{
            fontFamily: "Courier New, sans-serif",
          }}
          className="text-white"
        >
          Programming Languages
        </span>
        <div className="flex flex-row gap-2">
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span
          style={{
            fontFamily: "Dancing Script, sans-serif",
            fontSize: 20,
          }}
          className="text-white"
        >
          Frontend
        </span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-white">JavaScript Frameworks & Tools</span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg"
              alt="axios"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span
          style={{
            fontFamily: "Madimi One, sans-serif",
            fontSize: 20,
          }}
          className="text-white"
        >
          Python Tools & Libraries
        </span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span
          style={{
            fontFamily: "Road Rage, sans-serif",
            fontSize: 25,
          }}
          className="text-white"
        >
          SQL & Cloud Services
        </span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <Image
              alt="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <span className="text-white"> Tools I use almost daily!</span>
      <div className="w-full flex flex-row bg-none gap-2 items-center justify-center">
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>

        <div className="bg-white p-1 rounded-xl">
          {" "}
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>

        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>

        <div className="bg-white p-1 rounded-xl">
          {" "}
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stackoverflow/stackoverflow-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
      </div>
      <span className="text-white">I am finding my way about:</span>
      <div className="w-full flex flex-row bg-none gap-2 items-center justify-center">
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-plain.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            height={40}
            width={40}
          />
        </div>

        <div className="bg-white p-1 rounded-xl">
          {" "}
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <Image
            alt="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Skills;
