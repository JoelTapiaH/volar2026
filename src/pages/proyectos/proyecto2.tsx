"use client";
import React, { useState } from "react";
import styles from "@/styles/Projects/projects.module.css";
import useContentful from "../../../utils/useContentful";
import ColorContentful from "../../../utils/TurqContentful";
import { TextBreak } from "@/components/global/Text_break";
import OrangeContentful from "../../../utils/OrangeContentful";
import styled from "styled-components";
import ImageItem from "@/components/Projects/Gallery/Image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SEOHead from "@/components/global/SEOHead";

const ColaboradoresID = "52DsrroZaCPdwuC2PW6y4";

interface ImageProps {
  id?: string;
}

interface GalleryImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface ImageCard {
  fields: {
    galleryImg: GalleryImage;
    galleryText: string;
  };
}

interface ImageData {
  fields: {
    homeTestimonies: ImageCard[];
  };
}

const SecondBlockChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2em;
  position: relative;

  .carrusel {
    .react-multi-carousel-list {
      display: flex;
      justify-content: center !important;
    }
    .react-multiple-carousel__arrow {
      display: none;
      width: 5%;
      flex: 0 0 10%;
      &::before {
        font-size: 30px;
        font-weight: 900;
        color: #0044b0;
      }
    }
    .react-multi-carousel-item {
      padding: 0 10px;
      display: flex;
        justify-content: center;
    }
  }
  .react-multiple-carousel__arrow--left {
    order: 1;
  }

  .react-multi-carousel-track {
    order: 2;
  }

  .react-multiple-carousel__arrow--right {
    order: 3;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const CarouselWrapper = styled.div`
  width: 85%;
  overflow: hidden;

`;

const ArrowButton = styled.button`
display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;

  &::before {
    color: var(--green);
  }
  &:hover {
    background-color: var(--yellow);
    &::before {
      color: white;
    }
  }
  @media (max-width:850px) {
    display: none;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1190 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1190, min: 790 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 790, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};



export const Proyecto2 = ({ id }: ImageProps) => {
    const { data } = useContentful({ id: ColaboradoresID });
    const carouselRef = React.useRef<Carousel>(null);
    
      // Creador de SVGs en posiciones y animaciones aleatorias
    const floatingShapes = Array.from({ length: 30 }).map((_, index) => {
    const isLargeShape = Math.random() > 0.5;
    const size = isLargeShape ? 90 : 79;
    const duration = 13 + Math.random() * 15; // Entre 15-30 segundos
    const delay = Math.random() * 3; // Retardo aleatorio hasta 10s
    const left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    const bottom = `${-size - Math.random() * 100}px`; // Comienza fuera de pantalla
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
        <path d="M20.9888 27.0516C8.69225 31.9229 5.13798e-06 43.8778 5.13798e-06 57.8552C5.13798e-06 76.1585 14.9109 91 33.3005 91H128.444C146.834 90.9997 161 80.0708 161 61.7674C159.51 51.7805 155.973 42.6792 143.312 36.9342C143.312 36.9342 140.944 29.0862 136.05 23.591C128.789 15.4368 118.548 14.3613 115.625 14.2088C112.703 14.0564 106.196 14.5558 99.8523 15.9153C92.6515 -1.66135 64.3626 0.0451177 64.3626 0.0451177C46.875 1.75159 30.2994 4.73153 20.9865 27.0073C20.9865 27.792 20.9888 26.3248 20.9888 27.0516Z" fill="#B6E1E1" fill-opacity="0.5"/>
        </svg>
        ) : (
          <svg width="79" height="45" viewBox="0 0 79 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2988 13.3771C4.26514 15.786 -6.40112e-07 21.6978 -6.40112e-07 28.6097C-6.40112e-07 37.6608 7.31651 45 16.34 45H63.0254C72.0489 44.9998 79 39.5954 79 30.5443C78.2691 25.6057 76.5332 21.1051 70.3207 18.2642C70.3207 18.2642 69.1588 14.3833 66.7576 11.6659C63.1945 7.63359 58.1696 7.10172 56.7355 7.02634C55.3013 6.95096 52.1085 7.19794 48.9958 7.8702C45.4625 -0.821547 31.5817 0.0223109 31.5817 0.0223109C23.0008 0.866169 14.8674 2.33977 10.2977 13.3553C10.2977 13.7433 10.2988 13.0177 10.2988 13.3771Z" fill="white" fill-opacity="0.6"/>
        </svg>
        )}
    </div>
    );
    });

    if (!data || !(data as any).fields) {
    return null;
    }

    const { proTitle, proText, proSubTitle, proPhrase, proGalleryTitle, proColor, proSteps, proGalleryItems, seoTitle, seoDescription } = (data as any).fields;

    const handlePrevious = () => {
    if (carouselRef.current) {
      (carouselRef.current).previous(1); // Forzar el uso correcto del método
    }
    };

    const handleNext = () => {
    if (carouselRef.current) {
      (carouselRef.current).next(1); // Forzar el uso correcto del método
    }
    };
    return (
        <>
        <SEOHead title={seoTitle} description={seoDescription} />
        <div className={styles.container} >
            <div className={styles.heading} style={{backgroundColor: proColor}}>
                    <div className={styles.floatingBackground}>
                        {floatingShapes}
                    </div>
                <div className={styles.title} >
                <TextBreak>{proTitle}</TextBreak>
                </div>
                <div className={styles.paragraph}>
                {OrangeContentful(proText)}
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.subTitle} style={{color: proColor}}>
                    {proSubTitle}
                </div>
        {proSteps &&
        (
        <div className={styles.steps}>
        {proSteps.map ((item: any, index:number)=> {
            const iconUrl = `https:${item.fields.stepIcon.fields.file.url}`;
            const color = item.fields.stepColorTitle;
            const text = item.fields.stepText;
            const title = item.fields.stepTitle;
            const number = item.fields.stepNumber;
            return (
            <div className={styles.item}
                    key={index}
                    style={{ '--item-color': color } as React.CSSProperties}>
                <div className={styles.icon}>
                    <img src={iconUrl} />
                </div>
                <div className={styles.number} style={{backgroundColor:proColor}}>
                    {number}
                </div>
                <div className={styles.itemTitle} style={{color:color}}>
                    <TextBreak>{title}</TextBreak>
                </div>

                <div className={styles.description}>
                    {text}
                </div>
                </div>
            )
            })}
            </div>
        )}
                {proPhrase &&
                <div className={styles.phrase}>
                {proPhrase}
                </div>
                }
            </div>

            <div className={styles.gelleryTitle} style={{color: proColor}}>
                <TextBreak>{proGalleryTitle}</TextBreak>
            </div>

                        <section id={id} style={{width:'100%', overflow:'hidden', backgroundColor: proColor, padding:'2em 0 3em 0'}}>
                        <SecondBlockChild>
                          <CarouselContainer>
                            <ArrowButton
                              aria-label="Go to previous slide"
                              className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
                              onClick={handlePrevious} // Usar la función que verifica null
                            >
                              {/* Icono de flecha izquierda */}
                            </ArrowButton>
                    
                            <CarouselWrapper>
                              <Carousel
                                ref={carouselRef}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                transitionDuration={500}
                                className="carrusel"
                                itemClass="carousel-item-padding-40-px"
                              >
                                {proGalleryItems &&
                                  proGalleryItems.map((card:any, index:number) => {
                                    const imgUrl = card.fields.galleryImg.fields.file.url;
                                    const text = card.fields.galleryText;
                                    return (
                                      <ImageItem
                                        key={index}
                                        img={imgUrl}
                                        text={text}
                                      />
                                    );
                                  })}
                              </Carousel>
                            </CarouselWrapper>
                    
                            <ArrowButton
                              aria-label="Go to next slide"
                              className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
                              onClick={handleNext} // Usar la función que verifica null
                            >
                              {/* Icono de flecha derecha */}
                            </ArrowButton>
                          </CarouselContainer>
                        </SecondBlockChild>
                        </section>
        </div>
        </>
    );
};

export default Proyecto2;
