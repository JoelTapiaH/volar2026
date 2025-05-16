import React from "react";
import styles from "@/styles/Home/S04.module.css";
import useContentful from "../../../utils/useContentful";
import "react-multi-carousel/lib/styles.css";

import logo from "@/assets/images/LOGO_VOLAR.png";
import Image from "next/image";
import Clients1 from "./Clients1";
import Clients2 from "./Clients2";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";


export default function S04_Clients() {
  const { data } = useContentful({ id: HomeID });

  if (!data || !(data as any).fields) {
      return null;
    }

  const { homeTitleS04 } = data.fields;

  return (
    <div className={styles.container}>
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
        {homeTitleS04}
        <Image 
          src={logo} 
          alt="Logo Volar" 
          width={200}
          height={80}
          style={{ marginLeft: "1em" }}
        />
      </h1>

      <Clients1/>
      <Clients2/>

    </div>
  );
}
