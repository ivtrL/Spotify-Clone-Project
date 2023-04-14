import React, { useEffect } from "react";
import "../css/DisplayActualPlaylist.css";
import { useDataLayerValue } from "../pages/DataLayer";

const DisplayActualPlaylist = ({ spotify }) => {
  const [{ actualPlaylist, actualPlaylistImage }, dispatch] =
    useDataLayerValue();
  useEffect(() => {
    return;
  }, []);
  return (
    <div className="display-playlist">
      <div className="display-playlist-container">
        <div className="display-playlist-main">
          <ul>
            {actualPlaylist?.tracks?.items?.map((trackObject) => {
              return (
                <li
                  key={`track ${
                    actualPlaylist.tracks.items.indexOf(trackObject) + 1
                  }`}
                >
                  <a href="#" className="track">
                    <span className="track-number">
                      {actualPlaylist.tracks.items.indexOf(trackObject) + 1}
                    </span>
                    <img
                      src={trackObject.track.album.images[0].url}
                      alt={trackObject.track.name}
                      className="track-img"
                    />
                    <span className="track-title">
                      {trackObject.track.name}
                    </span>
                    <span className="track-album">
                      {trackObject.track.album.name}
                    </span>
                    <span className="track-addedin">
                      {trackObject.added_at}
                    </span>
                    <span className="track-time">{trackObject.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayActualPlaylist;
