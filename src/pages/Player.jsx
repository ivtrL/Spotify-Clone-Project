import React from "react";
import Profile from "../components/Profile";
import Home from "../components/Home";
import ActuallyListeningBar from "../components/ActuallyListeningBar";
import Sidebar from "../components/Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="main">
      <Sidebar />
      <Profile />
      <Home />
      <ActuallyListeningBar />
    </div>
  );
};

export default Player;
