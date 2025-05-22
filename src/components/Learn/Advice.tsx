import React from "react";
import styles from "@/styles/Learn/Advice.module.css";

interface AdviceProps {
  text: string;
  age: string;
  tag: string;
  img: string;
  color: string;
}

const Advice: React.FC<AdviceProps> = ({ text, age, tag, img, color }) => {
    
  const rgbaColor = `${color}CC`;
  return(
    <div className={styles.advice}>
    <a target="_blank" href="#">
      <div className={styles.container} style={{backgroundColor: rgbaColor}}>
        <img src={img} className={styles.image}/>
        <div className={styles.content} >
          <div className={styles.age}>
            {age}
          </div>
          <div className={styles.tag}>
            {tag}
          </div>
          <div className={styles.title}>
          {text}
          </div>
          
        </div>

      </div>
    </a>
    </div>
);
  };

  export default Advice;