import React from "react";
import RippleUI from "./RippleUI";
import FlickeringRoundUI from "./FlickeringRoundUI";
import { cn } from "@/lib/utils";
import Image from "next/image";

import aiAlgoImg from "@/public/about/ai-algorithms.jpeg";
import dataImg from "@/public/about/data-handling.jpeg";
import seamlessImg from "@/public/about/seamless.jpeg";
import solutionsImg from "@/public/about/solutions.jpeg";
import { motion } from "framer-motion";

const HowWeWork = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full relative min-h-screen flex flex-col items-center justify-start">
      <div className="w-full h-[800px]">
        <RippleUI />
      </div>

      <div className="w-full absolute px-10 max-[900px]:px-5 top-[15%] flex flex-col items-center justify-center gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInUp}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <p className="z-10 text-center text-5xl font-medium">How We Work</p>
          <p className="text-white/80 text-center">
            Our platform is purpose-built to provide exceptional AI-driven
            solutions for your unique business needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-[80%] max-xl:w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-center justify-center gap-5"
        >
          <GridSection
            heading={"Advanced AI Algorithms"}
            text={
              "Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs."
            }
            classes="order-1"
            image={aiAlgoImg}
          />
          <GridSection
            heading={"Secure Data Handling"}
            text={
              "We prioritize your data security with state-of-the-art encryption and strict privacy protocols, ensuring your information remains confidential."
            }
            classes="order-2 max-md:order-3"
            // classes="max-md:row-span-2 max-sm:row-span-1 h-full max-sm:h-[350px] order-2"
            image={dataImg}
          />
          <GridSection
            heading={"Seamless Integration"}
            text={
              "Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation."
            }
            classes="row-span-2 h-full max-sm:h-[350px] overflow-hidden order-3 max-md:order-2"
            flicker={true}
            image={seamlessImg}
          />
          <GridSection
            heading={"Customizable solutions"}
            text={
              "Tailor our AI services to your specific needs with flexible customization options, allowing you to get the most out of your platform"
            }
            classes="col-span-2 max-sm:col-span-1 order-4"
            image={solutionsImg}
          />
        </motion.div>
      </div>
    </div>
  );
};

const GridSection = ({
  heading,
  text,
  classes,
  flicker,
  image,
}: {
  heading: any;
  text: any;
  classes?: string;
  flicker?: boolean;
  image: any;
}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={item}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "bg-gradient-to-b from-gray-800/80 via-gray-800/60 to-primary/20 relative w-full h-[350px] rounded-2xl hover:bg-primary/40 transition-all duration-300 group overflow-hidden",
        "flex flex-col items-center justify-start",
        classes
      )}
    >
      <GridText heading={heading} text={text} />
      {flicker && <FlickeringRoundUI />}

      <div
        className={cn(
          "w-[80%] h-[80%] absolute top-[60%] transition-all duration-300",
          `${
            flicker
              ? "top-[30%] -right-6 sm:group-hover:-right-4 max-sm:top-[60%] max-sm:group-hover:top-[55%] max-sm:right-8"
              : "group-hover:top-[55%]"
          }`
        )}
      >
        <Image
          className="rounded-2xl w-full h-full object-cover opacity-95"
          src={image}
          height={1000}
          width={1000}
          alt="about img"
        />
      </div>
    </motion.div>
  );
};

const GridText = ({ heading, text }: { heading: any; text: any }) => {
  return (
    <div className="absolute w-full p-7  flex flex-col items-start justify-center gap-6 tracking-wider ">
      <div className="text-primary ">{heading}</div>
      <div className=" text-sm font-thin group-hover:font-light transition-all duration-300">
        {text}
      </div>
    </div>
  );
};

export default HowWeWork;
