import Login from "./components/Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./Auth/AuthProvider";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Auth/DataLayer";
import Player from "./Auth/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

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
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getMySavedTracks().then((tracks) => {
        dispatch({
          type: "SET_LIKED_MUSICS",
          likedMusics: tracks,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
