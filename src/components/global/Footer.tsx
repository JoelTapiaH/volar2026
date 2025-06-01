import React from "react";
import styles from "@/styles/Footer.module.css";
import  ig from "@/assets/images/ig.svg";
import yt from "@/assets/images/yt.png";
import fb from "@/assets/images/fb.png";
import useContentful from "../../../utils/useContentful";

const FooterID= "58imnflvliRZe777xbsxA6";


export default function Footer() {
    const { data } = useContentful({ id: FooterID });
      // Creador de SVGs en posiciones y animaciones aleatorias
    const floatingShapes = Array.from({ length: 30 }).map((_, index) => {
    const isLargeShape = Math.random() > 0.5;
    const size = isLargeShape ? 90 : 79;
    const duration = 13 + Math.random() * 15; // Entre 15-30 segundos
    const delay = Math.random() * 3; // Retardo aleatorio hasta 10s
    const left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    const bottom = `${-size - Math.random() * 20}px`; // Comienza fuera de pantalla
       return (
      <div 
        key={index}
        className={styles.floatingShape}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          left,
          bottom,
        }}
      >
        {isLargeShape ? (
          <svg width="161" height="91" viewBox="0 0 161 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9888 27.0516C8.69225 31.9229 0 43.8778 0 57.8552C0 76.1585 14.9109 91 33.3005 91H128.444C146.834 90.9997 161 80.0708 161 61.7674C159.51 51.7805 155.973 42.6792 143.312 36.9342C143.312 36.9342 140.944 29.0862 136.05 23.591C128.789 15.4368 118.548 14.3613 115.625 14.2088C112.703 14.0564 106.196 14.5558 99.8523 15.9153C92.6515 -1.66135 64.3626 0.0451177 64.3626 0.0451177C46.875 1.75159 30.2994 4.73153 20.9865 27.0073C20.9865 27.792 20.9888 26.3248 20.9888 27.0516Z" fill="#B6E1E1"/>
          </svg>
        ) : (
          <svg width="79" height="45" viewBox="0 0 79 45" fill="none">
            <path d="M10.2988 13.3771C4.26514 15.786 0 21.6978 0 28.6097C0 37.6608 7.31651 45 16.34 45H63.0254C72.0489 44.9998 79 39.5954 79 30.5443C78.2691 25.6057 76.5332 21.1051 70.3207 18.2642C70.3207 18.2642 69.1588 14.3833 66.7576 11.6659C63.1945 7.63359 58.1696 7.10172 56.7355 7.02634C55.3013 6.95096 52.1085 7.19794 48.9958 7.8702C45.4625 -0.821546 31.5817 0.0223109 31.5817 0.0223109C23.0008 0.866169 14.8674 2.33977 10.2977 13.3553C10.2977 13.7433 10.2988 13.0177 10.2988 13.3771Z" fill="white"/>
          </svg>
        )}
      </div>
    );
  });

    if (!data || !(data as any).fields) {
      return null;
    }
    const { contactIG, contactFB, contactYT, contactMail, contactAddress, contactTerms, contactLogo, contactBreca } = (data as any).fields;
    const logo = data.fields.contactLogo.fields.file.url;
    const logoBreca = data.fields.contactBreca.fields.file.url;

    return (
    <footer className={styles.footer}>
        <div className={styles.floatingBackground}>
                  {floatingShapes}

                <img src={logo} className={styles.logo}/>
                <img src={logoBreca} className={styles.logoBreca}/>
        </div>
        <div className={styles.contactInfo}>
                <div className={styles.content}>CONTÁCTANOS</div>
                <a href={`mailto:${contactMail}`} target="_blank" className={styles.contactInput}>
                    {contactMail}
                </a>
                <div className={styles.addres}>
                    <h4>{contactAddress}</h4>
                    <a href={contactTerms} target="_blank"><div className={styles.terms}>Términos y condiciones</div></a>
                </div>
        </div>
        <div className={styles.socialMedia}>
                <a href={contactIG} target="_blank"><div><img src={ig.src} /> </div></a>
                <a href={contactYT} target="_blank"><div><img src={yt.src}/></div></a>
                <a href={contactFB} target="_blank"><div><img src={fb.src}/></div></a>
        </div>
        <div className={styles.addresResponsive}>
                <h4>{contactAddress}</h4>
                <a href={contactTerms} target="_blank"><div className={styles.terms}>Términos y condiciones</div></a>
        </div>
    </footer>
    );
  }