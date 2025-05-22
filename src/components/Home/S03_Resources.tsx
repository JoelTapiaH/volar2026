import React, { useState } from "react";
import styles from "@/styles/Home/S03.module.css";
import useContentful from "../../../utils/useContentful";
import { TextBreak } from "../global/Text_break";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function S03_Resources() {
  const { data } = useContentful({ id: HomeID });

  if (!data || !(data as any).fields) {
    return null;
  }

  const { 
    homeTitleS03, 
    homeTextS03P1, 
    homeTextS03P2, 
    homeTextS03P3, 
    homeColorSmall, 
    homeColorMedium, 
    homeColorBig, 
    homeIconSmall, 
    homeIconMedium, 
    homeIconBig,
    homeButtonS03, 
  } = (data as any).fields;
  
  const smallIcon = `https:${homeIconSmall.fields.file.url}`;
  const mediumIcon = `https:${homeIconMedium.fields.file.url}`;
  const bigIcon = `https:${homeIconBig.fields.file.url}`;
  const textButton = data.fields.homeButtonS03.fields.buttonText;
  const colorButton = data.fields.homeButtonS03.fields.buttonColor;

  return (
    <div className={styles.container}>
      <h1><TextBreak>{homeTitleS03}</TextBreak></h1>
      <div className={styles.content}>
        <div className={styles.message}>
          <div className={styles.text}>
            <div className={styles.text1}>{homeTextS03P1}</div>
            <div className={styles.text2}>{homeTextS03P2}</div>
            <div className={styles.text3}>{homeTextS03P3}</div>
          </div>
          <a className={styles.styledButton} style={{backgroundColor:colorButton}} href="#"><span>{textButton}</span></a>
        </div>

        <div>
            <div className={styles.animation}          >
            <div 
              style={{backgroundColor:homeColorSmall}} 
              className={styles.small}
            >
              <img src={smallIcon} alt="Small icon"/>
            </div>

            <div 
              style={{backgroundColor:homeColorMedium}} 
              className={styles.medium}
            >
              <img src={mediumIcon} alt="Medium icon"/>
            </div>

            <div 
              style={{backgroundColor:homeColorBig}} 
              className={styles.large}
            >
              <img src={bigIcon} alt="Large icon"/>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}