import React, { useState } from "react";
import "../css/DisplayActualPlaylist.css";
import { useDataLayerValue } from "../Auth/DataLayer";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { BiTime, BiPlay } from "react-icons/bi";

const LikedMusics = () => {
  const [{ likedMusics, user }, dispatch] = useDataLayerValue();
  const g1 = new Date();

  return (
    <div className="display-playlist">
      <div className="display-playlist-container">
        <div className="contentSpacing display-playlist-header">
          <div
            class="backgroundColor"
            style={{ backgroundColor: "rgb(80, 56, 160)" }}
          ></div>
          <div class="backgroundColor1"></div>
          <div className="playlist-main-content">
            <Paper className="playlist-img" elevation={24} square>
              <img
                src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
                alt="playlist.png"
              />
            </Paper>
            <div className="playlist-tags">
              <span>Playlist</span>
              <h1 className="playlist-title">Músicas Curtidas</h1>
              <div className="playlist-tag-etc">
                <span className="playlist-owner-name">{user.display_name}</span>
                <span className="playlist-tag">{`${likedMusics.total} músicas`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="display-playlist-main">
          <div
            class="background-fade"
            style={{ backgroundColor: "rgb(80, 56, 160)" }}
          ></div>
          <div className="contentSpacing">
            <div className="playlist-tracks-columns-header">
              <span className="index">#</span>
              <span className="title">Título</span>
              <span className="album">Álbum</span>
              <span className="added-at">Adicionada em</span>
              <i className="duration">
                <BiTime />
              </i>
              <Divider light />
            </div>
            <div className="display-playlist-tracks">
              <ul>
                {likedMusics?.items?.map((trackObject) => {
                  const min = Math.floor(
                    (trackObject.track.duration_ms / 1000 / 60) << 0
                  );
                  const sec = Math.floor(
                    (trackObject.track.duration_ms / 1000) % 60
                  );
                  const g2 = new Date(trackObject.added_at);
                  const [Hovering, setHovering] = useState(false);

                  return (
                    <li
                      key={`track ${
                        likedMusics.items.indexOf(trackObject) + 1
                      }`}
                    >
                      <a
                        href="#"
                        className="track"
                        onMouseEnter={() => {
                          setHovering(true);
                        }}
                        onMouseLeave={() => {
                          setHovering(false);
                        }}
                      >
                        <span className="track-number">
                          {Hovering ? (
                            <i style={{ fontSize: "1.2rem" }}>
                              <BiPlay />
                            </i>
                          ) : (
                            likedMusics.items.indexOf(trackObject) + 1
                          )}
                        </span>
                        <a className="track-title">
                          <img
                            src={trackObject.track.album.images[0].url}
                            alt={trackObject.track.name}
                            className="track-img"
                          />
                          <span>{trackObject.track.name}</span>
                        </a>
                        <a href="#" className="track-album">
                          <span>{trackObject.track.album.name}</span>
                        </a>
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
                                    : `há ${
                                        g1.getMinutes() - g2.getMinutes()
                                      } dias`
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
      </div>
    </div>
  );
};

export default LikedMusics;
