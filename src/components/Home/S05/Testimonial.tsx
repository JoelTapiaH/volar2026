import React from "react";
import styles from "@/styles/Home/Testimonial.module.css";
import PurpleContentful from "../../../../utils/PurpleContentful";

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
                    <p className={styles.richTextSon}>{PurpleContentful(text)}</p>
          </div>
          
          <div className={styles.info}>
                    <div>{author}</div>
                    <div className={styles.position}>{position}</div>
          </div>

        <img src={img} />
        </div>

      </div>
);
  };

  export default Testimonial;