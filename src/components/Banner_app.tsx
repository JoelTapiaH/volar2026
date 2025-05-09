import React from "react";
import styles from "@/styles/Banner.module.css";
import app from "@/assets/images/app_img.png";
import android from "@/assets/images/android.png";
import apple from "@/assets/images/apple.png";


import cloud from "@/assets/images/cloud_hero.png";


export default function Banner_app() {
    return (
      <div className={styles.container}>
        
        <img src={app.src} />

      <div className={styles.item}>
        <div className={styles.title} style={{color:'var(--turq)'}}>¡Vuela con nosotros,<br/>descarga nuestra App!</div>
        <div className={styles.buttons}>
        <button style={{backgroundColor:'var(--darkPurple)', maxHeight:'70px', width:'180px',fontSize:'15px'}}><div>Versión<br/>Android</div> <img src={android.src} style={{marginLeft:'1em'}}/></button>
        <button style={{backgroundColor:'var(--darkPurple)', maxHeight:'70px', width:'180px',fontSize:'15px'}}><div>Versión<br/>Apple</div> <img src={apple.src} style={{marginLeft:'1em'}}/></button>
        </div>
      </div>


      </div>
    );
  }
  