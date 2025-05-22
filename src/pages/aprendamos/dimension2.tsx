import React from "react";
import styles from "@/styles/Learn/Dimensions.module.css";
import useContentful from "../../../utils/useContentful";
import ColorContentful from "../../../utils/TurqContentful";
import { TextBreak } from "@/components/global/Text_break";
import Advice from "@/components/Learn/Advice";

const Petal2ID = "2YcqfWiX2SIsXGLgC2XQQW";

export default function Dimension2() {
    const { data } = useContentful({ id: Petal2ID });

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
                    <div className={styles.petal2}>
                        <svg width="355" height="355" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="126" cy="126" r="126" transform="matrix(0.777146 0.62932 0.62932 -0.777146 -0.000976562 196)" fill="white"/>
                        <rect x="161.998" y="251.153" width="58" height="155.237" rx="28" transform="rotate(-175.982 161.998 251.153)" fill={p1Color}/>
                        <rect width="58" height="155.237" rx="28" transform="matrix(0.275939 0.961175 0.961175 -0.275939 112.633 211.177)" fill={p1Color}/>
                        <ellipse cx="93.5" cy="43" rx="93.5" ry="43" transform="matrix(0.777146 0.62932 0.62932 -0.777146 92.6104 137.384)" fill={p1Color}/>
                        <ellipse cx="33" cy="24.5" rx="33" ry="24.5" transform="matrix(0.777146 0.62932 0.62932 -0.777146 95.334 230.95)" fill={p1Color}/>
                        </svg>

                        <img src={icon} className={styles.img2}/>
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