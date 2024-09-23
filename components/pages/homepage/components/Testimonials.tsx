import Image from "next/image";
import React from "react";

import comma from "@/public/inverted-commas.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Khan",
    comment:
      "Axonyx delivered exceptional service! Their attention to detail and commitment to excellence helped bring our project to life beyond expectations.",
  },
  {
    name: "John Smith",
    comment:
      "Working with Axonyx was a fantastic experience. Their team was highly professional, innovative, and always responsive to our needs.",
  },
  {
    name: "Priya Patel",
    comment:
      "Axonyx went above and beyond to create a custom solution tailored perfectly to our business. Their creativity and dedication are unmatched.",
  },
  {
    name: "David Johnson",
    comment:
      "The Axonyx team feels like an extension of our own. They were with us at every step, ensuring our project’s success with their expert guidance and technical prowess.",
  },
  {
    name: "Fatima Noor",
    comment:
      "We couldn’t have asked for a better development partner than Axonyx. Their expertise and passion made our product stand out in a competitive market.",
  },
  {
    name: "Emily Brown",
    comment:
      "Axonyx took our vision and turned it into reality with innovative solutions and seamless execution. Highly recommend their services!",
  },
  {
    name: "Rahul Verma",
    comment:
      "From start to finish, Axonyx impressed us with their professionalism and technical skill. They created a solution that met all our business needs.",
  },
  {
    name: "Sarah Miller",
    comment:
      "Axonyx provided us with the perfect blend of creativity and technical know-how. Their solutions are cutting-edge, and the results speak for themselves.",
  },
  {
    name: "Ali Abbas",
    comment:
      "We were blown away by the quality of service provided by Axonyx. They delivered on time, with precision, and exceeded our expectations in every way.",
  },
  {
    name: "Sophia Clark",
    comment:
      "Axonyx transformed our concept into a powerful, scalable solution. Their dedication to delivering excellence is evident in every detail of their work.",
  },
];

const Testimonials = () => {
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
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 my-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInUp}
        className="pointer-events-none text-center flex flex-col items-center justify-center gap-5 mb-10"
      >
        <div className="whitespace-pre-wrap bg-gradient-to-r from-gray-300/50 via-gray-300 to-gray-300/50 bg-clip-text text-center font-semibold leading-none text-transparent mb-5">
          What Our Clients Say
        </div>
        <div className="text-4xl font-semibold text-white/80">
          Trusted by Innovators Worldwide
        </div>
        <div className="font-extralight text-white/80 text-justify w-full md:w-[70%]">
          At Axonyx, client satisfaction is our top priority. We’re proud to
          have partnered with forward-thinking businesses and individuals across
          the globe. Their success stories are a reflection of our commitment to
          excellence. Discover how we've helped our clients bring their visions
          to life with innovative solutions and dedicated support. Here's what
          they have to say about their experience with Axonyx!
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-fit mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div className="grid gap-4">
          {testimonials.slice(0, 3).map((item, index) => (
            <TestimonialsGrid
              key={index}
              name={item.name}
              comment={item.comment}
            />
          ))}
        </div>
        <div className="grid gap-4">
          {testimonials.slice(3, 6).map((item, index) => (
            <TestimonialsGrid
              key={index}
              name={item.name}
              comment={item.comment}
            />
          ))}
        </div>
        <div className="grid gap-4">
          {testimonials.slice(6, 9).map((item, index) => (
            <TestimonialsGrid
              key={index}
              name={item.name}
              comment={item.comment}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TestimonialsGrid = ({
  key,
  name,
  comment,
}: {
  key: any;
  name: any;
  comment: any;
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
      key={key}
      className={cn(
        "h-auto w-[250px] rounded-2xl  text-white/80 tracking-wider text-center p-5 uppercase",
        " flex flex-col items-center justify-center",
        "bg-gradient-to-b from-gray-800/80 via-gray-800/60 to-primary/20"
      )}
    >
      <div className="w-full flex items-center justify-center mt-5 mb-10">
        <Image
          className="grayscale w-[30px]"
          src={comma}
          height={100}
          width={100}
          alt="comma image"
        />
      </div>
      <div className="font-semibold mb-5">{name}</div>
      <div className="mb-5">{comment}</div>
    </motion.div>
  );
};

export default Testimonials;
