import React from "react";
import styles from "@/styles/Us/TimeLine.module.css";

interface HitoProps {
text: string;
color: string;
number: string;
year: string;
icon: string;
}

const TimeHito: React.FC<HitoProps> = ({ text, color, number, year, icon}) => {
    
  return(
      <div className={styles.hito} style={{color:color}}>
        <img src={icon}/>
        <div className={styles.order}>{number}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.year}>{year}</div>
    </div>
);
  };

  export default TimeHito;