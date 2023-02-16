import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex text-lg md:text-2xl lg:text-3xl 2xl:text-7xl font-medium max-w-[1536px] justify-center md:justify-between items-center z-20">
      <ul className="flex gap-4 md:gap-12">
        <Link href="/">
          <li
            className={`cursor-pointer ${
              router.pathname == "/" ? "underline" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`cursor-pointer ${
              router.pathname == "/about" ? "underline" : ""
            }`}
          >
            About
          </li>
        </Link>
        <Link href="/projects">
          <li
            className={`cursor-pointer ${
              router.pathname == "/projects" ? "underline" : ""
            }`}
          >
            Projects
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`cursor-pointer ${
              router.pathname == "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
