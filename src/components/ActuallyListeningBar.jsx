import React, { useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import "../css/ActuallyListeningBar.css";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeMuteRoundedIcon from "@mui/icons-material/VolumeMuteRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const ActuallyListeningBar = () => {
  const [iconMute, setIconMute] = useState(false);
  const [value, setValue] = useState(30);
  const [iconPlay, setIconPlay] = useState(true);
  const [songTimeValue, setSongTimeValue] = useState(0);
  const [maxTimeSong, setMaxTimeSong] = useState(100);

  const handleSongTimeChange = (event, newValue) => {
    setSongTimeValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIconMute(false);
  };

  return (
    <div className="listening-bar">
      <div className="listening-bar-container">
        <p>Actual music playing:</p>
        <div className="controller-menu">
          <Stack
            className="buttons"
            direction="row"
            spacing={3}
            alignItems="center"
          >
            <a href="#" className="skip-button">
              <SkipPreviousIcon />
            </a>
            <a
              href="#"
              className="play-pause-button"
              onClick={() => {
                iconPlay ? setIconPlay(false) : setIconPlay(true);
              }}
            >
              {iconPlay ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
            </a>
            <a href="#" className="skip-button">
              <SkipNextIcon />
            </a>
          </Stack>
          <Stack
            className="song-progress-bar"
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <p className="actual-time-song">{songTimeValue}</p>
            <Slider
              size="small"
              sx={{ color: "white" }}
              max={maxTimeSong}
              value={songTimeValue}
              onChange={handleSongTimeChange}
              aria-label="Default"
              valueLabelDisplay="off"
            />
            <p className="full-time-song">{maxTimeSong}</p>
          </Stack>
        </div>
        <div className="volume-bar">
          <Stack direction="row" spacing={2} alignItems="center">
            <a
              href="#"
              style={{ color: "white" }}
              onClick={() => {
                iconMute ? setIconMute(false) : setIconMute(true);
              }}
            >
              {!iconMute &&
                (value == 0 ? (
                  <VolumeMuteRoundedIcon />
                ) : value >= 50 ? (
                  <VolumeUpRoundedIcon />
                ) : (
                  <VolumeDownRoundedIcon />
                ))}
              {iconMute && <VolumeOffRoundedIcon />}
            </a>
            <Slider
              size="small"
              sx={{ color: "white" }}
              value={value}
              onChange={handleChange}
              aria-label="Volume"
              valueLabelDisplay="auto"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ActuallyListeningBar;
