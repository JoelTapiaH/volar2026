import React from "react";
import useContentful from "../../../utils/useContentful";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
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
    homeLogos2: ContentfulImage[];
  };
}

export default function Clients2() {
  const { data } = useContentful({ id: HomeID });
  const carouselRef = React.useRef<Carousel>(null);

  if (!data || !(data as any).fields) {
      return null;
    }

  const { homeLogos2  } = data.fields;


  return (
        <Container>
          <CarouselContainer>
            <CarouselWrapper>
              <div dir="rtl">
                <Carousel
                  ref={carouselRef}
                  responsive={responsive}
                  infinite
                  autoPlay rtl
                  autoPlaySpeed={3000}
                  transitionDuration={500}
                  className="carrusel"
                  itemClass="carousel-item-padding-40-px"
                  
                >
                  {homeLogos2.map((image: any, index:number) => {
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
                </div>
            </CarouselWrapper>
          </CarouselContainer>
        </Container>

  );
}