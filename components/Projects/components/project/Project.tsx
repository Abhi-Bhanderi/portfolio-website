"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

type Props = {
  index: number;
  project: {
    title: string;
    src: string;
    color: string;
  };
  manageModal: any;
};

export default function index({ index, project, manageModal }: Props) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <div className={styles.projectImage}>
        <Image
          src={`/images/${project.src}`}
          alt={project.title}
          width={900}
          height={450}
        />
      </div>
      <div className={styles.projectBody}>
        <h2>{project.title}</h2>
        <p>Design & Development</p>
      </div>
    </div>
  );
}
