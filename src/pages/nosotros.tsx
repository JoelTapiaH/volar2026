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

        <div className={styles.timeContainer}>
        <h1>{TimeTitle}</h1>
        {TimeLine &&
        <div className={styles.timeWrapper}>

<div className={styles.boxes2}>
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
</div>
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