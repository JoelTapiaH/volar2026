import React from "react";
import styles from "@/styles/Us/Alliances.module.css";

import Try from "@/assets/images/try.png";

export default function Nosotros() {
    
    return (
      <div className={styles.container}>
        <img src={Try.src} />
        <button style={{ marginTop:"2em"}} className={styles.effect}>¡Entérate más!</button>
        <h1 style={{marginTop:"5em"}}>ALIANZAS LOREM</h1>
        <div className={styles.boxes}>
            <div className={styles.box} style={{backgroundColor:"var(--yellow)"}}>
                <div>Loremipsum</div>
                <div>Example</div>
                <button  style={{width:"170px", height:"70px", fontSize:"16px", marginTop:"1em"}} className={styles.but}>¡Conoce más!</button>
            </div>
                        <div className={styles.box} style={{backgroundColor:"var(--red)"}}>
                <div>Loremipsum</div>
                <div>Example</div>
                <button  style={{width:"170px", height:"70px", fontSize:"16px", marginTop:"1em"}} className={styles.but}>¡Conoce más!</button>
            </div>
                        <div className={styles.box} style={{backgroundColor:"var(--darkPurple)"}}>
                <div>Loremipsum</div>
                <div>Example</div>
                <button  style={{width:"170px", height:"70px", fontSize:"16px", marginTop:"1em"}} className={styles.but}>¡Conoce más!</button>
            </div>
                        <div className={styles.box} style={{backgroundColor:"var(--darkTurq)"}}>
                <div>Loremipsum</div>
                <div>Example</div>
                <button  style={{width:"170px", height:"70px", fontSize:"16px", marginTop:"1em"}} className={styles.but}>¡Conoce más!</button>
            </div>
        </div>
      </div>
    );
}