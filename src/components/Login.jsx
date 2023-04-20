import React from "react";
import { loginUri } from "../Auth/AuthProvider";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="img.png"
      />
      <a href={loginUri}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
