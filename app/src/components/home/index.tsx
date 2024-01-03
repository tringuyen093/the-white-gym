import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import useResize from '@/hooks/useResize';
import mediaQuery from '@/utils/units/mediaQuery';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slider1 from '@/assets/images/equipments/1.jpg';
import slider2 from '@/assets/images/equipments/6.jpeg';
import slider3 from '@/assets/images/equipments/5.jpg';
import slider4 from '@/assets/images/equipments/2.jpeg';

const ContainerWrapper = styled.div`
  padding: 0 var(--space-3xl);
  margin: var(--space-3xl) auto;
  height: calc(100% - 100px);

  .home-wrapper {
    display: flex;
    width: 100%;
    height: 100%;

    .content-left {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      span {
        font-family: 'CaslonTwoBlackSSK';
        font-size: 150px;
        line-height: 130px;
        color: black;
        margin-bottom: var(--space-3xl);
      }

      .title-and {
        font-size: 80px;
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
          transition: all 300ms ease;

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
        margin-left: 90px;

        img {
          width: 100%;
          height: calc(100% - 150px);
        }
      }
    }
  }

  ${mediaQuery['aboveDesktop']} {
    .swiper {
      .swiper-slide {
        width: fit-content !important;
      }
    }
  }

  ${mediaQuery['belowBiggerDesktop']} {
    margin: var(--space-2xl) var(--space-3xl);
    padding: 0;

    .home-wrapper {
      .content-left {
        span {
          font-size: 120px;
          line-height: 130px;
        }
      }

      .swiper {
        .swiper-slide {
          margin-left: 60px;
        }
      }
    }
  }

  ${mediaQuery['belowDesktop']} {
    margin: var(--space-3xl);
    height: calc(100% - 100px);

    .home-wrapper {
      flex-direction: column;

      .content-left {
        flex: unset;

        span {
          font-size: 80px;
          line-height: normal;
          margin-bottom: var(--space-2xl);
        }

        .title-and {
          font-size: 40px;
        }
      }

      .content-right {
        flex: 1;
        margin-left: 0px;
      }

      .swiper-nav-btn {
        display: none;
      }

      .swiper {
        .swiper-slide {
          margin-left: 0px;
          img {
            height: 100%;
          }
        }
      }
    }
  }

  ${mediaQuery['belowTablet']} {
    margin: var(--space-2xl) var(--space-lg) var(--space-lg);
    height: calc(100% - 60px);

    .home-wrapper {
      .content-left {
        span {
          font-size: 60px;
          margin-bottom: var(--space-lg);
        }
      }
    }
  }
`;

const SliderContent = styled.div`
  width: auto;
  height: 100%;
  text-align: left;
  font-family: 'UKIJ Tuz Tor';
  aspect-ratio: 9 / 16;

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

  ${mediaQuery['belowDesktop']} {
    width: 100%;
    .title,
    .description {
      display: none;
    }
  }
`;

const items = [
  {
    url: slider1,
    title: 'Plate',
    description: 'Calibrated Plate',
  },
  {
    url: slider2,
    title: 'Plate',
    description: 'Calibrated Plate',
  },
  {
    url: slider3,
    title: 'Plate',
    description: 'Calibrated Plate',
  },
  {
    url: slider4,
    title: 'Bar',
    description: 'Power Bar',
  },
];

const defaultConfigs = {
  loop: true,
  slidesPerView: 'auto',
};

const paginationConfigs = {
  modules: [Autoplay],
};

const Home = () => {
  const sliderRef = useRef(null);
  const { isMobile, isTable } = useResize();

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const slideConfigs = useCallback(() => {
    const configs = { ...defaultConfigs, ...paginationConfigs };

    if (isTable) {
      return {
        ...configs,
        slidesPerView: 2,
        spaceBetween: 45,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      };
    }

    if (isMobile) {
      return {
        ...configs,
        slidesPerView: 1,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      };
    }
    return configs;
  }, [isMobile, isTable]);

  return (
    <ContainerWrapper>
      <div className="home-wrapper">
        <div className="content-left">
          <div>
            <span>Health</span>
            <span className="title-and">&nbsp;&</span>
          </div>

          <span>Fitness</span>
        </div>

        <div className="content-right">
          <div className="swiper-nav-btn">
            <div className="nav-next" onClick={handleNext}>
              Slide
            </div>
          </div>

          <Swiper {...slideConfigs()} className="slide-swiper" ref={sliderRef}>
            {items.map(({ title, url, description }, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <SliderContent>
                    <img src={url} alt={title} loading="lazy" />
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
