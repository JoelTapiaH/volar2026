import React from "react";
import styles from "@/styles/Home/S02.module.css";
import example from "@/assets/images/metric_icon.png";


import cloud from "@/assets/images/cloud_hero.png";


export default function S02_Map() {
    return (
      <div className={styles.container}>
        
<h1>
NUESTRO IMPACTO
</h1>
<div className={styles.metrics}>
<div className={styles.metric}>
  <img src={example.src} />
  <div className={styles.detail}>
  <div className={styles.number} style={{color:'var(--darkPurple)'}}>75%</div>
  <div className={styles.description} style={{color:'var(--red)'}}>LOREM IPSUM<br/>DES QUIS</div>
  </div>
</div>

<div className={styles.metric}>
  <img src={example.src} />
  <div className={styles.detail}>
  <div className={styles.number} style={{color:'var(--darkPurple)'}}>205</div>
  <div className={styles.description} style={{color:'var(--red)'}}>LOREM IPSUM<br/>DES QUIS</div>
  </div>
</div>

<div className={styles.metric} >
  <img src={example.src}/>
  <div className={styles.detail}>
  <div className={styles.number} style={{color:'var(--darkPurple)'}}>55%</div>
  <div className={styles.description} style={{color:'var(--red)'}}>LOREM IPSUM<br/>DES QUIS</div>
  </div>
</div>

</div>
      </div>
    );
  }
  