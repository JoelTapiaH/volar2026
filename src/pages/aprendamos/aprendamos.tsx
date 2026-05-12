import React from "react";
import styles from "@/styles/Learn/Learn.module.css";
import useContentful from "../../../utils/useContentful";
import Banner_app from "@/components/global/BannerApp/Banner_app";
import FlowerParts from "@/components/Learn/FlowerParts";
import SEOHead from "@/components/global/SEOHead";

const LearnID = "1aM3nmV0dxl3Ke5H81uq85";

export default function S01_Items() {
    const { data } = useContentful({ id: LearnID });

    if (!data || !(data as any).fields) {
    return null;
    }

    const { learnTitle, learnText, seoTitle, seoDescription } = (data as any).fields;

    return (
        <>
        <SEOHead title={seoTitle} description={seoDescription} />
        <div className={styles.container}>
            <h1>{learnTitle}</h1>
            <div className={styles.description}>{learnText}</div>
            <FlowerParts/>
            <Banner_app/>
        </div>
        </>
    );
}