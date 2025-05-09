import React from "react";
import styles from "@/styles/Home/S05.module.css";

import example from "@/assets/images/example_testimony.png";
import logo from "@/assets/images/LOGO_VOLAR.png";
import Image from "next/image";



export default function S05_Testimonies() {

  return (
    <div className={styles.container}>
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
      TESTIMONIOS LOREM
      </h1>

      <div className={styles.testimonies}>

      <div className={styles.testimony}>
      <img src={example.src} />
        <div className={styles.content}>
            <div className={styles.text}>
            “Lorem significa un ectium de lorem,<br/> una <div style={{color:'#242365', fontWeight:'700'}}>doctium</div> tanto axius como<br/>
            una mectum <div style={{color:'#242365', fontWeight:'700'}}>atims</div>  como<br/>
            profesional”
            </div>
            <div className={styles.name}>NOMBRE LOREM IPSUM</div>
            <div className={styles.job}>Cargo Lorem Ipsum Etcium</div>
            </div>
      </div>

      </div>
    </div>
  );
}
