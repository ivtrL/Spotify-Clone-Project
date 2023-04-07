import React from "react";
import "../css/Home.css";
import Paper from "@mui/material/Paper";
import { FaHeart } from "react-icons/fa";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Home = () => {
  const icons = [
    ["icon-heart", <FaHeart />, "Músicas Curtidas"],
    ["icon", "a", "Teste1"],
    ["icon", "b", "Teste2"],
    ["icon", "c", "Teste3"],
    ["icon", "d", "Teste4"],
    ["icon", "e", "Teste5"],
  ];

  return (
    <div className="home">
      <div className="home-container">
        <p> Boa noite</p>
        <div className="home-main">
          <div className="home-main-buttons">
            {icons.map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
