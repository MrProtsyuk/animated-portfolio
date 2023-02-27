import React, { useRef as UseRef } from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../animated";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function contact() {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zflqw0p",
        "template_fka4a3f",
        form.current,
        "A-t-GPOsbzlJdwFAr"
      )
      .then(
        (result) => {
          toast.success("Email Sent! I will reach out as soon as I can!");
          console.log(result.text);
        },
        (error) => {
          toast.error(
            "Hmm 🤔, something went wrong. Shoot me a personal email, protsyukmark@gmail.com"
          );
          console.log(error.text);
        }
      );
  };
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full min-h-screen bg-slate-900 lg:px-48 px-16 justify-center items-center"
    >
      <div className="mt-32 mb-12 m-4 p-1 font-archivo overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl text-center sm:text-right lg:text-7xl text-white"
        >
          Lets get in touch
        </m.h1>
      </div>
      <div className="flex justify-center items-center">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex justify-center items-center w-80 sm:w-4/6 bg-white border rounded-sm p-2 mt-30 mb-12 text-slate-500"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center items-center gap-4 p-2 m-2 sm:p-4 sm:m-4 mb-8 w-80 sm:w-7/12 h-5/6 drop-shadow-2xl"
          >
            <p className="text-center text-xl">
              Just Fill Out The Form Below ⬇️
            </p>
            <input
              placeholder="Your Email"
              required="Hey you forgot about this one 😴"
              name="from_email"
              className="p-2 w-72 lg:w-96 border rounded-md bg-white"
            ></input>
            <input
              placeholder="Your Name"
              required="Hey you forgot about this one too 🤔"
              name="from_name"
              className="p-2 w-72 lg:w-96 border rounded-md bg-white"
            ></input>
            <textarea
              placeholder="Add a message!"
              required="I gotta know what you wanna say dude 🫣"
              name="message"
              className="p-2 w-72 lg:w-96 h-40 border rounded-md bg-white"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="p-2 w-24 border rounded-md border-slate-500 text-white bg-gray-600 hover:bg-gray-500"
            >
              Submit
            </button>
          </form>
        </m.div>
      </div>
    </m.div>
  );
}
