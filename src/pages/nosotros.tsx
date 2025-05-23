import React from "react";
import styles from "@/styles/Us/Us.module.css";
import useContentful from "../../utils/useContentful";
import OrangeContentful from "../../utils/OrangeContentful";
import info from "@/assets/images/info.png";
import AllianceBox from "@/components/Us/AllianceBox";
import FlowerComplete from "@/components/Us/FlowerComplete";
import TimeHito from "@/components/Us/TimeLine";

const UsID = "3DDx9rJhrxynyHINQcsADs";
const ContactID= "58imnflvliRZe777xbsxA6";

export default function Nosotros() {
    const response1 = useContentful({ id: UsID });
    const response2 = useContentful({ id: ContactID });

    if (!response1.data || !response2.data ||
        !response1.data.fields || !response2.data.fields  ) {
        return null;
    }

    const titleP1 = response1.data.fields.usTitleP1;
    const titleP2 = response1.data.fields.usTitleP2;
    const titleIcon = response1.data.fields.usIcon.fields.file.url;

    const text = response1.data.fields.usResume;

    const textButton = response1.data.fields.usButton.fields.buttonText;
    const colorButton = response1.data.fields.usButton.fields.buttonColor;

    const fTitleP1 = response1.data.fields.usFlowerP1;
    const fTitleP2 = response1.data.fields.usFlowerP2;
    const fInfo = response1.data.fields.usFlowerInfo;

    const TimeLine = response1.data.fields.usTimeLine;
    const alliances = response1.data.fields.usAlliances;

    const logo = response2.data.fields.contactLogo.fields.file.url;

    const TimeTitle = response1.data.fields.usTimeLineTitle;
    const AllianceTitle = response1.data.fields.usAlliancesTitle;

    console.log('coookie',response1)
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
            <div className={styles.title}>
                <div className={styles.titleText}>
                        {titleP1}
                        <div className={styles.Part2}>{titleP2}</div>
                </div>
                <img src={titleIcon} className={styles.titleIcon}/>
            </div>

            <div className={styles.text}>
            {OrangeContentful(text)}
            </div>

            <a className={styles.styledButton} style={{backgroundColor:colorButton}} href="#">
                <span>{textButton}</span>
            </a>
            </div>
        <br/>
        <br/>
        <br/>
        <br/>
            <div className={styles.flowerTitle}>
                <img src={logo} className={styles.logo}/>
                <div className={styles.fPart1}>{fTitleP1}</div>
                <div className={styles.fPart2}>
                {fTitleP2}
                <div className={styles.info}>
                <img src={info.src} className={styles.infoIcon}/>
                <div className={styles.infoBox}>{fInfo}</div>
                </div>
                </div>
            </div>
            <FlowerComplete/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h1>{TimeTitle}</h1>
        {alliances &&
        <div style={{height:'500px', display:'flex', alignItems:'center', position:'relative'}}>
            <svg width="919" height="62" viewBox="0 0 919 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68 32H836" stroke="#ED9F68" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6"/>
<path d="M2 32H68" stroke="#ED9F68" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 10"/>
<path d="M861.212 34.5153L858.3 32.8792L861.251 31.1272C863.625 29.7394 866.346 29.2624 868.984 29.916L870.266 30.2436C870.837 30.3732 871.259 30.9295 871.253 31.4943L871.227 33.7529C871.22 34.3882 870.786 34.8908 870.212 35.0433L868.921 35.4217C866.34 36.1077 863.556 35.8098 861.212 34.5153ZM870.761 37.079C872.338 36.6243 873.426 35.2622 873.443 33.7092L873.469 31.4504C873.487 29.8976 872.43 28.5071 870.861 28.1851L869.578 27.8577C866.37 27.1448 863.077 27.6333 860.199 29.3132L855.809 31.9405C855.449 32.1591 855.231 32.5164 855.226 32.9398C855.221 33.3635 855.432 33.7121 855.787 33.9167L860.119 36.3716C862.96 37.9387 866.243 38.3679 869.47 37.4574L870.761 37.079Z" fill="#EF7F3C"/>
<path d="M899.375 34.7516C897.588 34.7869 896.174 33.4035 896.194 31.6387C896.214 29.8742 897.66 28.4342 899.447 28.3989C901.235 28.3635 902.648 29.747 902.628 31.5118C902.608 33.2763 901.091 34.7177 899.375 34.7516ZM899.471 26.2813C896.54 26.3391 894.082 28.787 894.05 31.681C894.017 34.5752 896.42 36.9271 899.351 36.8691C902.283 36.8113 904.74 34.3635 904.773 31.4695C904.806 28.5754 902.403 26.2233 899.471 26.2813Z" fill="#EF7F3C"/>
<path d="M880.488 42.6744C883.628 43.1064 886.773 43.1855 889.919 42.9821C887.389 45.5727 884.08 47.4021 880.498 48.108L877.776 48.6559L880.488 42.6744ZM877.161 39.9174C877.017 39.9202 876.948 39.7805 876.949 39.6393L877.283 35.3984C877.45 33.2781 877.473 31.2313 877.354 29.1165L877.119 24.6751C877.12 24.534 877.193 24.3914 877.336 24.3886L877.408 24.3871C889.808 21.3194 902.863 23.461 913.365 30.2399L915.209 31.4032L912.905 32.9307C902.389 40.0543 889.352 42.6407 877.161 39.9174ZM878.222 15.6205L880.933 16.0609C884.5 16.6962 887.769 18.3252 890.241 20.8875C887.098 20.8085 883.879 21.0132 880.728 21.4988L878.222 15.6205ZM880.904 50.1467C885.704 49.1344 889.951 46.51 892.997 42.639C900.441 41.716 907.691 38.9616 914.029 34.6728L916.334 33.0747C916.91 32.7106 917.276 31.9976 917.283 31.3623C917.291 30.6564 916.941 30.0283 916.373 29.6865L914.457 28.4542C908.072 24.2756 900.809 21.8078 893.241 21.1105C890.354 17.2864 886.094 14.7594 881.314 13.9363L878.532 13.4973C877.747 13.3715 876.958 13.6693 876.45 14.3146C876.16 14.6731 876.012 15.0996 876.007 15.523C876.004 15.8053 876.072 16.157 876.212 16.4363L878.508 21.8955C877.935 22.048 877.362 22.13 876.789 22.2823L876.645 22.3556C875.641 22.6579 874.915 23.5895 874.902 24.7191L874.901 24.8602L875.137 29.3012C875.257 31.2748 875.234 33.322 875.068 35.301L874.735 39.5419C874.65 40.6727 875.425 41.7159 876.565 41.9756C877.136 42.1056 877.706 42.2353 878.277 42.2947L875.855 47.8468C875.709 48.132 875.634 48.4865 875.631 48.7688C875.626 49.1923 875.764 49.6129 876.046 49.9601C876.539 50.5857 877.322 50.8524 878.11 50.6959L880.904 50.1467Z" fill="#EF7F3C"/>
</svg>
<div className={styles.boxes2} style={{position:'absolute'}}>
        {TimeLine &&
            TimeLine.map((card:any, index:number) => {
                const text = card.fields.hitoTitle;
                const color = card.fields.hitoColor;
                const number = card.fields.hitoNumber;
                const year = card.fields.hitoYear;
                const icon = card.fields.hitoIcon.fields.file.url;

                return (
                <TimeHito
                    key={index}
                    text={text}
                    color={color}                    
                    number={number}
                    year={year}
                    icon={icon}
                />
                
                );
            })}
</div>
        </div>
        }
<br/>
        <h1>{AllianceTitle}</h1>
        {alliances &&
        <div className={styles.boxes}>
        {alliances &&
            alliances.map((card:any, index:number) => {
                const text = card.fields.boxText;
                const color = card.fields.boxColor;
                const link = card.fields.boxLink;
                const buttonText = card.fields.boxButtonText;
                const buttonColor = card.fields.boxButtonColor;

                return (
                <AllianceBox
                    key={index}
                    text={text}
                    color={color}                    
                    link={link}
                    buttonText={buttonText}
                    buttonColor={buttonColor}
                />
                
                );
            })}
        </div>
        }

        </div>
    );
}