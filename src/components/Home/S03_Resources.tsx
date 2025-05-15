import React from "react";
import styles from "@/styles/Home/S03.module.css";
import useContentful from "../../../utils/useContentful";

import example from "@/assets/images/s03_img.png";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function S03_Resources() {
  const { data } = useContentful({ id: HomeID });

    if (!data || !(data as any).fields) {
      return null;
    }

    const { homeTitleS03, homeTextS03P1, homeTextS03P2, homeTextS03P3 } = (data as any).fields;
    return (
      <div className={styles.container}>
        
<h1>
{homeTitleS03}</h1>
<div className={styles.content}>
<div className={styles.message}>
  <div className={styles.text}>{homeTextS03P1}<br/>{homeTextS03P2}<br/>{homeTextS03P3}</div>
  <button style={{backgroundColor:'var(--darkPurple)'}}>¡ AQUÍ !</button>
</div>
<div className={styles.animation}>
<img src={example.src}/>
</div>
</div>
      </div>
    );
  }
  