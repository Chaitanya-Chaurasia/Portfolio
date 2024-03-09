import React from "react";
import spotify from "./spotify";
import Image from "next/image";

//www.newscientist.com/article/2420543-d-wave-says-its-quantum-computers-can-solve-otherwise-impossible-tasks/

const Reads = () => {

  const news = {
    title: "D-Wave Says Its Quantum Computers Can Solve Otherwise Impossible Tasks",
    url: "https://www.newscientist.com/article/2420543-d-wave-says-its-quantum-computers-can-solve-otherwise-impossible-tasks/",

  }
  return (
    <div className="card">
      <div className="top rounded-xl border p-1 border-white">
        <div className="pfp">
          <div className="playing">
            <div className="greenline line-1"></div>
            <div className="greenline line-2"></div>
            <div className="greenline line-3"></div>
            <div className="greenline line-4"></div>
            <div className="greenline line-5"></div>
          </div>
        </div>
        <div className="texts">
          <p
            className="title-1"
            style={{
              fontFamily: "Signika, sans-serif",
            }}
          >
            News{" "}
          </p>
          <p className="title-2">hey</p>
        </div>
      </div>
      <div className="bg-none gap-2 p-1 flex flex-row items-center justify-center">
        <span>Listen on</span>
        <Image src={spotify} alt="logo" height={30} />
      </div>
    </div>
  );
};

export default Reads;
