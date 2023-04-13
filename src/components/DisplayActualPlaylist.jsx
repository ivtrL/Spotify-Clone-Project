import React, { useEffect } from "react";
import "../css/Home.css";
import { useDataLayerValue } from "../pages/DataLayer";

const DisplayActualPlaylist = ({ spotify }) => {
  const [{ actualPlaylist }, dispatch] = useDataLayerValue();
  let playlist = [];
  useEffect(() => {
    spotify.getPlaylist(actualPlaylist).then((playlistItems) => {
      playlist = playlistItems;
    });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-main">
          <ul>
            {playlist?.tracks?.map((track) => {
              return (
                <li key={`track ${track.track_number}`}>
                  <a href="#" className="track">
                    <span className="track-number">{track.track_number}</span>
                    <img src={track.album.images.url} alt={track.name} />
                    <span className="track-title">{track.name}</span>
                    <span className="track-album">{track.name}</span>
                    <span className="track-addedin">{track.added_at}</span>
                    <span className="track-time">{track.name}</span>
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
