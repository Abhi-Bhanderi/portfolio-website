import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";
import MagButton from "@/components/utils/Magnetic/MagButton";

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <MagButton>
        <Link href={href}>
          <motion.div
            variants={scale}
            animate={isActive ? "open" : "closed"}
            className={styles.indicator}
          ></motion.div>

          {title}
        </Link>
      </MagButton>
    </motion.div>
  );
}
