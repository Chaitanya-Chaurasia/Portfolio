import React from "react";
import swades from "../../../public/swades.jpg";
import znmd from "../../../public/znmd.jpg";
import pi from "../../../public/pi.jpg";
import int from "../../../public/int.jpg";
import id from "../../../public/3id.jpg";
import avatar from "../../../public/avatar.jpg";
import Image from "next/image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

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
    <div className="flex flex-row rounded-3xl  p-1 gap-1">
      <div className="flex flex-col items-center justify-center text-center  text-black rounded-2xl p-1 text-[15px]">
        some of my favorites
        <div>
          <LocalMoviesIcon />
          <DoubleArrowIcon />
        </div>
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
