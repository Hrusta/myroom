import React from "react";
import rain from "./mp3s/rain.mp3";
import river from "./mp3s/river.mp3";
import book from "./mp3s/book.mp3";
import fire from "./mp3s/fire.mp3";
import keyboard from "./mp3s/keyboard.mp3";
import "./SoundCom.css";
import AudioPlayer from "./AudioPlayer";

const SoundCom = () => {
  return (
    <div>
      <AudioPlayer audio={rain} title="Rainy Weather" />
      <AudioPlayer audio={river} title="River Sound" />
      <AudioPlayer audio={book} title="Turning Pages" />
      <AudioPlayer audio={fire} title="Fireplace Crackling" />
      <AudioPlayer audio={keyboard} title="Typing on Keyboard" />
    </div>
  );
};

export default SoundCom;
