import React from "react";
import "../../styles/spotify.css";
import leetcode from "../../../public/leetcode.svg";
import Image from "next/image";

interface LeetcodeCardProps {
  prob: string;
  topic: string;
}
const LeetcodeCard: React.FC<LeetcodeCardProps> = ({ prob, topic }) => {
  return (
    <div className="card">
      <div className="top rounded-xl border p-1 border-white w-full">
        <div className="texts">
          <p
            className="title-1"
            style={{
              fontFamily: "Signika, sans-serif",
            }}
          >
            Problem: {prob}
          </p>
          <p className="title-2">Topics: {topic}</p>
        </div>
      </div>
      <div className="bg-none gap-2 p-1 flex flex-row items-center justify-center">
        <span>Solve on</span>
        <Image src={leetcode} alt="logo" height={30} />
      </div>
    </div>
  );
};

export default LeetcodeCard;
