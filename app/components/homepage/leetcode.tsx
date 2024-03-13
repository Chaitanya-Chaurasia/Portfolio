import React from "react";
import LeetcodeCard from "./leetcode-card";

const Leetcode = () => {
  const problem = [
    {
      problem: "Pacific Atlantic Water Flow",
      topics: "Graphs, Depth-First Search, Recursion, Matrix",
    },
  ];

  return (
    <div className="flex flex-col gap-3 p-1 rounded-xl items-center ">
      <span>Last leetcode problem I did</span>
      <LeetcodeCard prob={problem[0].problem} topic={problem[0].topics} />
    </div>
  );
};

export default Leetcode;
