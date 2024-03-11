import React from "react";
import WorkCard from "./work-card";
import iit from "../../../public/iit.jpg";
import idexx from "../../../public/idexx.jpg";
import int from "../../../public/intui.jpg";
import asu from "../../../public/asu.jpg";
import { Grid } from "@mui/material";

const companies = [
  {
    name: "IDEXX Laboratories",
    position: "Embedded Software Engineering Intern",
    date: "Incoming the Summer of 2024",
    location: "Portland, Maine, United States",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam enim officiis aperiam at, eligendi consectetur dolore saepe modi odio veniam fugiat iste rem quisquam, consequuntur, laborum aspernatur eos vero.",
    image: idexx,
  },
  {
    name: " Arizona State University",
    position: "Undergraduate Teaching Assistant",
    date: "January 2024 - present",
    location: "Arizona State University, United States",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam enim officiis aperiam at, eligendi consectetur dolore saepe modi odio veniam fugiat iste rem quisquam, consequuntur, laborum aspernatur eos vero.",
    image: asu,
  },
  {
    name: "Indian Institute of Technology, Delhi",
    position: "Machine Learning & AI Intern",
    date: "May 2023 - July 2023",
    location: "New Delhi, India",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam enim officiis aperiam at, eligendi consectetur dolore saepe modi odio veniam fugiat iste rem quisquam, consequuntur, laborum aspernatur eos vero.",
    image: iit,
  },
  {
    name: "Intuicomp Terascience",
    position: "Data Science Intern",
    date: "February 2023 - April 2023",
    location: "Remote",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam enim officiis aperiam at, eligendi consectetur dolore saepe modi odio veniam fugiat iste rem quisquam, consequuntur, laborum aspernatur eos vero.",
    image: int,
  },
];
const WorkExpContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {companies.map((company) => {
        return (
          <WorkCard
            name={company.name}
            position={company.position}
            date={company.date}
            location={company.location}
            description={company.description}
            logo={company.image}
          />
        );
      })}
    </div>
  );
};

export default WorkExpContainer;
