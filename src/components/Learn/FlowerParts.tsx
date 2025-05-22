import React from "react";
import styles from "@/styles/Learn/Petals.module.css";
import useContentful from "../../../utils/useContentful";
import { TextBreak } from "../global/Text_break";

const Petal1ID = "6e7bBjHsocqmJw0h8yWB20";
const Petal2ID = "2YcqfWiX2SIsXGLgC2XQQW";
const Petal3ID = "55MBubVyiqahUXx1LweTZ0";
const Petal4ID = "1mDhm25OwbcocBi0oRnl3h";
const Petal5ID = "2haqekFczfeOAp8xe2FLp1";
const Petal6ID = "4YhScFxPFQE0jho4lOaaWz";

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
console.log('RES', response1)
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
            <a href={`/aprendamos/aprendamos`} target="_blank">
                <div className={styles.petal}>
                    <svg width="168" height="167" viewBox="0 0 168 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M167.089 37.8208C167.907 15.7445 150.485 -3.25415 128.748 0.68355C103.767 5.2087 79.8402 14.8538 58.5325 29.1731C37.2249 43.4925 19.2557 62.0027 5.62897 83.4228C-6.22874 102.062 4.78085 125.37 25.5302 132.952L110.056 163.841C135.566 173.163 162.752 154.894 163.758 127.752L167.089 37.8208Z"
                        fill={p1Color}/>
                    </svg>
                    <img src={p1Icon} className={styles.img1}/>
                </div>
                <div className={styles.title} style={{color: p1Color}}>
                    <TextBreak>{p1Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/aprendamos`} target="_blank">
                <div className={styles.petal}>
                    <svg width="166" height="167" viewBox="0 0 166 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M140.949 133.74C161.763 126.337 172.973 103.125 161.277 84.3841C147.835 62.8474 130.026 44.1829 108.843 29.6805C87.6593 15.178 63.8165 5.32707 38.8759 0.58678C17.173 -3.53813 -0.411519 15.3097 0.215938 37.3921L2.77197 127.348C3.54342 154.498 30.5707 173.001 56.1609 163.899L140.949 133.74Z"
                    fill={p2Color}/>
                    </svg>
                    <img src={p2Icon} className={styles.img2}/>
                </div>
                <div className={styles.title} style={{color: p2Color}}>
                    <TextBreak>{p2Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/aprendamos`} target="_blank">
                <div className={styles.petal3}>
                    <svg width="162" height="180" viewBox="0 0 162 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58.7298 162.673C71.281 180.853 96.6067 185.655 111.67 169.496C128.981 150.926 142.384 128.884 150.893 104.662C159.401 80.4411 162.727 54.8587 160.833 29.5424C159.184 7.51259 136.419 -4.57837 115.256 1.75813L29.0448 27.5708C3.0252 35.3614 -7.83042 66.2645 7.60092 88.6159L58.7298 162.673Z"
                    fill={p3Color}/>
                    </svg>
                    <img src={p3Icon} className={styles.img3}/>
                </div>
                <div className={styles.title} style={{color: p3Color}}>
                    <TextBreak>{p3Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/aprendamos`} target="_blank">
                <div className={styles.petal4}>
                    <svg width="186" height="158" viewBox="0 0 186 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75457 89.4651C-5.32908 107.265 -1.59701 132.771 18.5958 141.731C41.801 152.027 67.0122 157.497 92.684 157.628C118.356 157.76 143.622 152.549 166.931 142.49C187.215 133.737 191.208 108.271 178.307 90.3381L125.754 17.2846C109.893 -4.76391 77.1388 -4.93157 61.0527 16.9534L7.75457 89.4651Z"
                    fill={p4Color}/>
                    </svg>
                    <img src={p4Icon} className={styles.img4}/>
                </div>
                <div className={styles.title} style={{color: p4Color}}>
                    <TextBreak>{p4Name}</TextBreak>
                </div>
            </a>

            <a href={`/aprendamos/aprendamos`} target="_blank">
                <div className={styles.petal5}>
                    <svg width="161" height="183" viewBox="0 0 161 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.9067 3.35202C29.1975 -4.33928 5.69808 6.25477 2.62902 28.1319C-0.897907 53.2729 0.767512 79.0167 7.69238 103.737C14.6172 128.458 26.5678 151.321 42.6419 170.971C56.6292 188.07 82.2124 184.915 95.9125 167.585L151.722 96.9873C168.566 75.6801 159.73 44.1399 134.269 34.6836L49.9067 3.35202Z"
                    fill={p5Color}/>
                    </svg>

                    <img src={p5Icon} className={styles.img5}/>
                </div>
                <div className={styles.title} style={{color: p5Color}}>
                    <TextBreak>{p5Name}</TextBreak>
                </div>
            </a>



            <a href={`/aprendamos/aprendamos`} target="_blank">
                <div className={styles.petal}>
                    <svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="86" cy="86" r="86"
                    fill={p6Color}/>
                    </svg>

                    <img src={p6Icon} className={styles.img6}/>
                </div>
                <div className={styles.title} style={{color: p6Color}}>
                    <TextBreak>{p6Name}</TextBreak>
                </div>
            </a>
        </div>
    );
}