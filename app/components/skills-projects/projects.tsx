import * as React from "react";
import legal from "../../../public/legalaid.png";
import docushare from "../../../public/docushare.png";
import Image from "next/image";
import "../../styles/project.css";

const projects = [
  {
    name: "Legal AId",
    loc: "HackHarvard, Harvard University",
    date: "October 22nd, 2023",
    description: "",
    image: legal,
  },
  {
    name: "Incognito",
    loc: "TreeHacks, Stanford University",
    date: "February 16th, 2024",
    description: "",
    image: "",
  },
  {
    name: "This Website",
    loc: "",
    date: "March, 2024-present",
    description: "",
    image: "",
  },
  {
    name: "Effort Logger with Planning Poker",
    loc: "Coursework- CSE360",
    date: "Aug-Dec, 2023",
    description: "",
    image: "",
  },
  {
    name: "DocuShare",
    loc: "HackPrinceton, Princeton University",
    date: "November 10th, 2023",
    description: "",
    image: docushare,
  },
  {
    name: "ForexGuru",
    loc: "Personal Project",
    date: "Jan-present, 2024",
    description: "",
    image: "",
  },
];

export default function Project() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-5 rounded-3xl w-full border">
      <div className="container shoe">
        <div className="productImage shoeImg"></div>
        <div className="size shoeSize">
          <h4>SIZE</h4>
          <ul>
            <li>9</li>
            <li>8</li>
            <li>7</li>
          </ul>
        </div>
        <div className="price shoePrice">
          <h4>PRICE</h4>
          <span>$150</span>
        </div>
        <div className="color shoeColor">
          <h4>COLORS</h4>
          <ul>
            <li>
              <span className="blue"></span>
            </li>
            <li>
              <span className="yellow"></span>
            </li>
            <li>
              <span className="red"></span>
            </li>
          </ul>
        </div>
        <div className="productName shoeName">Nike Air Max</div>
      </div>
    </div>
  );
}
