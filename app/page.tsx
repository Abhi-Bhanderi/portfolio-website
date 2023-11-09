"use client";
import Contact from "@/components/Contact/Contact";
import Description from "@/components/Description/Description";
import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import SidingImages from "@/components/SlidingImages/SidingImages";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div>
      <Landing />
      <Description />
      <SidingImages />
      <Projects />
      <Contact />
    </div>
  );
}
