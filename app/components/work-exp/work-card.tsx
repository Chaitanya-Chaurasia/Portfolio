import Image, { StaticImageData } from "next/image";
import React from "react";
import "../../styles/work.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth } from "@mui/icons-material";

interface WorkCardProps {
  name: string;
  position: string;
  date: string;
  location: string;
  description: string;
  logo: StaticImageData;
}

const WorkCard: React.FC<WorkCardProps> = ({
  name,
  position,
  date,
  location,
  description,
  logo,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full">
      <figure
        dir="ltr"
        className="image-block flex flex-[1_1_0%] bg-gray-500 rounded-s-3xl "
      >
        <h1>{name}</h1>
        <Image src={logo} alt="logo" className="opacity-[0.2] image-card" />
      </figure>
      <div
        dir="rtl"
        className="bg-black h-full flex sm:flex-[1_1_0%] lg:flex-[2_2_0%] flex-col items-left justify-center p-5 rounded-s-3xl"
      >
        <div dir="ltr" className="text-[40px]">
          {position}
        </div>
        <div dir="ltr" className="flex gap-3 items-center">
          <LocationOnIcon />
          {location}
        </div>
        <div dir="ltr" className="flex gap-3 items-center">
          <CalendarMonth />
          {date}
        </div>
        <div dir="ltr">{description}</div>
      </div>
    </div>
  );
};

export default WorkCard;
