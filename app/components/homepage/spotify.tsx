import "../../styles/spotify.css";
import spotify from "../../../public/spotify.svg";
import Image from "next/image";

interface SpotifyCardProps {
  title: string;
  artist: string;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({ title, artist }) => {
  return (
    <div className="card">
      <div className="top rounded-xl border p-1 border-white">
        <div className="pfp">
          <div className="playing">
            <div className="greenline line-1"></div>
            <div className="greenline line-2"></div>
            <div className="greenline line-3"></div>
            <div className="greenline line-4"></div>
            <div className="greenline line-5"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <p
            className="title-1"
            style={{
              fontFamily: "Signika, sans-serif",
            }}
          >
            {title}
          </p>
          <p className="title-2">{artist}</p>
        </div>
      </div>
      <div className="bg-none gap-2 p-1 flex flex-row items-center justify-center">
        <span>Listen on</span>
        <Image src={spotify} alt="logo" height={30} />
      </div>
    </div>
  );
};

export default SpotifyCard;
