import styles from "../styles/Index.module.css";
import Hero from "@/components/Home/Hero";
import S01_Items from "@/components/Home/S01_Items";
import S02_Map from "@/components/Home/S02_Map";
import S03_Resources from "@/components/Home/S03_Resources";
import S04_Clients from "@/components/Home/S04_Clients";
import Banner_app from "@/components/global/BannerApp/Banner_app";
import S05_Testimonies from "@/components/Home/S05_Testimonies";
import line from "@/assets/images/division.png";


export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <img src={line.src} style={{width:'100%'}}/>
      <S01_Items/>
      <img src={line.src} style={{width:'100%'}}/>
      <S02_Map/>
      <img src={line.src} style={{width:'100%'}}/>
      <S03_Resources/>
      <img src={line.src} style={{width:'100%'}}/>
      <S04_Clients/>
      <img src={line.src} style={{width:'100%'}}/>
      <Banner_app/>
      <img src={line.src} style={{width:'100%'}}/>
      <S05_Testimonies/> 
      <img src={line.src} style={{width:'100%'}}/>
  </div>
  );
}
