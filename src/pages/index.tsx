import Head from "next/head";
import styles from "../styles/Index.module.css";
import Hero from "@/components/Home/Hero";
import S01_Items from "@/components/Home/S01_Items";
import S02_Map from "@/components/Home/S02_Map";
import S03_Resources from "@/components/Home/S03_Resources";
import S04_Clients from "@/components/Home/S04_Clients";
import Banner_app from "@/components/Banner_app";
import S05_Testimonies from "@/components/Home/S05_Testimonies";


export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <S01_Items/>
      <S02_Map/>
      <S03_Resources/>
      <S04_Clients/>
      <Banner_app/>
      <S05_Testimonies/> 
  </div>
  );
}
