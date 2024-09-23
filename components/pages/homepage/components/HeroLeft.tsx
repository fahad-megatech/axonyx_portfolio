"use client";

import React, { useEffect, useState } from "react";

import TextTyping from "./TextTyping";
import HeaderText from "./HeaderText.";
import ShimmerBtn from "@/components/UI/button/ShimerBtn";
import { ArrowRight, ChevronRight, MoveRight } from "lucide-react";
import TypingAnimation from "@/components/magicui/typing-animation";

const HeroLeft = () => {
  const [showHelloHand, setShowHelloHand] = useState(false);

  useEffect(() => {
    const typingDuration = 50 * "Hello World    ".length;

    const timeout = setTimeout(() => {
      setShowHelloHand(true);
    }, typingDuration);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center justify-start gap-2">
          <TypingAnimation
            className="text-[35px] max-[900px]:text-[30px] font-bold text-white text-left"
            text="Hello World "
            duration={50}
          />
          {showHelloHand && (
            <div className="text-[35px] max-[900px]:text-[30px] minsm text-left waving-hand -mt-6">
              👋
            </div>
          )}
        </div>
        <div className="flex items-center justify-start gap-2">
          <TypingAnimation
            className="text-[35px] max-[900px]:text-[30px] font-bold text-white text-left"
            text="Welcome to Endless Possibilities"
            duration={50}
          />
        </div>
      </div>

      <div className="w-full">
        <HeaderText />
      </div>
    </div>
  );
};

export default HeroLeft;
