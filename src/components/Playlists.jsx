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
                key={`item ${playlists?.items?.indexOf(playlist) + 1}`}
                href="#"
                className="playlist-name"
                onClick={() => {
                  dispatch({
                    type: "SET_ACTUAL_PLAYLIST",
                    actualPlaylist: playlist.id,
                    actualPlaylistImage: playlist.images[0].url,
                  });
                }}
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
