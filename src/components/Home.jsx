import React from "react";
import "../css/Home.css";
import Button from "@mui/material/Button";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Button variant="contained" className="button">
        <i className='icon-heart'><FaHeart/></i>
          <span className="button-text">Músicas Curtidas</span>
        </Button>
        <Button variant="contained" className="button">
          Teste1
        </Button>
        <Button variant="contained" className="button">
          Teste2
        </Button>
        <Button variant="contained" className="button">
          Teste3
        </Button>
        <Button variant="contained" className="button">
          Teste4
        </Button>
        <Button variant="contained" className="button">
          Teste5
        </Button>
      </div>
    </div>
  );
};

export default Home;
