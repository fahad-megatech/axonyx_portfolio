"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const MagicParticles = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <div className=" flex w-full overflow-hidden ">
      <Particles
        className="absolute inset-0"
        size={0.8}
        quantity={120}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default MagicParticles;
