import React from "react";
import styles from "@/styles/Home/Testimonial.module.css";
import BoldUnderlineContentful from "../../../utils/BoldUnderlineContentful";

interface TestimonialProps {
  color: string;
  img: string;
  text: string;
  position: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ color, img, text, position, author }) => {
    
  const rgbaColor = `${color}CC`;
  return(
      <div className={styles.container}>

        <div className={styles.testimonialContainer} style={{backgroundColor: rgbaColor}}>

          <div className={styles.richText}>

            <p className={styles.richTextSon}>{BoldUnderlineContentful(text)}</p>

            </div>
          
          <div className={styles.info}>
              <img src={img} />
              
              <div style={{fontWeight:600}}>
                    <div>{author}</div>
                    <div style={{color:"#113245"}}>{position}</div>
              </div>

          </div>

        </div>

      </div>
);
  };

  export default Testimonial;