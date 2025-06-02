import React from "react";
import styles from "@/styles/Us/Alliances.module.css";
import { TextBreak } from "../global/Text_break";

interface BoxesProps {
text: string;
color: string;
link: string;
buttonText: string;
buttonColor: string;
}

const AllianceBox: React.FC<BoxesProps> = ({ text, color, link, buttonText, buttonColor}) => {
    
  const rgbaColor = `${color}CC`;
  return(
      <div className={styles.box} style={{backgroundColor:color}}>
                <div
                className={styles.text}>
                  <TextBreak>{text}</TextBreak></div>
                <a className={styles.styledButton} style={{backgroundColor:buttonColor}} href={link} target="_blank">
                    <span>{buttonText}</span>
                </a>
      </div>
);
  };

  export default AllianceBox;