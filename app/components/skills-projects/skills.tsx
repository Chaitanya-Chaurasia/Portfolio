import React from "react";

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 p-5 rounded-3xl w-full"
      style={{
        background: "linear-gradient(to right,  #0f0c29, #302b63, #24243e)",
      }}
    >
      <span className="text-[40px]"> Things I have learnt so far!</span>
      <div className="flex flex-col items-center gap-2">
        <span
          style={{
            fontFamily: "Courier New, sans-serif",
          }}
        >
          Programming Languages
        </span>
        <div className="flex flex-row gap-2">
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aarch64/aarch64-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prolog/prolog-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
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
        >
          Frontend
        </span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>JavaScript Frameworks & Tools</span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
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
        >
          Python Libraries
        </span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
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
            fontSize: 20,
          }}
        >
          SQL & Cloud Services
        </span>
        <div className="flex flex-row gap-3">
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>

          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="bg-white p-1 rounded-xl">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      Tools I use almost daily!
      <div className="w-full flex flex-row bg-none gap-2 items-center justify-center">
        <div className="bg-white p-1 rounded-xl">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          {" "}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          {" "}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"
            height={40}
            width={40}
          />
        </div>
        <div className="bg-white p-1 rounded-xl">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg"
            height={40}
            width={40}
          />
        </div>

        <div className="bg-white p-1 rounded-xl">
          {" "}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stackoverflow/stackoverflow-original-wordmark.svg"
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
