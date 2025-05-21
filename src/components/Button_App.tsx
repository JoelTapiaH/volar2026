import React from "react";
import styles from "@/styles/buttonApp.module.css";
import { TextBreak } from "./Text_break";

interface TestimonialProps {
  color: string;
  img: string;
  text: string;
  link: string;
  show: boolean;
}

const Button_App: React.FC<TestimonialProps> = ({ color, img, text, link, show }) => {
    
  const rgbaColor = `${color}CC`;
  return show && (

        <a className={styles.container} style={{backgroundColor: rgbaColor}} href={link}>
          <div className={styles.Text}>
            <TextBreak>
              {text}
            </TextBreak>
            </div>
              <img src={img} />
              
        </a>

);
  };

  export default Button_App;