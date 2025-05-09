import React from "react";
import styles from "@/styles/Home/S03.module.css";
import example from "@/assets/images/s03_img.png";


import cloud from "@/assets/images/cloud_hero.png";


export default function S03_Resources() {
    return (
      <div className={styles.container}>
        
<h1>
¡Aprende cómo promover<br/>
un desarrollo integral en las niñas y niños!</h1>
<div className={styles.content}>
<div className={styles.message}>
  <div className={styles.text}> ¡ EXPLORA<br/>NUESTROS<br/>RECURSOS !</div>
  <button style={{backgroundColor:'var(--darkPurple)'}}>¡ AQUÍ !</button>
</div>
<div className={styles.animation}>
<img src={example.src}/>
</div>
</div>
      </div>
    );
  }
  