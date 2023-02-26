import React from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../animated";
import Link from "next/link";
import Image from "next/image";

const projectList = [
  {
    image: "/images/english-cafe.png",
    name: "English Cafe",
    status: "",
    description: "A place to learn english + the gospel.",
    skills: "TypeScript, NextJS, GraphQL, Tailwind",
    page: "https://english-cafe.vercel.app/",
    github: "https://github.com/Ntarasiuk/english-cafe",
  },
  {
    image: "/images/teachersource.png",
    name: "Teacher Source",
    status: "",
    description: "A Storehouse of Childrens and Youth Ministry Curriculum.",
    skills: "TypeScript, NextJS, GraphQL, Material UI",
    page: "https://www.teachersource.life/",
    github: "https://github.com/Ntarasiuk/wol-teacher-source",
  },
  {
    image: "/images/randomquiz.png",
    name: "Random Quiz",
    status: "",
    description: "A quiz page built with NextJS and a quiz api.",
    skills: "NextJS, Tailwind, API",
    page: "https://random-quiz-nine.vercel.app/",
    github: "https://github.com/MrProtsyuk/random-quiz",
  },
  {
    image: "/images/chaty.png",
    name: "Chaty AI",
    status: "",
    description: "Chat GPT made from home!",
    skills: "ReactJS, NodeJS, API",
    page: "https://chaty-ai.vercel.app/",
    github: "https://github.com/MrProtsyuk/Chaty-AI",
  },
  {
    image: "/images/solarsystem-project.png",
    name: "Solar System Model",
    status: "",
    description:
      "A fun little project I made with unity assets and some C# scripts.",
    skills: "Unity, Unity assets, C#",
    page: "https://mrprotsyuk.itch.io/solarsystem",
    github: "",
  },
];

export default function projects() {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 lg:px-48 px-16 "
    >
      <div className="mt-32 mb-12 m-4 p-1 font-archivo overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl text-center md:text-right md:text-7xl"
        >
          My Projects
        </m.h1>
      </div>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center items-center pb-10 overflow-hidden py-1"
      >
        {projectList.map((project, index) => (
          <m.div
            variants={item}
            key={project.name}
            className="flex flex-row lg:flex-wrap items-center m-4 p-4 w-72 sm:w-96 lg:w-5/12 bg-white text-black border rounded-lg hover:drop-shadow-xl"
          >
            <div className="flex flex-col">
              <div className="bg-white">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.page}
                  className="text-lg xl:text-2xl"
                >
                  <Image
                    src={project.image}
                    alt="Project image"
                    width={200}
                    height={200}
                    className="object-cover w-72 sm:w-96"
                  />
                </Link>
              </div>
              <Link
                href={project.page}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg xl:text-2xl m-1 hover:text-violet-400"
              >
                {project.name}
              </Link>
              <p className="text-sm sm:text-lg m-1">{project.status}</p>
              <p className="text-sm sm:text-lg m-1">{project.description}</p>
              <p className="text-sm sm:text-lg m-1">{project.skills}</p>
              <Link href="/" className="m-1">
                Github
              </Link>
            </div>
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
}
