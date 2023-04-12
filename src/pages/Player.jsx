import React from "react";
import Home from "../components/Home";
import ActuallyListeningBar from "../components/ActuallyListeningBar";
import Sidebar from "../components/Sidebar";
import Homebar from "../components/Homebar";

const Player = ({ spotify }) => {
  return (
    <div className="main">
      <Sidebar />
      <Homebar spotify={spotify} />
      <Home />
      <ActuallyListeningBar />
    </div>
  );
};

export default Player;
