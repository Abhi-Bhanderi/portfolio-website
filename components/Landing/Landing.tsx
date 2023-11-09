"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp, slideUpText, downArrowVariant } from "./animation";
import { motion, useInView } from "framer-motion";

import downArrow from "@/public/images/down-arrow.svg";
import CreativityText from "../CreativityText";

const secondRowText = ["of", "Creativity"];

export default function Landing() {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div className={styles.mainText}>
        <div style={{ overflow: "hidden" }} className={styles.firstRow}>
          <motion.h2
            variants={slideUpText}
            custom={1}
            key={1}
            initial="initial"
            animate="enter"
          >
            Perfection
          </motion.h2>

          <div style={{ overflow: "hidden" }}>
            <motion.p
              variants={slideUpText}
              custom={1.3}
              key={2}
              initial="initial"
              animate="enter"
            >
              CURRENTLY AVAILABLE FOR <br /> FREELANCE WORLDWIDE
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.p
              variants={slideUpText}
              custom={1.36}
              key={2}
              initial="initial"
              animate="enter"
            >
              MY LOCAL TIME <br /> 16:37 GMT (+5:30)
            </motion.p>
          </div>
          <div></div>
        </div>

        <div style={{ overflow: "hidden" }} className={styles.secondRow}>
          <motion.div
            className={styles.downArrow}
            variants={downArrowVariant}
            initial="initial"
            animate="enter"
          >
            <Image src={downArrow} width={120} height={120} alt="Down Arrow" />
          </motion.div>

          <motion.h2
            variants={slideUpText}
            custom={1.1}
            initial="initial"
            animate="enter"
          >
            Of
          </motion.h2>

          <CreativityText width="1000" height="320" />
        </div>
      </div>
      {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div> */}
    </motion.main>
  );
}
