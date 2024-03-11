import { Divider, Stepper, Step, StepLabel, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import "../../styles/work.css";

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
    <div className="flex flex-row items-center justify-center w-full h-full">
      <figure className="image-block ">
        <h1>{name}</h1>
        <Image src={logo} alt="logo" />
        <figcaption>
          <p className="bg-gray-500/50 rounded-3xl p-3">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </figcaption>
      </figure>
      <div className="bg-black h-full flex flex-col items-center justify-center">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </div>
    </div>
  );
};

export default WorkCard;
