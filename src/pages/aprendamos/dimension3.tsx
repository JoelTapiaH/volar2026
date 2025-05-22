import React from "react";
import styles from "@/styles/Learn/Dimensions.module.css";
import useContentful from "../../../utils/useContentful";
import ColorContentful from "../../../utils/TurqContentful";
import { TextBreak } from "@/components/global/Text_break";
import Advice from "@/components/Learn/Advice";

const Petal3ID = "55MBubVyiqahUXx1LweTZ0";

export default function Dimension3() {
    const { data } = useContentful({ id: Petal3ID });

    if (!data || !(data as any).fields) {
    return null;
    }

    const { p1Title, p1Color, p1Icon, p1Paragraph, p1Boxes, p1Message, p1Button} = (data as any).fields;
    const icon=data.fields.p1Icon.fields.file.url;

    const textButton = data.fields.p1Button.fields.buttonText;
    const colorButton = data.fields.p1Button.fields.buttonColor;

    console.log('ERERE',p1Paragraph)
    return (
        <div className={styles.container} >
            <div className={styles.heading} style={{backgroundColor: p1Color}}>
                    <div className={styles.petal}>
                        <svg width="319" height="319" viewBox="0 0 319 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="159.303" cy="159.303" r="126" transform="rotate(-71.6191 159.303 159.303)" fill="white"/>
                        <rect width="58" height="155.237" rx="28" transform="matrix(-0.802431 0.596745 0.596745 0.802431 112.391 111.496)" fill={p1Color}/>
                        <rect x="92.3604" y="171.777" width="58" height="155.237" rx="28" transform="rotate(-106.601 92.3604 171.777)" fill={p1Color}/>
                        <ellipse cx="185.564" cy="169.553" rx="93.5" ry="43" transform="rotate(-71.6191 185.564 169.553)" fill={p1Color}/>
                        <ellipse cx="100.788" cy="140.857" rx="33" ry="24.5" transform="rotate(-71.6191 100.788 140.857)" fill={p1Color}/>
                        </svg>
                        <img src={icon} className={styles.img3}/>
                    </div>
                <TextBreak>{p1Title}</TextBreak>
            </div>
            <div className={styles.content} style={{color: p1Color}}>
                <div className={styles.paragraph}>
                {ColorContentful(p1Paragraph)}
                </div>
                
                {p1Boxes &&
                <div className={styles.boxes}>
                {p1Boxes &&
            p1Boxes.map((card:any, index:number) => {
                const title = card.fields.adviceTitle;
                const age = card.fields.adviceAge;
                const tag = card.fields.adviceTag;
                const imgUrl = card.fields.adviceImg.fields.file.url;
                const color = card.fields.adviceColor;

                return (
                <Advice
                    key={index}
                    text={title}
                    age={age}
                    tag={tag}
                    img={imgUrl}
                    color={color}
                />
                
                );
            })}
            </div>}
                <div className={styles.message}>
                <TextBreak>{p1Message}</TextBreak>
                </div>
                <a className={styles.styledButton} style={{backgroundColor:colorButton}} href="#">
                    <span>{textButton}</span>
                </a>

            </div>
        </div>
            );
}