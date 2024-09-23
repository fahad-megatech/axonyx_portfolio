import React from "react";

import logoIcon from "@/public/logos/AXO6.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FlickeringRoundUI from "./FlickeringRoundUI";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeInUp}
      className="w-full h-full flex flex-col items-center justify-center gap-10 my-36"
    >
      <div className="pointer-events-none text-center flex flex-col items-center justify-center gap-5 mb-10">
        <div className="whitespace-pre-wrap bg-gradient-to-r from-gray-300/50 via-gray-300 to-gray-300/50 bg-clip-text text-center font-semibold leading-none text-transparent mb-5">
          Who We Are
        </div>
        <div className="text-4xl font-semibold text-white/80">
          Empowering Innovation Through Code
        </div>
        <div className="font-extralight text-white/80 text-justify w-full md:w-[70%]">
          We approach every challenge with a fresh perspective, ensuring that
          our clients are always ahead of the curve in the digital landscape.
        </div>
      </div>

      {/* Glass morphism design here */}
      <div
        className={cn(
          "overflow-hidden h-[220px] max-lg:h-[250px] max-md:h-[400px] max-sm:h-[500px] relative",
          "w-full md:w-[80%] flex items-center justify-center",
          "rounded-2xl",
          "bg-gradient-to-b from-gray-800/80 via-gray-800/60 to-primary/20",
          "shadow  shadow-primary  transition-all duration-300"
        )}
      >
        <div className="w-full absolute p-10 max-sm:p-2 flex max-sm:flex-col items-center justify-center gap-9 tracking-wider">
          <div className="w-[20%] flex items-center justify-center">
            <Image
              className="w-[100px]"
              src={logoIcon}
              height={500}
              width={500}
              alt="logo icon"
            />
          </div>
          <div className="w-[80%] flex flex-col items-start justify-center gap-3">
            <div className="text-lg">AXONYX</div>
            <div className="text-sm font-extralight leading-[25px]">
              Axonyx is a software house where creative minds and cutting-edge
              technology collide. We believe in designing digital experiences
              that resonate, ensuring every solution is as dynamic as it is
              functional. From startups to enterprises, we treat every project
              as our own, committed to delivering excellence through
              collaboration and expertise.
            </div>
          </div>
        </div>

        <div className="w-full h-full absolute -right-[70%] top-[-10%]">
          <FlickeringRoundUI />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
