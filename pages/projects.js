import React from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../animated";

export default function projects() {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 lg:px-48 px-16 "
    ></m.div>
  );
}
