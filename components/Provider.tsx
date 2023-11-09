"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import PreLoader from "./Preloader/PreLoader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Lenis from "@studio-freight/lenis";
type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main ref={scrollRef}>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {children}
    </main>
  );
};

export default Provider;
