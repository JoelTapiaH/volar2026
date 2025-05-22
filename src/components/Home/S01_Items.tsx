import React from "react";
import styles from "@/styles/Home/S01.module.css";
import useContentful from "../../../utils/useContentful";
import { TextBreak } from "../global/Text_break";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

export default function S01_Items() {
    const { data } = useContentful({ id: HomeID });

    if (!data || !(data as any).fields) {
      return null;
    }

    const { homeTitleS01, homeItems} = (data as any).fields;
    
    return (
      <div className={styles.container}>
        <h1><TextBreak>{homeTitleS01}</TextBreak></h1>
        <div className={styles.items}>
          {homeItems &&
          homeItems.map ((item: any, index:number)=> {
            const iconUrl = `https:${item.fields.itemIcon.fields.file.url}`;
            const color = item.fields.itemColor;
            const text = item.fields.itemText;
            const title = item.fields.itemTitle;
            return (
              <div className={styles.item}
                    key={index}
                    style={{ '--item-color': color } as React.CSSProperties}>
                  <div className={styles.icon} style={{backgroundColor:color}}>
                    <img src={iconUrl} />
                  </div>

                  <div className={styles.title} style={{color:color}}>
                    {title}
                  </div>

                  <div className={styles.description}>
                    {text}
                  </div>
                  
                  {/* Elemento para los puntitos animados */}
                  
              </div>
            )
          })}
        </div>
      </div>
    );
}