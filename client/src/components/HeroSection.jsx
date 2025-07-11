import React from "react";
import { heroText } from "../constants/heroContent";
import ActionButtons from "./ActionButtons";

const HeroSection = () => {
    const {heading,description} = heroText;
  return (
    <div className="relative z-10 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-10">
      {/* Left - Text */}
      <div className="text-center md:text-left w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-snug">
          {heading}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>
    
    <ActionButtons />
      
    </div>
  );
};

export default HeroSection;
