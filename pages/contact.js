import React from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../animated";

export default function contact() {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full bg-slate-900 lg:px-48 px-16 justify-center items-center"
    >
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center items-center w-80 sm:w-4/6 bg-slate-200 border rounded-sm p-4 mt-40 mb-12 text-slate-700"
      >
        <form className="flex flex-col overflow-hidden px-1">
          <m.label className="flex flex-col p-4 m-4 w-auto" variants={item}>
            Name:
            <input placeholder="Your Name!"></input>
          </m.label>
          <m.label
            className="flex flex-col p-4 m-4 w-72 sm:w-5/12"
            variants={item}
          >
            Email:
            <input placeholder="Your Email"></input>
          </m.label>
          <m.label
            className="flex flex-col p-4 m-4 w-72 sm:w-5/12"
            variants={item}
          >
            Message:
            <textarea placeholder="Leave a message!"></textarea>
          </m.label>
          <m.div className=" justify-center">
            <button
              className="p-4 m-2 bg-slate-700 text-white hover:bg-gray-500"
              variants={item}
            >
              Send!
            </button>
          </m.div>
        </form>
      </m.div>
    </m.div>
  );
}
