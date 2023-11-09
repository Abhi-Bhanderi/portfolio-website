"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

const images = [
  "wix.jpg",
  "panda.jpg",
  "powell.jpg",
  "maven.jpg",
  "google.jpg",
  "funny.jpg",
  "funny.jpg",
  "funny.jpg",
  "funny.jpg",
  "funny.jpg",
  "c2.jpg",
  "decimal.jpg",
];

export default function SidingImages() {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });
  const gallery = useRef(null);

  // const x1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  // const x2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  // return (
  //   <div ref={container} className={styles.slidingImages}>
  //     <motion.div style={{ x: x1 }} className={styles.slider}>
  //       {slider1.map((project, index) => {
  //         return (
  //           <div
  //             key={`slider1_${index}`}
  //             className={styles.project}
  //             style={{ backgroundColor: project.color }}
  //           >
  //             <div className={styles.imageContainer}>
  //               <Image
  //                 fill={true}
  //                 alt={"image"}
  //                 src={`/images/${project.src}`}
  //               />
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </motion.div>
  //     <motion.div style={{ x: x2 }} className={styles.slider}>
  //       {slider2.map((project, index) => {
  //         return (
  //           <div
  //             key={`slider2_${index}`}
  //             className={styles.project}
  //             style={{ backgroundColor: project.color }}
  //           >
  //             <div key={index} className={styles.imageContainer}>
  //               <Image
  //                 fill={true}
  //                 alt={"image"}
  //                 src={`/images/${project.src}`}
  //               />
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </motion.div>
  //
  //   </div>
  // );
  return (
    <>
      <main className={styles.main}>
        <div className={styles.spacer}></div>
        <div ref={gallery} className={styles.gallery}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </main>
      <div className={styles.spacer}></div>
    </>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
