import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="relative h-screen py-20 px-12 lg:px-24">
      <Toaster />
      <Navbar />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
