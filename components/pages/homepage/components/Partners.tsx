"use client";

import React from "react";
import Marquee from "@/components/magicui/marquee";

import danuta from "../../../../public/partners/Danuta-01.svg";
import datadabble from "../../../../public/partners/Datadabble-01.svg";
import mhs from "../../../../public/partners/MHS-01.svg";
import argos from "../../../../public/partners/argos.svg";
import aws from "../../../../public/partners/aws-01.svg";
import bellissima from "../../../../public/partners/bellissima-01.svg";
import femea from "../../../../public/partners/femea-01.svg";
import tightenup from "../../../../public/partners/tightenup-01.svg";

import Image from "next/image";
import { cn } from "@/lib/utils";

const clients = [
  bellissima,
  datadabble,
  argos,
  mhs,
  aws,
  tightenup,
  femea,
  danuta,
];

const ImageCard = ({ image }: { image: any }) => {
  console.log("image", image);
  return (
    <figure
      className={cn(
        "flex items-center justify-center",
        "cursor-pointer overflow-hidden rounded-xl opacity-70 hover:opacity-100 transition-all duration-300 hover:brightness-110 max-md:opacity-100 mr-20"
      )}
    >
      <Image
        height={500}
        width={500}
        alt="header-image"
        src={image}
        className={` ${
          image.src.includes("aws") ||
          image.src.includes("argos") ||
          image.src.includes("MHS")
            ? "w-[70px]"
            : "w-[180px]"
        }`}
      />
    </figure>
  );
};

const Partners = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden max-md:w-screen mt-24">
      <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-gray-300/50 via-gray-300 to-gray-300/50 bg-clip-text text-center font-semibold leading-none text-transparent">
        TRUSTED BY TEAMS FROM AROUND THE WORLD
      </div>

      <Marquee pauseOnHover className="[--duration:40s]">
        {clients.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </Marquee>

      <div className="md:hidden pointer-events-none absolute  left-0 h-full w-[8%] bg-gradient-to-r from-backgroud-dark "></div>
      <div className="md:hidden pointer-events-none absolute  right-0 h-full w-[8%] bg-gradient-to-l from-backgroud-dark "></div>
    </div>
  );
};

export default Partners;
