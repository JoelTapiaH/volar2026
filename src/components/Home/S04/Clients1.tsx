import React from "react";
import useContentful from "../../../../utils/useContentful";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HomeID = "1DOSrCFPzlUZug4YeXOkcs";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2em;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContentfulImage {
  fields: {
    file: { url: string };
    title: string;
  };
}

export default function Clients1() {
  const { data } = useContentful({ id: HomeID });

  if (!data || !(data as any).fields) return null;

  const { homeLogos1 } = data.fields;
  const slides = [...homeLogos1, ...homeLogos1, ...homeLogos1];

  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={10}
        style={{ width: '100%' }}
        breakpoints={{
          0:    { slidesPerView: 1 },
          464:  { slidesPerView: 2 },
          768:  { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {slides.map((image: ContentfulImage, index: number) => (
          <SwiperSlide key={`${image.fields.title}-${index}`}>
            <Img>
              <img
                src={`https:${image.fields.file.url}`}
                alt={image.fields.title || `Logo ${index + 1}`}
                style={{ width: "100%", height: "150px", objectFit: "scale-down" }}
              />
            </Img>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
