import React from "react";
import styles from "@/styles/Home/S05.module.css";
import useContentful from "../../../utils/useContentful";
import { SliderTestimonials } from "./S05/Testimonials";
import { TextBreak } from "../global/Text_break";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function S05_Testimonies() {
  const { data } = useContentful({ id: HomeID });

    if (!data || !(data as any).fields) {
      return null;
    }

    const { homeTitleS06 } = (data as any).fields;
  return (
    <>
    <div className={styles.container}>
      <h1>
        <TextBreak>{homeTitleS06}</TextBreak>
      
      </h1>
        <SliderTestimonials/>  
    </div>
    

    </>
  );
}
