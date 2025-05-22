import React from "react";
import styles from "@/styles/Learn/Dimensions.module.css";
import useContentful from "../../../utils/useContentful";
import ColorContentful from "../../../utils/TurqContentful";
import { TextBreak } from "@/components/global/Text_break";
import Advice from "@/components/Learn/Advice";

const Petal6ID = "4YhScFxPFQE0jho4lOaaWz";

export default function Dimension1() {
    const { data } = useContentful({ id: Petal6ID });

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
                        <svg width="355" height="355" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="177.785" cy="177.374" r="126" transform="rotate(141 177.785 177.374)" fill="white"/>
                        <rect width="58" height="155.237" rx="28" transform="matrix(0.997542 -0.0700692 -0.0700692 -0.997542 194.014 245.526)" fill={p1Color}/>
                        <rect x="243.379" y="205.55" width="58" height="155.237" rx="28" transform="rotate(106.018 243.379 205.55)" fill={p1Color}/>
                        <ellipse cx="163.677" cy="157.181" rx="93.5" ry="43" transform="rotate(141 163.677 157.181)" fill={p1Color}/>
                        <ellipse cx="219.614" cy="227.051" rx="33" ry="24.5" transform="rotate(141 219.614 227.051)" fill={p1Color}/>
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