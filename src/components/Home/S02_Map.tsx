import React from "react";
import styles from "@/styles/Home/S02.module.css";
import useContentful from "../../../utils/useContentful";

import example from "@/assets/images/metric_icon.png";
import mapa from "@/assets/images/mapax.png";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function S02_Map() {
    const { data } = useContentful({ id: HomeID });

    if (!data || !(data as any).fields) {
      return null;
    }

    const { homeTitleS02, homeMetrics } = (data as any).fields;
    console.log('sx', data)
    return (
      <div className={styles.container}>
        
          <h1>
          {homeTitleS02}
          </h1>
          <div className={styles.metrics}>

          {homeMetrics &&
          homeMetrics.map ((metric:any, index:number)=>{
            const number= metric.fields.metricNumber;
            const text= metric.fields.metricText;
            const colorText= metric.fields.metricColorText;
            const colorNumber= metric.fields.metricColorNumber;
            return(
              <div className={styles.metric} key={index}>
                  <img src={example.src}/>
                  <div className={styles.detail}>
                  <div className={styles.number} style={{color:colorNumber}}>{number}</div>
                  <div className={styles.description} style={{color:colorText}}>{text}</div>
                  </div>
              </div>
            )
          })
          }
      </div>
                    <img src={mapa.src}/>

      </div>
    );
  }
  