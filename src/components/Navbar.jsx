import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { IoLibraryOutline, IoLibrarySharp } from "react-icons/io5";
import { RiSearch2Line, RiSearch2Fill } from "react-icons/ri";
import "../css/Navbar.css";
import { useDataLayerValue } from "../pages/DataLayer";
import LikedMusics from "./LikedMusics";

const Navbar = () => {
  const [{ actualPlaylist, likedMusicsActive }, dispatch] = useDataLayerValue();
  const [iconChange, setIconChange] = useState({
    icon1: true,
    icon2: false,
    icon3: false,
  });

  return (
    <div className="navbar">
      <div className="navbar-container">
        <li>
          <a
            href="#"
            className={`nav-link ${
              !actualPlaylist &&
              !likedMusicsActive &&
              iconChange.icon1 &&
              "active-link"
            }`}
            onClick={() => {
              setIconChange({ icon1: true, icon2: false, icon3: false });
              likedMusicsActive
                ? dispatch({
                    type: "SET_LIKED_MUSICS_ACTIVE",
                    likedMusicsActive: false,
                  })
                : actualPlaylist
                ? dispatch({
                    type: "SET_ACTUAL_PLAYLIST",
                    actualPlaylist: null,
                    actualPlaylistImage: null,
                  })
                : null;
            }}
          >
            <i className="nav-icon">
              {!actualPlaylist && !likedMusicsActive && iconChange.icon1 ? (
                <RiHome5Fill />
              ) : (
                <RiHome5Line />
              )}
            </i>
            <span className="nav-name">Inicio</span>
          </a>
          <a
            href="#"
            className={`nav-link ${
              !actualPlaylist &&
              !likedMusicsActive &&
              iconChange.icon2 &&
              "active-link"
            }`}
            onClick={() =>
              setIconChange({ icon1: false, icon2: true, icon3: false })
            }
          >
            <i className="nav-icon">
              {!actualPlaylist && !likedMusicsActive && iconChange.icon2 ? (
                <RiSearch2Fill />
              ) : (
                <RiSearch2Line />
              )}
            </i>
            <span className="nav-name">Buscar</span>
          </a>
          <a
            href="#"
            className={`nav-link ${
              !actualPlaylist &&
              !likedMusicsActive &&
              iconChange.icon3 &&
              "active-link"
            }`}
            onClick={() =>
              setIconChange({ icon1: false, icon2: false, icon3: true })
            }
          >
            <i className="nav-icon">
              {!actualPlaylist && !likedMusicsActive && iconChange.icon3 ? (
                <IoLibrarySharp />
              ) : (
                <IoLibraryOutline />
              )}
            </i>
            <span className="nav-name">Sua Biblioteca</span>
          </a>
        </li>
        <div>
          <a href="#" className="nav-link">
            <i className="nav-icon-plus">
              <BiPlus />
            </i>
            <span className="nav-nome">Criar playlist</span>
          </a>
          <a href="#" className="nav-link">
            <i className="nav-icon-heart">
              <FaHeart />
            </i>
            <span
              className={`nav-name ${likedMusicsActive && "active-link"}`}
              onClick={() => {
                !likedMusicsActive
                  ? dispatch({
                      type: "SET_LIKED_MUSICS_ACTIVE",
                      likedMusicsActive: true,
                    })
                  : null;
              }}
            >
              Músicas Curtidas
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
