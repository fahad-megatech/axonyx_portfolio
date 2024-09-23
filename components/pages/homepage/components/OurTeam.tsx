import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import dev from "@/public/team/developer.jpg";

const devDetails = [
  {
    name: "Fahad Ghaffar",
    desc: "A software developer with a strong passion for full-stack development. Fahad excels at creating robust, scalable applications and has a knack for problem-solving and innovative solutions.",
    image: dev,
  },
  {
    name: "Musab Tahir",
    desc: "An enthusiastic software developer who enjoys working with modern technologies. Musab is skilled in building user-centric applications, focusing on seamless user experience.",
    image: dev,
  },
  {
    name: "Nouman Nawaz",
    desc: "A dedicated software developer with a deep understanding of backend systems and architecture. Nouman is passionate about creating secure and optimized applications.",
    image: dev,
  },
];

const OurTeam = () => {
  const scaleUp = {
    hidden: { opacity: 0.7, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={scaleUp}
      className="w-full h-full flex flex-col items-center justify-center gap-10 my-36"
    >
      <div className="pointer-events-none text-center flex flex-col items-center justify-center gap-5 mb-10">
        <div className="whitespace-pre-wrap bg-gradient-to-r from-gray-300/50 via-gray-300 to-gray-300/50 bg-clip-text text-center font-semibold leading-none text-transparent mb-5">
          Meet Our Team
        </div>
        <div className="text-4xl font-semibold text-white/80">
          The Minds Behind the Innovation
        </div>
        <div className="font-extralight text-white/80 text-justify w-full md:w-[70%]">
          Our team at Axonyx is a group of passionate, creative, and skilled
          professionals who bring diverse expertise to the table. Together, we
          drive innovation and craft solutions that redefine what's possible in
          the digital world. Get to know the people who make it all happen!
        </div>
      </div>

      <div className="w-full grid grid-cols-[repeat(3,250px)] max-md:grid-cols-[repeat(1,250px)] gap-5 items-center justify-center">
        {devDetails.map((item, index) => (
          <DevImage
            image={item.image}
            name={item.name}
            desc={item.desc}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const DevImage = ({
  image,
  name,
  desc,
  key,
}: {
  image: any;
  name: any;
  desc: any;
  key: any;
}) => {
  return (
    <div className="relative w-full h-full rounded-2xl">
      <Image
        key={key}
        className="w-full h-full rounded-2xl grayscale"
        src={dev}
        height={500}
        width={500}
        alt="team image"
      />

      <div className="absolute inset-0 p-3 tracking-wider flex flex-col items-start justify-start gap-4 bg-backgroud-lite/70 z-10 rounded-2xl h-full w-full">
        <div className="text-white font-semibold text-lg mt-[50%] max-sm:mt-[50%]">
          {name}
        </div>
        <div className="text-white text-sm font-extralight tracking-widest">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
