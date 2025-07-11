import React from 'react';
import ghostAnimation from "../assets/Ghost.json";
import { Player } from "@lottiefiles/react-lottie-player";

const GhostBackground = () => {
  return (
    <Player
      autoplay
      loop
      src={ghostAnimation}
      className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none"
    />
  );
};

export default GhostBackground;
