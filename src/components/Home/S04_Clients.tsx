import React from "react";
import styles from "@/styles/Home/S04.module.css";
import useContentful from "../../../utils/useContentful";
import "react-multi-carousel/lib/styles.css";

import logo from "@/assets/images/LOGO_VOLAR.png";
import Image from "next/image";
import Clients1 from "./S04/Clients1";
import Clients2 from "./S04/Clients2";
import Clients3 from "./S04/Clients3";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";


export default function S04_Clients() {
  const { data } = useContentful({ id: HomeID });

  if (!data || !(data as any).fields) {
      return null;
    }

  const { homeTitleS04 } = data.fields;

  return (
    <div className={styles.container}>
      <h1>
        {homeTitleS04}
        <Image 
          src={logo} 
          alt="Logo Volar" 
          width={200}
          height={80}
          className={styles.image}
        />
      </h1>

      <Clients1/>
      <Clients2/>
      <Clients3/>

    </div>
  );
}
