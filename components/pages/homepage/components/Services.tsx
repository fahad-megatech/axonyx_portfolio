import { cn } from "@/lib/utils";
import {
  Bot,
  Boxes,
  Brain,
  Brush,
  ChartArea,
  ChartCandlestick,
  Fingerprint,
  FolderCode,
  MonitorCog,
  PanelsTopLeft,
  ServerCog,
  TabletSmartphone,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const serviceItems = [
  {
    label: "Development",
    links: [
      {
        label: "Software Development",
        href: "#",
        text: "lorem",
      },
      {
        label: "Web Development",
        href: "#",
        text: "lorem",
      },
      {
        label: "App Development",
        href: "#",
        text: "lorem",
      },
    ],
  },
  {
    label: "Artificial Intelligence",
    links: [
      {
        label: "AI Chatbot",
        href: "#",
        text: "lorem",
      },
      {
        label: "NLP Automation",
        href: "#",
        text: "lorem",
      },
      {
        label: "Predictive Analytics",
        href: "#",
        text: "lorem",
      },
    ],
  },
  {
    label: "Cloud Computing",
    links: [
      {
        label: "Infrastructure Services",
        href: "#",
        text: "lorem",
      },
      {
        label: "DevOps & Automation",
        href: "#",
        text: "lorem",
      },
      {
        label: "Application Development",
        href: "#",
        text: "lorem",
      },
    ],
  },
  {
    label: "Others",
    links: [
      {
        label: "UI/UX",
        href: "#",
        text: "lorem",
      },
      {
        label: "Cyber Security",
        href: "#",
        text: "lorem",
      },
      {
        label: "Digital Marketing",
        href: "#",
        text: "lorem",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 my-36">
      <div className="pointer-events-none text-center flex flex-col items-center justify-center gap-5 mb-10">
        <div className="whitespace-pre-wrap bg-gradient-to-r from-gray-300/50 via-gray-300 to-gray-300/50 bg-clip-text text-center font-semibold leading-none text-transparent mb-5">
          Our Services
        </div>
        <div className="text-4xl font-semibold text-white/80">
          Innovative Technology, Tailored for You
        </div>
        <div className="font-extralight text-white/80 text-justify w-full md:w-[70%]">
          Our services are built around one key principle: every business is
          unique. That's why at Axonyx, we tailor every solution to fit your
          specific needs. Whether it’s software development, UX/UI design, or
          enterprise solutions, we are your trusted partner for cutting-edge,
          tailored technology.
        </div>
      </div>

      {/* Services grid */}
      <GridSection>
        {serviceItems.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-7 w-full text-sm"
          >
            <div className="opacity-70">{item?.label}</div>

            {item?.links.map((link, index) => (
              <ServiceItem key={index} link={link} />
            ))}
          </div>
        ))}
      </GridSection>
      <GridSection>
        {serviceItems.slice(2, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-7 w-full text-sm"
          >
            <div className="opacity-70">{item?.label}</div>

            {item?.links.map((link, index) => (
              <ServiceItem key={index} link={link} />
            ))}
          </div>
        ))}
      </GridSection>
    </div>
  );
};

const GridSection = ({ children }: { children: React.ReactNode }) => {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "w-fit px-5 py-5 rounded-xl",
        "grid grid-cols-[repeat(2,270px)] gap-16 max-sm:grid-cols-[repeat(1,300px)]",
        "bg-gradient-to-b from-gray-800/80 via-gray-800/60 to-primary/20",
        "shadow hover:shadow-md shadow-primary hover:shadow-primary transition-all duration-300"
      )}
    >
      {children}
    </motion.div>
  );
};

const ServiceItem = ({ link, key }: { link: any; key: any }) => {
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
      className="flex items-center justify-start gap-2 group"
    >
      {/* Icon */}
      <ServiceIcon label={link.label} />

      <span className="flex flex-col w-full opacity-80 group-hover:opacity-100 transition-all duration-300">
        <span>{link?.label}</span>
        <span className="text-gray-lite">{link?.text}</span>
      </span>
    </motion.div>
  );
};

const ServiceIcon = ({ label }: { label: string }) => {
  return (
    <span
      className="
        bg-primary bg-opacity-80
        px-2 py-2
        rounded-lg border-[1px] border-gray-lite border-opacity-20

        group-hover:bg-gray-100 transition-all duration-300
        "
    >
      {label.includes("Software") && (
        <FolderCode className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("Web") && (
        <PanelsTopLeft className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("App Dev") && (
        <TabletSmartphone className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("AI Chat") && (
        <Bot className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("NLP") && (
        <Brain className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("Analytics") && (
        <ChartArea className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("Infra") && (
        <ServerCog className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("DevOps") && (
        <MonitorCog className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("Application") && (
        <Boxes className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("UI") && (
        <Brush className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("Security") && (
        <Fingerprint className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
      {label.includes("Marketing") && (
        <ChartCandlestick className="size-5 w-fit group-hover:text-gray-secondary transition-all duration-300" />
      )}
    </span>
  );
};

export default Services;
