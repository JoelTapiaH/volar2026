"use client";
import * as React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useContentful from "../../../../utils/useContentful";
import Testimonial from "./Testimonial";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

interface TestimonialProps {
  id?: string;
}

interface TestimonialCard {
  fields: {
    testimonyImg: { fields: { file: { url: string } } };
    testimonyText: string;
    testimonyColor: string;
    testimonyJob: string;
    testimonyName: string;
  };
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2em;
  overflow: hidden;
`;

export const SliderTestimonials = ({ id }: TestimonialProps) => {
  const { data } = useContentful({ id: HomeID });

  if (!data || !data.fields) return null;

  const { homeTestimonies } = data.fields;

  return (
    <section id={id} style={{ width: "100%", overflow: "hidden" }}>
      <Wrapper>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0:    { slidesPerView: 1 },
            800:  { slidesPerView: 2 },
            1170: { slidesPerView: 3 },
          }}
        >
          {homeTestimonies &&
            homeTestimonies.map((card: any, index: number) => {
              const imgUrl = card.fields.testimonyImg.fields.file.url;
              const text = card.fields.testimonyText;
              return (
                <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
                  <Testimonial
                    color={card.fields.testimonyColor}
                    img={imgUrl}
                    text={text}
                    position={card.fields.testimonyJob}
                    author={card.fields.testimonyName}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Wrapper>
    </section>
  );
};
