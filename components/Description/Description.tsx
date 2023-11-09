"use client";
import styles from "./style.module.scss";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import RoundButton from "../utils/RoundButton/RoundButton";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  // const isInView = useInView(description);

  const { scrollYProgress } = useScroll({
    target: description,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={`word_${index}`} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  // animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          // animate={isInView ? "open" : "closed"}
          className={styles.sideText}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <motion.div>
          <RoundButton className={styles.button}>
            <p>About me</p>
          </RoundButton>
        </motion.div>
      </div>
    </div>
  );
}
