import React from "react";
import "../css/Navbar.css";
import "../css/Playlists.css";
import "../css/Sidebar.css";
import Navbar from "./Navbar";
import Playlists from "./Playlists";

const Sidebar = ({ spotify }) => {
  return (
    <div className="sidebar">
      <Navbar />
      <Playlists spotify={spotify} />
    </div>
  );
};

export default Sidebar;
