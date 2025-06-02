import React from "react";
import styles from "@/styles/Projects/projects.module.css";

interface ImageProps {
  img: string;
  text: string;

}

const ImageItem: React.FC<ImageProps> = ({  img, text}) => {
    
  return(
      <div className={styles.imgItem}>
        <img src={img} />
        <div className={styles.imgItemTitle}>{text}</div>

      </div>
);
  };

  export default ImageItem;