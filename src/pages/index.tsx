import Head from "next/head";
import styles from "../styles/Index.module.css";
import Hero from "@/components/Home/Hero";
import S01_Items from "@/components/Home/S01_Items";
import S02_Map from "@/components/Home/S02_Map";
import S03_Resources from "@/components/Home/S03_Resources";


export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <S01_Items/>
      <S02_Map/>
      <S03_Resources/>
  </div>
  );
}
