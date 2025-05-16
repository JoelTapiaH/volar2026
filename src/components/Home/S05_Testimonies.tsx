import React from "react";
import styles from "@/styles/Home/S05.module.css";
import useContentful from "../../../utils/useContentful";

import example from "@/assets/images/example_testimony.png";
import { SliderTestimonials } from "./Testimonials";

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
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
      {homeTitleS06}
      </h1>
        <SliderTestimonials/>  
    </div>
    

    </>
  );
}
