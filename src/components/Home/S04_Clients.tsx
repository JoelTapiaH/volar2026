import React from "react";
import styles from "@/styles/Home/S04.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import example1 from "@/assets/images/example_logo1.png";
import example2 from "@/assets/images/example_logo2.png";
import example3 from "@/assets/images/example_logo3.png";
import logo from "@/assets/images/LOGO_VOLAR.png";
import Image from "next/image";

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
  const logos = [example1, example2, example3];

  return (
    <div className={styles.container}>
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
        CONFIAN EN
        <img src={logo.src} style={{ width: "200px", marginLeft: "1em" }} />
      </h1>

      <div className={styles.clients}>
        <div className={styles.carousel1}>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
            {logos.map((img, index) => (
              <div key={index} style={{ padding: "1rem" }}>
                <Image
                  src={img}
                  alt={`Logo ${index + 1}`}
                  width={150}
                  height={80}
                  objectFit="contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
