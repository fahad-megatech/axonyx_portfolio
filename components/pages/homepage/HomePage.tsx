"use client";

import React from "react";

import "./css/style.css";

import Partners from "./components/Partners";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./components/HeroSection";
import HowWeWork from "./components/HowWeWork";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import Consult from "./components/Consult";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="relative w-full overflow-hidden bg-backgroud-dark text-white ">
      <Navbar />

      <HeroSection />

      <section
        id="learnMore"
        className="
          w-full h-[1300px] max-md:h-[1800px] max-sm:h-[2200px] min-h-screen
          flex flex-col items-center justify-start
          bg-gradient-to-b from-backgroud-dark to-backgroud-lite"
      >
        <Partners />
        <HowWeWork />
      </section>

      <section
        id="about"
        className="
          w-full h-full px-10 max-md:px-5 min-h-screen
          flex flex-col items-start justify-center
          bg-backgroud-lite"
      >
        <AboutUs />
      </section>

      <section
        id="services"
        className="
          w-full h-full px-10 max-md:px-5 min-h-screen
          flex flex-col items-start justify-center
          bg-backgroud-lite"
      >
        <Services />
      </section>

      <section
        id="team"
        className="
          w-full h-full px-10 max-md:px-5 min-h-screen
          flex flex-col items-start justify-center
          bg-backgroud-lite"
      >
        <OurTeam />
      </section>

      <section
        id="testimonials"
        className="
          w-full h-full px-10 max-md:px-5 min-h-screen
          flex flex-col items-start justify-center
          bg-backgroud-lite"
      >
        {/* <div className="testimonials absolute h-full w-full left-0 opacity-10"></div> */}

        <Testimonials />
      </section>

      <section
        id="consult"
        className="
          w-full h-full px-10 max-md:px-5 min-h-screen
          flex flex-col items-start justify-center
          bg-gradient-to-b from-backgroud-lite to-backgroud-dark"
      >
        {/* <div className="consult absolute h-[800px] w-full -right-[30%] opacity-10"></div> */}

        <Consult />
      </section>

      <section
        className="
          w-full h-full px-10 max-md:px-5
          flex flex-col items-start justify-center
          bg-backgroud-dark"
      >
        {/* <div className="footer z-10 absolute h-[800px] w-full -left-[50%] -bottom-15 opacity-10"></div> */}

        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
