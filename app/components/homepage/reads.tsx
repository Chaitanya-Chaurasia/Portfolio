import Image from "next/image";
import React from "react";
import newslogo from "../../../public/news.png";


const Reads = () => {
  const news = {
    title:
      "D-Wave Says Its Quantum Computers Can Solve Otherwise Impossible Tasks",
    url: "https://www.newscientist.com/article/2420543-d-wave-says-its-quantum-computers-can-solve-otherwise-impossible-tasks/",
  };
  return (
    <div className="w-full flex flex-col gap-3 p-1 rounded-xl">
      <span>I found this interesting 🤯</span>
      <div className="w-full">
        <div className="top rounded-xl flex flex-1 w-full border p-1 border-white">
          <div className="texts">
            <a href="//www.newscientist.com/article/2420543-d-wave-says-its-quantum-computers-can-solve-otherwise-impossible-tasks/">
              <p
                className="title-1 w-full"
                style={{
                  fontFamily: "Signika, sans-serif",
                }}
              >
             
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reads;
