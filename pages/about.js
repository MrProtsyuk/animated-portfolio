import React from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../animated";
import Image from "next/image";

export default function about() {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 min-h-screen w-full bg-gradient-to-b from-slate-700 to-slate-800 lg:px-48 px-16 "
    >
      <div className="mt-32 mb-12 m-4 p-1 font-archivo overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl text-center sm:text-right lg:text-7xl"
        >
          About Me
        </m.h1>
      </div>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center items-center w-72 sm:w-auto bg-slate-200 border rounded-sm p-16 mb-12 text-slate-700"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="overflow-hidden px-1">
            <m.div
              variants={item}
              className="m-2 w-72 sm:w-80 2xl:w-2/12 border border-transparent rounded-md overflow-hidden"
            >
              <Image
                width={400}
                height={200}
                src="/images/coverpic.jpeg"
                alt="mark protsyuk cover image"
                className=""
              ></Image>
            </m.div>
          </div>
          <div className="overflow-hidden py-1">
            <m.p
              variants={item}
              className="text-center lg:text-right text-lg lg:text-2xl m-2 w-72 sm:w-8/12 border border-transparent rounded-md"
            >
              Hello! My name is Mark Protsyuk and I am a Software Engineer from
              Sacramento, CA! I am a recent UC Davis Bootcamp graduate. I have
              had some local intern experience and now I am excited to work in a
              professional enviornment. You can view some of the projects I have
              worked on below. Some activities that I like to do in my free time
              are snowboarding, playing music, and climbing. These activities
              really help me to push myself into trying new things regardless of
              the difficulty I may encounter.
            </m.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="">
            <m.div
              variants={item}
              className="w-72 sm:w-80 2xl:w-2/12 border border-transparent rounded-md overflow-hidden"
            >
              <Image
                width={400}
                height={200}
                src="/images/daviscertification.png"
                alt="mark protsyuk cover image"
                className=""
              />
            </m.div>
          </div>
          <div className="overflow-hidden py-1">
            <m.p
              variants={item}
              className="text-center lg:text-right text-xl lg:text-2xl m-2 w-72 sm:w-8/12 border border-transparent rounded-md"
            >
              As stated above, I recently graduatated from the UC Davis Coding
              Bootcamp as of June 2022. I have also completed a course provided
              by Meta on Front-End Development. Besides courses, I also have
              Internship experience from a local company based out of
              Sacramento, CA called Dev Catapult. Working for Dev Catapult has
              taught me many things and is where I learned to sharpend my React
              skills.
            </m.p>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}
