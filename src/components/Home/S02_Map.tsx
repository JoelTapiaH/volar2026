import React from "react";
import styles from "@/styles/Home/S02.module.css";
import useContentful from "../../../utils/useContentful";
import { TextBreak } from "../Text_break";
import InteractiveSVGButtons from "./Map";

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
            <TextBreak>{homeTitleS02}</TextBreak>
          
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
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 32 32" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.checkIcon}
                      >
                        {/* Círculo (sin animación) */}
                        <path 
                          d="M30.0396 15.802C30.0396 23.6214 23.7007 29.9604 15.8812 29.9604C8.06172 29.9604 1.72278 23.6214 1.72278 15.802C1.72278 7.98249 8.06172 1.64355 15.8812 1.64355C18.1026 1.64355 20.2045 2.15513 22.0755 3.06689" 
                          stroke="#00B0B4" 
                          strokeWidth="3.30363" 
                          strokeLinecap="round"
                        />
                        
                        {/* Check animao y sin animar */}
                        <path 
                          d="M27.3849 6.95296L14.9963 19.3416L11.4567 15.802" 
                          stroke="#00B0B4" 
                          strokeWidth="3.30363" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={styles.animatedCheck}
                        />
                          <path 
                          d="M27.3849 6.95296L14.9963 19.3416L11.4567 15.802" 
                          stroke="#00B0B4" 
                          strokeWidth="3.30363" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={styles.staticCheck}

                        />
                      </svg>

                  <div className={styles.detail}>
                  <div className={styles.number} style={{color:colorNumber}}>{number}</div>
                  <div className={styles.description} style={{color:colorText}}><TextBreak>{text}</TextBreak></div>
                  </div>
              </div>
            )
          })
          }
      </div>
      <InteractiveSVGButtons/>

      </div>
    );
  }
  