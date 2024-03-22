import Image, { StaticImageData } from "next/image";
import ang from "../../../public/ang.jpg";
import sap from "../../../public/sapp.jpg";
import nfs from "../../../public/nfsmw.jpg";
import gta from "../../../public/gta.jpg";
import fifa from "../../../public/fifa.jpg";

const games = [
  {
    image: ang,
  },
  {
    image: sap,
  },
  {
    image: nfs,
  },
  {
    image: gta,
  },
  {
    image: fifa,
  },
];

const GameContainer = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      {games.map((game, index) => {
        return (
          <div className="flex flex-1 items-center justify-center" key={index}>
            <Image
              src={game.image}
              alt="game"
              className="rounded-xl"
              height={150}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GameContainer;
