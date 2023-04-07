import React from "react";
import "../css/Home.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const icons = ["a", "b", "c", "d", "e"];

  return (
    <div className="home">
      <div className="home-container">
        <p> Boa noite</p>
        <div className="home-main">
          <div className="home-main-buttons">
            <Paper elevation={3} className="button">
              <Paper elevation={6} className="icon-heart">
                <i>
                  <FaHeart />
                </i>
              </Paper>
              <span className="button-text">Músicas Curtidas</span>
              {/* <Paper>
                <i>
                  </>
                </i>
              </Paper> */}
            </Paper>
            {icons.map((item) => {
              return (
                <Paper elevation={3} className="button">
                  <Paper elevation={6} className="icon">
                    <i>{item}</i>
                  </Paper>
                  <span className="button-text">Teste1</span>
                  {/* <Paper>
                <i>
                  </>
                </i>
              </Paper> */}
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
