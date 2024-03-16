import React from "react";
import angry from "../../../public/angry.jpg";
import swades from "../../../public/swades.jpg";
import znmd from "../../../public/znmd.jpg";
import pi from "../../../public/pi.jpg";
import int from "../../../public/int.jpg";
import id from "../../../public/3id.jpg";
import avatar from "../../../public/avatar.jpg";
import jp from "../../../public/jp.jpg";
import Image from "next/image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const movies = [
  {
    image: int,
  },
  {
    image: avatar,
  },
  {
    image: pi,
  },
  {
    image: swades,
  },
  {
    image: znmd,
  },
  {
    image: id,
  },
];
const MovieContainer = () => {
  return (
    <div className="flex flex-row rounded-3xl bg-black p-1 gap-1">
      <div className="flex flex-col items-center justify-center text-center bg-black text-white rounded-2xl p-1">
        some of my favorites
        <DoubleArrowIcon />
      </div>
      {movies.map((movie, index) => {
        return (
          <div key={index} className="">
            <Image
              src={movie.image}
              alt="logo"
              className="rounded-2xl"
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieContainer;
