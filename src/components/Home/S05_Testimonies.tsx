import React from "react";
import styles from "@/styles/Home/S05.module.css";
import useContentful from "../../../utils/useContentful";

import example from "@/assets/images/example_testimony.png";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function S05_Testimonies() {
  const { data } = useContentful({ id: HomeID });

    if (!data || !(data as any).fields) {
      return null;
    }

    const { homeTitleS06 } = (data as any).fields;
  return (
    <div className={styles.container}>
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
      {homeTitleS06}
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
