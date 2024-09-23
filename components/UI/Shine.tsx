import ShineBorder from "@/components/magicui/shine-border";
import React from "react";

const Shine = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShineBorder
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background "
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span> */}
      {children}
    </ShineBorder>
  );
};

export default Shine;
