import React from "react";
import Home from "../components/Home";
import ActuallyListeningBar from "../components/ActuallyListeningBar";
import Sidebar from "../components/Sidebar";
import Homebar from "../components/Homebar";
import { useDataLayerValue } from "./DataLayer";
import DisplayActualPlaylist from "../components/DisplayActualPlaylist";
import LikedMusics from "../components/LikedMusics";

const Player = ({ spotify }) => {
  const [{ actualPlaylist, likedMusicsActive }, dispatch] = useDataLayerValue();

  return (
    <div className="main">
      <Sidebar spotify={spotify} />
      <Homebar />
      {likedMusicsActive ? (
        <LikedMusics />
      ) : actualPlaylist ? (
        <DisplayActualPlaylist spotify={spotify} />
      ) : (
        <Home />
      )}
      <ActuallyListeningBar />
    </div>
  );
};

export default Player;
