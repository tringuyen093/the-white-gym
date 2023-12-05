import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import mediaQuery from '@/utils/units/mediaQuery';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import slider1 from '@/assets/images/slider-1.jpeg';
import slider2 from '@/assets/images/slider-2.jpeg';
import slider3 from '@/assets/images/slider-3.jpeg';

const ContainerWrapper = styled.div`
  padding: 0 var(--space-3xl);
  margin: var(--space-3xl) auto;
  height: calc(100% - 100px);

  ${mediaQuery['belowDesktop']} {
    margin: 0 var(--space-3xl);
  }

  ${mediaQuery['belowTablet']} {
    margin: 0 var(--space-xl);
    padding: 0;
  }

  .home-wrapper {
    display: flex;
    width: 100%;
    height: 100%;

    .content-left {
      flex: 0 0 30%;
      display: flex;
      align-items: flex-end;

      span {
        font-family: 'CaslonTwoBlackSSK';
        font-size: 270px;
        line-height: normal;
        color: black;
        margin-bottom: var(--space-2xl);
      }
    }

    .content-right {
      display: flex;
      align-items: center;
      overflow-x: auto;
      overflow-y: hidden;
      margin-left: -50px;

      .swiper-nav-btn {
        margin-right: var(--space-4xs);
        margin-bottom: 15vh;
        cursor: pointer;

        .nav-next {
          border: 2px solid #e6e6e6;
          border-top: 2px solid #444;
          border-right: 2px solid #444;
          border-radius: 50%;
          width: 90px;
          height: 90px;
          font-size: var(--font-size-lg);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: all 300ms ease;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }

    .swiper {
      margin: 0;
      height: 100%;

      .swiper-slide {
        width: fit-content !important;
        margin-left: 90px;

        img {
          width: 100%;
          height: calc(100% - 150px);
        }
      }
    }
  }
`;

const SliderContent = styled.div`
  width: 30vw;
  height: 100%;
  text-align: left;
  font-family: 'UKIJ Tuz Tor';

  img {
    object-fit: cover;
  }

  .title {
    text-transform: uppercase;
    font-size: var(--font-size-lg);
    margin-top: var(--space-xs);
    margin-bottom: var(--space-4xs);
  }

  .description {
    margin: var(--space-xs);
    font-size: 40px;
  }
`;

const items = [
  {
    url: slider1,
    title: 'Portrait',
    description: 'Khoa Nguyen',
  },
  {
    url: slider2,
    title: 'Editorial',
    description: 'Untitled',
  },
  {
    url: slider3,
    title: 'Emotional',
    description: 'Unknown',
  },
  {
    url: slider2,
    title: 'Traditional',
    description: 'Unknown',
  },
];

const Home = () => {
  const sliderRef = useRef(null);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <ContainerWrapper>
      <div className="home-wrapper">
        <div className="content-left">
          <span>Gym.</span>
        </div>

        <div className="content-right">
          <div className="swiper-nav-btn">
            <div className="nav-next" onClick={handleNext}>
              Slide
            </div>
          </div>
          <Swiper slidesPerView="auto" loop={true} className="slide-swiper" ref={sliderRef}>
            {items.map(({ title, url, description }, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <SliderContent>
                    <img src={url} alt={title} />
                    <h3 className="title">{title}</h3>
                    <span href={url} className="description">
                      {description}
                    </span>
                  </SliderContent>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Home;
