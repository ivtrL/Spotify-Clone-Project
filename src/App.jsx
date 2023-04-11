import ActuallyListeningBar from "./components/ActuallyListeningBar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Playlists from "./components/Playlists";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./pages/AuthProvider";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./pages/DataLayer";
import Player from "./pages/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  console.log("TOKEN 👉 ", token);
  console.log("USER 👉 ", user);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
