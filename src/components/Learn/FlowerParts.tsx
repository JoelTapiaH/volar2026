import React from "react";
import styles from "@/styles/Learn/Petals.module.css";
import useContentful from "../../../utils/useContentful";
import { TextBreak } from "../global/Text_break";

const Petal1ID = "5z1spfEf4Ub3uitRNTZRco";
const Petal2ID = "4bGNgqYQvVPvpGJtJgXiEF";
const Petal3ID = "7dcNBFv2PdEi5VVdJ3vB5i";
const Petal4ID = "6Ygt3Yr9Xc1VuHXfEHUFo7";
const Petal5ID = "3OgIbnZxGNomokELMetZHK";
const Petal6ID = "6etIDzSyt9bzfY6qvnotBf";

export default function FlowerParts() {
    const response1 = useContentful({ id: Petal1ID });
    const response2 = useContentful({ id: Petal2ID });
    const response3 = useContentful({ id: Petal3ID });
    const response4 = useContentful({ id: Petal4ID });
    const response5 = useContentful({ id: Petal5ID });
    const response6 = useContentful({ id: Petal6ID });

    // Check if all data is loaded
    if (!response1.data || !response2.data || !response3.data || 
        !response4.data || !response5.data || !response6.data ||
        !response1.data.fields || !response2.data.fields || 
        !response3.data.fields || !response4.data.fields || 
        !response5.data.fields || !response6.data.fields) {
        return null;
    }
    // Nombres
    const p1Name = response1.data.fields.p1Name;
    const p2Name = response2.data.fields.p1Name;
    const p3Name = response3.data.fields.p1Name;
    const p4Name = response4.data.fields.p1Name;
    const p5Name = response5.data.fields.p1Name;
    const p6Name = response6.data.fields.p1Name;
    
    const p1Color = response1.data.fields.p1Color;
    const p2Color = response2.data.fields.p1Color;
    const p3Color = response3.data.fields.p1Color;
    const p4Color = response4.data.fields.p1Color;
    const p5Color = response5.data.fields.p1Color;
    const p6Color = response6.data.fields.p1Color;

    const p1Icon = response1.data.fields.p1Icon.fields.file.url;
    const p2Icon = response2.data.fields.p1Icon.fields.file.url;
    const p3Icon = response3.data.fields.p1Icon.fields.file.url;
    const p4Icon = response4.data.fields.p1Icon.fields.file.url;
    const p5Icon = response5.data.fields.p1Icon.fields.file.url;
    const p6Icon = response6.data.fields.p1Icon.fields.file.url;
    return (
        <div className={styles.container}>
            <a href={`/aprendamos/dimension1`}>
                <div className={styles.petal}>

                    <img src={p1Icon} className={styles.img}/>
                </div>
                <div className={styles.title} style={{color: p1Color}}>
                    <TextBreak>{p1Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/dimension2`}>
                <div className={styles.petal}>
                    <img src={p2Icon} className={styles.img}/>
                </div>
                <div className={styles.title} style={{color: p2Color}}>
                    <TextBreak>{p2Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/dimension3`}>
                <div className={styles.petal}>

                    <img src={p3Icon} className={styles.img}/>
                </div>
                <div className={styles.title} style={{color: p3Color}}>
                    <TextBreak>{p3Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/dimension4`}>
                <div className={styles.petal}>

                    <img src={p4Icon} className={styles.img}/>
                </div>
                <div className={styles.title} style={{color: p4Color}}>
                    <TextBreak>{p4Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/dimension5`}>
                <div className={styles.petal}>

                    <img src={p5Icon} className={styles.img}/>
                </div>
                <div className={styles.title} style={{color: p5Color}}>
                    <TextBreak>{p5Name}</TextBreak>
                </div>
            </a>



            <a href={`/aprendamos/dimension6`}>
                <div className={styles.petal}>


                    <img src={p6Icon} className={styles.img}/>
                </div>
                <div className={styles.title} style={{color: p6Color}}>
                    <TextBreak>{p6Name}</TextBreak>
                </div>
            </a>
        </div>
    );
}