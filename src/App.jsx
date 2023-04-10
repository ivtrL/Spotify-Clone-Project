import ActuallyListeningBar from "./components/ActuallyListeningBar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Playlists from "./components/Playlists";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./pages/AuthProvider";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("TOKEN 👉 ", token);
  }, []);
  return (
    <div className="app">
      {token ? (
        <div className="main">
          <Navbar />
          <Profile />
          <Home />
          <Playlists />
          <ActuallyListeningBar />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
