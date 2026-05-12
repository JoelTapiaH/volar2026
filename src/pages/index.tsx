import Head from "next/head";
import styles from "../styles/Index.module.css";
import SEOHead from "@/components/global/SEOHead";
import Hero from "@/components/Home/Hero";
import S01_Items from "@/components/Home/S01_Items";
import S02_Map from "@/components/Home/S02_Map";
import S03_Resources from "@/components/Home/S03_Resources";
import S04_Clients from "@/components/Home/S04_Clients";
import Banner_app from "@/components/global/BannerApp/Banner_app";
import S05_Testimonies from "@/components/Home/S05_Testimonies";
import line from "@/assets/images/division.png";
import useContentful from "../../utils/useContentful";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function Home() {
  const { data } = useContentful({ id: HomeID });

  const jsonLd: string | null = data?.fields?.jsonLd ?? null;
  const jsonLdProgram: string | null = data?.fields?.jsonLdProgram ?? null;
  const seoTitle: string | undefined = data?.fields?.seoTitle;
  const seoDescription: string | undefined = data?.fields?.seoDescription;

  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} />
      <Head>
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
          />
        )}
        {jsonLdProgram && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdProgram }}
          />
        )}
      </Head>
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
    </>
  );
}
