import React from "react";
import styles from "@/styles/Home/S04.module.css";
import useContentful from "../../../utils/useContentful";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import logo from "@/assets/images/LOGO_VOLAR.png";
import Image from "next/image";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function S04_Clients() {
  const { data } = useContentful({ id: HomeID });

    if (!data || !(data as any).fields) {
      return null;
    }

    const { homeTitleS04,  homeLogos1, homeLogos2 } = (data as any).fields;
  return (
    <div className={styles.container}>
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
        {homeTitleS04}
        <img src={logo.src} style={{ width: "200px", marginLeft: "1em" }} />
      </h1>

      <div className={styles.clients}>
        <div className={styles.carousel1}>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
          {homeLogos1 &&
              homeLogos1.map((img: any, index: number) => {
                const imgUrl = img.fields.file.url;
                return (
                  <div key={index}>
                    <img
                      src={imgUrl}
                      alt={`Imagen ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "220px",
                        borderRadius: "30px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
