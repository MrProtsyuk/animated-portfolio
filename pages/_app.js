import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="relative h-screen overflow-hidden py-24 px-12 lg:px-48">
      <Navbar />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
