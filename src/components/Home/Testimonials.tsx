"use client";
import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useContentful from "../../../utils/useContentful";
import styled from "styled-components";
import Testimonial from "./Testimonial";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

interface TestimonialProps {
  id?: string;
}

interface QuoteImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface TestimonialCard {
  fields: {
    quoteImg: QuoteImage;
    quote: string;
    quoteColor: string;
    quotePosition: string;
    quoteName: string;
  };
}

interface TestimonialData {
  fields: {
    homeTestimonies: TestimonialCard[];
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
  width: 1440px;
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
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const SliderTestimonials = ({ id }: TestimonialProps) => {
  const { data } = useContentful({ id: HomeID });
  const carouselRef = React.useRef<Carousel>(null);

  if (!data || !data.fields) {
    return null;
  }

  const { homeTestimonies } = data.fields;

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
    <section id={id} >
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
            {homeTestimonies &&
              homeTestimonies.map((card:any, index:number) => {
                const imgUrl = card.fields.testimonyImg.fields.file.url;
                const text = card.fields.testimonyText;
                return (
                  <Testimonial
                    key={index}
                    color={card.fields.testimonyColor}
                    img={imgUrl}
                    text={text}
                    position={card.fields.testimonyJob}
                    author={card.fields.testimonyName}
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
  );
};