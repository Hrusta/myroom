import React, { useState } from "react";
import useSound from "use-sound";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillVolumeDownFill } from "react-icons/bs";
import { BsFillVolumeMuteFill } from "react-icons/bs";

import "./SoundCom.css";

const AudioPlayer = ({ audio, title }) => {
  const [volume, setVolume] = useState(0.5);
  const [play, { stop }] = useSound(audio, {
    volume: volume,
    loop: true,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (isPlaying) {
      setIsPlaying(false);
      stop();
    } else {
      setIsPlaying(true);
      play();
    }
  }

  function handleVolumeChange(event) {
    setVolume(parseFloat(event.target.value));
  }

  return (
    <div className="SoundContainer">
      <div className="SoundCom">
        <p>{title}</p>
        <div onClick={handlePlay}>
          {isPlaying ? (
            <BsFillPauseFill className="play" />
          ) : (
            <BsFillPlayFill className="play" />
          )}
        </div>
      </div>

      <div className="volume-control">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        {volume > 0.01 ? (
          <BsFillVolumeDownFill className="play" />
        ) : (
          <BsFillVolumeMuteFill className="play" />
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
