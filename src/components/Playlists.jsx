import React from "react";
import "../css/Playlists.css";
import { useDataLayerValue } from "../pages/DataLayer";

const Playlists = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="playlists">
      <div className="playlists-container">
        <ul>
          {playlists?.items?.map((playlist) => {
            return (
              <a
                key={`item ${playlists?.items?.indexOf(playlist)}`}
                href="#"
                className="playlist-name"
              >
                {playlist.name}
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Playlists;
