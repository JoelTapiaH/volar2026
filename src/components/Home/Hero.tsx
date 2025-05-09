import React from "react";
import styles from "@/styles/Home/hero.module.css";
import example from "@/assets/images/example_img1.png";
import cloud from "@/assets/images/cloud_hero.png";


export default function Hero() {
    return (
      <div className={styles.container}>
        <div className={styles.cloud}>
        <img src={cloud.src} />
        <button>¡Entérate más!</button>
        </div>

        <img src={example.src} />

      </div>
    );
  }
  