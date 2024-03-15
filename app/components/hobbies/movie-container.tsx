import React from "react";
import angry from "../../../public/angry.jpg";
import swades from "../../../public/swades.jpg";
import znmd from "../../../public/znmd.jpg";
import pi from "../../../public/pi.jpg";
import int from "../../../public/int.jpg";
import gunj from "../../../public/gunj.jpg";
import avatar from "../../../public/avatar.jpg";
import jp from "../../../public/jp.jpg";
import Image from "next/image";

const movies = [
  {
    image: jp,
  },
  {
    image: int,
  },
  {
    image: pi,
  },
  {
    image: avatar,
  },
  {
    image: swades,
  },
  {
    image: znmd,
  },
  {
    image: angry,
  },
];
const MovieContainer = () => {
  return (
    <div className="flex flex-row w-full rounded-3xl bg-black p-1 gap-1">
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
