import React, { useState } from "react";
import styles from "@/styles/Learn/Dimensions.module.css";
import useContentful from "../../../utils/useContentful";
import ColorContentful from "../../../utils/TurqContentful";
import { TextBreak } from "@/components/global/Text_break";
import Advice from "@/components/Learn/Advice";

const Petal1ID = "5z1spfEf4Ub3uitRNTZRco";

export default function Dimension1() {
    const { data } = useContentful({ id: Petal1ID });
    const [modalContent, setModalContent] = useState<{ 
      type: 'image' | 'video'; 
      url: string 
    } | null>(null);

    if (!data || !(data as any).fields) {
      return null;
    }

    const { p1Title, p1Color, p1Icon, p1Paragraph, p1Boxes, p1Message, p1Button, p1Icon2 } = (data as any).fields;
    const icon = data.fields.p1Icon.fields.file.url;
    const icon2 = data.fields.p1Icon2.fields.file.url;
    const textButton = data.fields.p1Button.fields.buttonText;
    const colorButton = data.fields.p1Button.fields.buttonColor;

    const handleAdviceClick = (card: any) => {
      if (card.fields.adviceInfoImg?.fields?.file?.url) {
        setModalContent({
          type: 'image',
          url: `https:${card.fields.adviceInfoImg.fields.file.url}`,
        });
      } else if (card.fields.adviceInfoLink) {
        setModalContent({
          type: 'video',
          url: card.fields.adviceInfoLink,
        });
      }
    };

    const closeModal = () => {
      setModalContent(null);
    };

    const extractYouTubeId = (url: string) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading} style={{backgroundColor: p1Color}}>
                    <div className={styles.petalBackground}>
                        <img src={icon2} className={styles.imgDimension}/>
                    </div>
                <TextBreak>{p1Title}</TextBreak>
            </div>
            <div className={styles.content} style={{color: p1Color}}>
                <div className={styles.paragraph}>
                {ColorContentful(p1Paragraph)}
                </div>
                
                {p1Boxes && (
                    <div className={styles.boxes}>
                        {p1Boxes.map((card: any, index: number) => {
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
                                    onClick={() => handleAdviceClick(card)}
                                />
                            );
                        })}
                    </div>
                )}
                <div className={styles.message}>
                <TextBreak>{p1Message}</TextBreak>
                </div>
                <a className={styles.styledButton} style={{backgroundColor:colorButton}} href="/contactanos" target="_blank">
                    <span>{textButton}</span>
                </a>
            </div>

            {modalContent && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {modalContent.type === 'image' ? (
                            <img 
                                src={modalContent.url} 
                                alt="Infografía" 
                                className={styles.infographyImage}
                            />
                        ) : (
                            <iframe
                                src={`https://www.youtube.com/embed/${extractYouTubeId(modalContent.url)}`}
                                className={styles.modalVideo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                        <button className={styles.closeButton} onClick={closeModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}