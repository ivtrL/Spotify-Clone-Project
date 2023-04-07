import React from "react";
import "../css/Playlists.css";

const Playlists = () => {
  const playlists = [
    "Badass Villain Vibes!",
    "Party Hits 2023🎉💥",
    "Gaming Music 2023🎮Best of Phonk | House | Trap | Future Bass |",
    "Dubstep | EDM Popular Songs",
    "GYM & WORKOUT - ENERGY BOOST - PHONK 2023",
    "Ultra Gaming",
    "Lofi hip hop radio to relax/study/sleep 2023",
    "Gaming Playlist",
    "This Is Matuê",
    "Next Level",
    "Amanda + vtrL",
    "PENSANDO DMS",
    "AS QUENTES DA AMALEE",
    "Hype!",
    "This Is Set It Off",
    "This Is Alec Benjamin",
    "Shivers",
    "Hollow Knight OST",
    "The Artists Union",
    "Faixas do Shazam",
    "Trap Nation",
    "Bloodborne OST",
    "Top Brasil",
    "Samba",
    "Descobertas da Semana",
  ];

  return (
    <div className="playlists">
      <div className="playlists-container">
        <li>
          {playlists.map((item) => {
            return (
              <a href="#" className="playlist-name">
                {item}
              </a>
            );
          })}
        </li>
      </div>
    </div>
  );
};

export default Playlists;
