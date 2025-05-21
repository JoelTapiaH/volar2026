import React from "react";
import styles from "@/styles/Banner.module.css";
import app from "@/assets/images/app_img.png";
import android from "@/assets/images/android.png";
import apple from "@/assets/images/apple.png";
import useContentful from "../../utils/useContentful";
import { TextBreak } from "./Text_break";
import { ButtonsApp } from "./Buttons_App";

const BannerID = "4UFkxHy5Crj6Fyz64M9rH2";


export default function Banner_app() {
  const { data } = useContentful({ id: BannerID });

    if (!data || !(data as any).fields) {
      return null;
    }
    console.log ('ASOX', data)
    const { bannerText, bannerImg } = (data as any).fields;
    const image = data.fields.bannerImg.fields.file.url;
    return (
      <div className={styles.container}>
        
        <img src={image} />

      <div className={styles.item}>
        <div className={styles.title} style={{color:'var(--turq)'}}><TextBreak>{bannerText}</TextBreak></div>
        <ButtonsApp/>
      </div>


      </div>
    );
  }
  