import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <div className="bg-black ">
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route}  {...pageProps} />;
      </AnimatePresence>
    </div>
  )
}
