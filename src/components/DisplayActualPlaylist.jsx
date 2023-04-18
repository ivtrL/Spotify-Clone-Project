import React, { useEffect } from "react";
import "../css/DisplayActualPlaylist.css";
import { useDataLayerValue } from "../pages/DataLayer";

const DisplayActualPlaylist = ({ spotify }) => {
  const [{ actualPlaylist, actualPlaylistImage }, dispatch] =
    useDataLayerValue();
  const g1 = new Date();

  return (
    <div className="display-playlist">
      <div className="display-playlist-container">
        <div
          class="background-fade"
          style={{ backgroundColor: "rgb(80, 56, 160)" }}
        ></div>
        <div className="display-playlist-tracks">
          <ul>
            {actualPlaylist?.tracks?.items?.map((trackObject) => {
              const min = Math.floor(
                (trackObject.track.duration_ms / 1000 / 60) << 0
              );
              const sec = Math.floor(
                (trackObject.track.duration_ms / 1000) % 60
              );
              const g2 = new Date(trackObject.added_at);

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
                      {g1.getTime() == g2.getTime()
                        ? "agora"
                        : g1.getFullYear() == g2.getFullYear()
                        ? g1.getMonth() == g2.getMonth()
                          ? g1.getDate() == g2.getDate()
                            ? g1.getHours() == g2.getHours()
                              ? g1.getMinutes() == g2.getMinutes()
                                ? g1.getSeconds() - g2.getSeconds() == 1
                                  ? "há 1 segundo"
                                  : `há ${
                                      g1.getSeconds() - g2.getSeconds()
                                    } segundos`
                                : g1.getMinutes() - g2.getMinutes() == 1
                                ? "há 1 dia"
                                : `há ${g1.getMinutes() - g2.getMinutes()} dias`
                              : g1.getHours() - g2.getHours() == 1
                              ? "há 1 hora"
                              : `há ${g1.getHours() - g2.getHours()} horas`
                            : g1.getDate() - g2.getDate() == 1
                            ? "há 1 dia"
                            : `há ${g1.getDate() - g2.getDate()} dias`
                          : g1.getMonth() - g2.getMonth() == 1
                          ? "há 1 mês"
                          : `há ${g1.getMonth() - g2.getMonth()} meses`
                        : g1.getFullYear() - g2.getFullYear() == 1
                        ? "há 1 ano"
                        : `há ${g1.getFullYear() - g2.getFullYear()} anos`}
                    </span>
                    <span className="track-time">{`${min}:${sec
                      .toString()
                      .padStart(2, "0")}`}</span>
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
