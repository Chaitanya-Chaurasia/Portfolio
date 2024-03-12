import React from "react";
import iit from "../../../public/iit.png";
import idexx from "../../../public/idexx.jpg";
import int from "../../../public/intui.jpg";
import asu from "../../../public/asu.jpg";
import Image from "next/image";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Typography from "@mui/material/Typography";
import "../../styles/work.css";
import { Paper, Divider } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { LocationOn } from "@mui/icons-material";

const companies = [
  {
    name: "IDEXX Laboratories",
    position: "Incoming Embedded Software Engineering Intern",
    date: "May - August, 2024",
    location: "Portland, Maine, United States",
    description: "",
    image: idexx,
    font: "Quicksand, sans-serif",
    task: "",
    skills: "",
    layman:
      "This summer, I will be working on integrating hardware with software that IDEXX is developing, developing new software and in the process, discover my creative side & of course, learn a lot!",
    laymanfont: "Quicksand, sans-serif",
  },
  {
    name: "Arizona State University",
    position: "Undergraduate Teaching Assistant",
    date: "January, 2024 - present",
    location: "Arizona State University, United States",
    image: asu,
    font: "Quicksand, sans-serif",
    layman:
      " So, I'm a teaching assistant for two classes: Intro to Software Development and Game Development. My job is to make sure students get the hang of the stuff without feeling overwhelmed. I hold regular office hours, answer questions through emails and Discord, and help out during classes. Basically, I'm here to make sure students stay engaged and interested in what they're learning!",
    skills: "",
    task: "CSE360 introduces students to Agile software development stages, employing tools such as Java, JavaFX GUI, Astah, JUnit, and client documentation practices. Conversely, Game Development focuses on 2-D game creation using Gamemaker Studio, equipping students with practical skills in game design and implementation. Both courses offer valuable insights into software development practices, catering to diverse interests within computer science and technology.",
    laymanfont: "Quicksand, sans-serif",
  },
  {
    name: "Indian Institute of Technology, Delhi",
    position: "Machine Learning & AI Intern",
    date: "May - July, 2023",
    location: "New Delhi, India",
    image: iit,
    font: "Quicksand, sans-serif",
    header: "Reimagining Power Distribution!",
    task: "So, imagine you have a bunch of electric towers distributing power. Now, what if I told you that we could actually make the whole system work better by changing things up a bit? Using some fancy computer programs like PyPSA and Panoply, we figured out how to improve the efficiency of these power systems by about 25%. Here's the deal: we looked at all the different factors that go into running these systems, like how much energy they produce, how much it costs, and how much pollution they create. By tweaking more than 10 different settings, such as the size of the power plants and how they're connected, we managed to make everything work way more efficiently. And we didn't just stop there - we also made sure to consider things like environmental impact and cost-effectiveness. To make all this happen, we used Graph algorithms, Clustering, Machine Learning, Python scripts and data visualization. Basically, we wrote programs that analyzed the network of electric towers and figured out the best way to optimize everything. And the result? A more sustainable and cost-effective way of powering Kenya and Great Britain's homes and businesses.",
    skills: "",
    laymanfont: "Quicksand, sans-serif",
  },
  {
    name: "Intuicomp Terascience",
    position: "Data Science Intern",
    date: "February - April, 2023",
    location: "Remote",
    task: "Utilizing Apache PySpark and Python within the realm of big data analytics, I contributed to biomedical computational sciences with the overarching objective of augmenting pharmaceutical industry productions by 33%. Collaborating within an agile team framework, our efforts were directed towards the development of multiple polynomial regression models. These models were instrumental in accurately forecasting the potency of time-releasing drugs with an impressive precision rate of 87%, consequently facilitating an upscale in pharmaceutical productions by up to 1.5 times. Furthermore, employing data science libraries such as Numpy, I conducted comprehensive analyses to extract valuable insights pertaining to five distinct pharmaceutical properties of Divalproex and Quetiapine. These insights hold significant implications for various biomedical applications, thus reinforcing the bridge between computational sciences and biomedicine.",
    layman:
      "So, what if I told you that I used fancy computer stuff like Apache PySpark and Python to help make medicines better? Yeah, I worked with a team to develop really smart models that can predict how strong certain drugs will be over time. By doing this, we've been able to make more drugs faster, which is pretty cool. Plus, we've found out some really important things about some specific medicines that could help make even better medicines in the future. It's like using super-smart math to make medicine-making faster and better!",
    image: int,
    font: "Quicksand, sans-serif",
    skills: "",
    laymanfont: "Quicksand, sans-serif",
  },
];

const WorkExpContainer = () => {
  return (
    <Paper
      elevation={0}
      className=" paper rounded-3xl w-full p-5"
      sx={{
        color: "white",
      }}
    >
      <Timeline
        position="alternate"
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          gap: 1,
        }}
      >
        {companies.map((company, index) => (
          <TimelineItem key={index} className="gap-5">
            <TimelineOppositeContent
              color="textSecondary"
              className="flex justify-center items-center"
            >
              <div className="flex w-full flex-[1_1_0%] ">
                <Image src={company.image} alt="logo" className="rounded-2xl" />
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="flex flex-col gap-3">
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontFamily: company.font,
                }}
              >
                {company.date}
              </Typography>
              <div className="flex flex-col lg:flex-row gap-5 p-5 rounded-3xl box ">
                <div className="flex flex-[2_2_0%] flex-col gap-2 items-center">
                  <div
                    style={{
                      fontSize: 30,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: company.font,
                      }}
                    >
                      {company.position} @ {company.name}
                    </span>
                  </div>
                  <div
                    className="flex flex-row items-center justify-center "
                    style={{
                      fontSize: 16,
                    }}
                  >
                    <LocationOn />
                    {company.location}
                  </div>
                  {company.name === "IDEXX Laboratories" ? (
                    <>
                      <div>what i'll be doing</div>
                      <div className="flex flex-col">
                        <div
                          className="text-[22px]"
                          style={{
                            fontFamily: company.font,
                          }}
                        >
                          {company.layman}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col justify-center items-center text-center gap-5">
                        <div
                          className="text-[21px]"
                          style={{
                            fontFamily: company.font,
                          }}
                        >
                          {company.header}
                        </div>
                        <div className="text-[18px]">{company.layman}</div>

                        <div
                          className="text-[15px]"
                          style={{
                            fontFamily: company.font,
                          }}
                        >
                          {company.task}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default WorkExpContainer;
