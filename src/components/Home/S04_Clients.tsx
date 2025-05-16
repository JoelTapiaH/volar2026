import React from "react";
import styles from "@/styles/Home/S04.module.css";
import useContentful from "../../../utils/useContentful";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

import logo from "@/assets/images/LOGO_VOLAR.png";
import Image from "next/image";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

const Container = styled.div`
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
    width: 100
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
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
    title: string;
  };
}

interface HomeContent {
  fields: {
    homeTitleS04: string;
    homeLogos1: ContentfulImage[];
    homeLogos2?: ContentfulImage[];
  };
}

export default function S04_Clients() {
  const { data } = useContentful({ id: HomeID });
  const carouselRef = React.useRef<Carousel>(null);

  if (!data || !(data as any).fields) {
      return null;
    }

  const { homeTitleS04, homeLogos1, homeLogos2 } = data.fields;

  // Debug: Verifica las imágenes en consola
  console.log('Datos de imágenes:', homeLogos1);
  console.log('Primera imagen URL:', homeLogos1?.[0]?.fields?.file?.url);

  return (
    <div className={styles.container}>
      <h1 style={{ display: "flex", alignItems: "flex-end" }}>
        {homeTitleS04}
        <Image 
          src={logo} 
          alt="Logo Volar" 
          width={200}
          height={80}
          style={{ marginLeft: "1em" }}
        />
      </h1>

      
        <Container>
          <CarouselContainer>
            <CarouselWrapper>
                <Carousel
                  ref={carouselRef}
                  responsive={responsive}
                  infinite
                  autoPlay
                  autoPlaySpeed={3000}
                  transitionDuration={500}
                  className="carrusel"
                  itemClass="carousel-item-padding-40-px"
                >
                  {homeLogos1.map((image: any, index:number) => {
                    const imageUrl = `https:${image.fields.file.url}`;
                    console.log(`Imagen ${index}:`, imageUrl); // Debug
                    
                    return (
                      <div key={`${image.fields.title}-${index}`}>
                        <img
                          src={imageUrl}
                          alt={image.fields.title || `Logo ${index + 1}`}
                          style={{
                            width: "100px",
                            height: "50px",
                            borderRadius: "30px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    );
                  })}
                </Carousel>
            </CarouselWrapper>
          </CarouselContainer>
          <CarouselContainer>
            <CarouselWrapper>
                <Carousel
                  ref={carouselRef}
                  responsive={responsive}
                  infinite
                  autoPlay
                  autoPlaySpeed={3000}
                  transitionDuration={500}
                  className="carrusel"
                  itemClass="carousel-item-padding-40-px"
                >
                  {homeLogos2.map((image2: any, index:number) => {
                    const imageUrl = `https:${image2.fields.file.url}`;
                    console.log(`Imagen ${index}:`, imageUrl); // Debug
                    
                    return (
                      <div key={`${image2.fields.title}-${index}`}>
                        <img
                          src={imageUrl}
                          alt={image2.fields.title || `Logo ${index + 1}`}
                          style={{
                            width: "100px",
                            height: "50px",
                            borderRadius: "30px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    );
                  })}
                </Carousel>
            </CarouselWrapper>
          </CarouselContainer>
        </Container>

    </div>
  );
}
