"use client";
import * as React from "react";
import useContentful from "../../../utils/useContentful";
import Button_App from "./BannerApp/Button_App";
import styles from "@/styles/banner/buttonApp.module.css";

const BannerID = "4UFkxHy5Crj6Fyz64M9rH2";

interface ButtoAppProps {
  id?: string;
}

interface IconImg {
  fields: {
    file: {
      url: string;
    };
  };
}

interface ButtoApp {
  fields: {
  color: string;
  img: IconImg;
  text: string;
  link: string;
  show: boolean;
  };
}

interface Button_AppData {
  fields: {
    bannerButtons: ButtoApp[];
  };
}


export const ButtonsApp = ({ id }: ButtoAppProps) => {
  const { data } = useContentful({ id: BannerID });

  if (!data || !data.fields) {
    return null;
  }

  const { bannerButtons } = data.fields;

  return (
    <section id={id} className={styles.buttons}>
            {bannerButtons &&
              bannerButtons.map((card:any, index:number) => {
                const imgUrl = card.fields.buttonImg.fields.file.url;
                const text = card.fields.buttonText;
                return (
                  <Button_App
                    key={index}
                    color={card.fields.buttonColor}
                    img={imgUrl}
                    text={text}
                    link={card.fields.buttonLink}
                    show={card.fields.buttonShow}
                  />
                );
              })}
    </section>
  );
};