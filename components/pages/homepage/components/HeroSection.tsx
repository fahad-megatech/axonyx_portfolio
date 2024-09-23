"use client";

import React from "react";

import "../css/style.css";

import Particles from "./Particles";
import HeroRight from "./HeroRght";
import HeroLeft from "./HeroLeft";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen max-md:h-fit text-white">
      <Particles />

      <div
        className="
        w-full flex items-center justify-center
        max-md:flex-col max-md:gap5
      "
      >
        {/* Section One */}
        <div className="w-1/2 max-md:w-full h-full px-10 max-md:px-5 max-md:mt-[15%] max-sm:mt-[30%]">
          <HeroLeft />
        </div>

        {/* Section two */}
        <div className="w-1/2 max-md:w-full h-full">
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
