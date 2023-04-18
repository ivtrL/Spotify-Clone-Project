import React from "react";
import "../css/Home.css";
import Paper from "@mui/material/Paper";
import { FaHeart } from "react-icons/fa";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDataLayerValue } from "../pages/DataLayer";

const Home = () => {
  const [, dispatch] = useDataLayerValue();
  const icons = [
    ["icon", "a", "Teste1"],
    ["icon", "b", "Teste2"],
    ["icon", "c", "Teste3"],
    ["icon", "d", "Teste4"],
    ["icon", "e", "Teste5"],
  ];

  return (
    <div className="home">
      <div className="home-container">
        <div
          class="background-fade-home"
          style={{ backgroundColor: "rgb(80, 56, 160)" }}
        ></div>
        <div className="home-main">
          <p>Boa noite</p>
          <div className="home-main-buttons">
            <li
              key={"item 1"}
              onClick={() => {
                dispatch({
                  type: "SET_LIKED_MUSICS_ACTIVE",
                  likedMusicsActive: true,
                });
              }}
            >
              <Paper elevation={3} className="button">
                <div className="wrapper">
                  <Paper elevation={6} className="icon-heart">
                    <i>
                      <FaHeart />
                    </i>
                  </Paper>
                  <span className="button-text">Músicas Curtidas</span>
                </div>
                <Paper elevation={5} className="button-play-icon">
                  <i>
                    <PlayArrowIcon />
                  </i>
                </Paper>
              </Paper>
            </li>
            {icons.map((item) => (
              <li key={"item " + (icons.indexOf(item) + 2)}>
                <Paper elevation={3} className="button">
                  <div className="wrapper">
                    <Paper elevation={6} className={item[0]}>
                      <i>{item[1]}</i>
                    </Paper>
                    <span className="button-text">{item[2]}</span>
                  </div>
                  <Paper elevation={5} className="button-play-icon">
                    <i>
                      <PlayArrowIcon />
                    </i>
                  </Paper>
                </Paper>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
