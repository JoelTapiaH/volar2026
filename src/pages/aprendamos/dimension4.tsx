import React from "react";
import styles from "@/styles/Learn/Dimensions.module.css";
import useContentful from "../../../utils/useContentful";
import ColorContentful from "../../../utils/TurqContentful";
import { TextBreak } from "@/components/global/Text_break";
import Advice from "@/components/Learn/Advice";

const Petal4ID = "1mDhm25OwbcocBi0oRnl3h";

export default function Dimension1() {
    const { data } = useContentful({ id: Petal4ID });

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
                    <div className={styles.petal4}>
                        <svg width="252" height="252" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="126" cy="126" r="126" fill="white"/>
                        <rect width="58" height="155.237" rx="28" transform="matrix(-0.819332 -0.57332 -0.57332 0.819332 157.521 69.2525)" fill={p1Color}/>
                        <rect x="94" y="69.2525" width="58" height="155.237" rx="28" transform="rotate(-34.982 94 69.2525)" fill={p1Color}/>
                        <ellipse cx="125.5" cy="157" rx="93.5" ry="43" fill={p1Color}/>
                        <ellipse cx="126" cy="67.5" rx="33" ry="24.5" fill={p1Color}/>
                        </svg>

                        <img src={icon} className={styles.img1}/>
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