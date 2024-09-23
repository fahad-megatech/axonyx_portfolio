import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Loader, Send } from "lucide-react";
import { motion } from "framer-motion";

import { sendEmail } from "@/lib/mail";

import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Consult = () => {
  const [clientMsg, setClientMsg] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: any) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleErrors = () => {
    let isErrorFound = false;

    if (!clientMsg.name) {
      setErrors((prev) => ({ ...prev, name: true }));

      isErrorFound = true;
    } else {
      setErrors((prev) => ({ ...prev, name: false }));

      isErrorFound = false;
    }

    if (!clientMsg.email || !validateEmail(clientMsg.email)) {
      setErrors((prev) => ({ ...prev, email: true }));

      isErrorFound = true;
    } else {
      setErrors((prev) => ({ ...prev, email: false }));

      isErrorFound = false;
    }

    if (!clientMsg.message) {
      setErrors((prev) => ({ ...prev, message: true }));

      isErrorFound = true;
    } else {
      setErrors((prev) => ({ ...prev, message: false }));

      isErrorFound = false;
    }

    return isErrorFound;
  };

  const handleClientMsg = (e: any) => {
    console.log("handleClientMsg");

    let name = e.target.name;
    let value = e.target.value;

    setClientMsg((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async () => {
    console.log("handleSubmit");

    setIsLoading(true);

    if (handleErrors()) {
      setIsLoading(false);

      return;
    }

    try {
      let res = await sendEmail(clientMsg.message, {
        email: clientMsg.email,
        name: clientMsg.name,
      });

      if (res.status === 200) {
        toast.success("Your message is sent.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        setClientMsg({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log("Errors", error);

      toast.error("Your message was not sent, please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }

    setIsLoading(false);
  };

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
      className="z-10 w-full h-full flex flex-col items-center justify-center gap-10 my-36"
    >
      <div className="pointer-events-none text-center flex flex-col items-center justify-center gap-5 mb-10">
        <div className="whitespace-pre-wrap bg-gradient-to-r from-gray-300/50 via-gray-300 to-gray-300/50 bg-clip-text text-center font-semibold leading-none text-transparent mb-5">
          Consult Now
        </div>
        <div className="text-4xl font-semibold text-white/80">
          Consult Now and Bring Your Vision to Life
        </div>
        <div className="font-extralight text-white/80 text-justify w-full md:w-[70%]">
          Ready to take the next step in your digital journey? Our experts at
          Axonyx are here to guide you every step of the way.
        </div>
      </div>

      <div className="w-full md:w-[60%] flex flex-col items-center justify-start gap-5">
        <Input
          onChange={handleClientMsg}
          value={clientMsg.name}
          name="name"
          size={"sm"}
          type="text"
          label="Full Name"
          variant="flat"
          isInvalid={errors.name}
          errorMessage="Please enter your name"
        />
        <Input
          onChange={handleClientMsg}
          value={clientMsg.email}
          name="email"
          size={"sm"}
          type="email"
          label="Email"
          variant="flat"
          isInvalid={errors.email}
          errorMessage="Please enter a valid email"
        />
        <Textarea
          onChange={handleClientMsg}
          value={clientMsg.message}
          name="message"
          label="Message"
          placeholder="Please enter your message/query"
          variant="flat"
          isInvalid={errors.message}
          errorMessage="Message cannot be empty"
        />

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full rounded-2xl py-3 bg-primary/50 hover:bg-primary/80 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3
          ${isLoading && "pointer-events-none opacity-50"}
          `}
        >
          {!isLoading ? (
            <>
              <span className="tracking-wider uppercase ">Submit</span>
              <Send />
            </>
          ) : (
            <Loader className="animate-spin" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Consult;
