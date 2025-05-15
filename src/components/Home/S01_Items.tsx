import React from "react";
import styles from "@/styles/Home/S01.module.css";
import useContentful from "../../../utils/useContentful";


import example from "@/assets/images/item_icon.png";
import example2 from "@/assets/images/item_icon2.png";
import example3 from "@/assets/images/item_icon3.png";


const HomeID = "1DOSrCFPzlUZug4YeXOkcs";


export default function S01_Items() {
    const { data } = useContentful({ id: HomeID });

  // Verificar si los datos están disponibles usando `any`
  if (!data || !(data as any).fields) {
    return null;
  }

  // Acceder a los campos usando `any`
  const { homeTitleS01 } = (data as any).fields;
    return (
      <div className={styles.container}>
        
<h1>
{homeTitleS01}
</h1>
<div className={styles.items}>
<div className={styles.item}>
  <div className={styles.icon} style={{backgroundColor:'var(--red)'}}>
  <img src={example.src} />
  </div>
  <div className={styles.title} style={{color:'var(--red)'}}>Apego seguro</div>
  <div className={styles.description}>Aenean tempor neque ipsum, quis<br/>dictum libero consectetur non.</div>
</div>

<div className={styles.item}>
  <div className={styles.icon} style={{backgroundColor:'var(--yellow)'}}>
  <img src={example2.src} />
  </div>
  <div className={styles.title} style={{color:'var(--yellow)'}}>Apego seguro</div>
  <div className={styles.description}>Aenean tempor neque ipsum, quis<br/>dictum libero consectetur non.</div>
</div>

<div className={styles.item} >
  <div className={styles.icon} style={{backgroundColor:'var(--purple)'}}>
  <img src={example3.src} />
  </div>
  <div className={styles.title} style={{color:'var(--purple)'}}>Apego seguro</div>
  <div className={styles.description}>Aenean tempor neque ipsum, quis<br/>dictum libero consectetur non.</div>
</div>

</div>
      </div>
    );
  }
  