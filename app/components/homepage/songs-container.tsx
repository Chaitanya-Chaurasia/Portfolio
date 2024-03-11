import React from "react";
import SpotifyCard from "./spotify";

const SongsContainer = () => {
  let songs = [
    {
      artist: "21 Savage",
      title: "redrum",
    },
  ];

  return (
    <div className="flex flex-col gap-3 p-1 rounded-xl items-center ">
      <span>Playing on loop 🎵</span>
      {songs.map((song) => {
        return <SpotifyCard title={song.title} artist={song.artist} />;
      })}
    </div>
  );
};

export default SongsContainer;
