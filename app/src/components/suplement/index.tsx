import styled from 'styled-components';
import mediaQuery from '@/utils/units/mediaQuery';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import suplement1 from '@/assets/images/suplements/1.png';
import suplement2 from '@/assets/images/suplements/2.png';
import suplement3 from '@/assets/images/suplements/3.png';
import suplement4 from '@/assets/images/suplements/4.png';
import suplement5 from '@/assets/images/suplements/5.png';
import suplement6 from '@/assets/images/suplements/6.png';
import suplement7 from '@/assets/images/suplements/7.png';
import suplement8 from '@/assets/images/suplements/8.png';
import suplement9 from '@/assets/images/suplements/9.png';
import suplement10 from '@/assets/images/suplements/10.png';
import suplement11 from '@/assets/images/suplements/11.png';
import suplement12 from '@/assets/images/suplements/12.png';
import suplement13 from '@/assets/images/suplements/13.png';
import suplement14 from '@/assets/images/suplements/14.png';

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

  img {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: 100%;

    img {
      object-fit: cover;
    }
  }
`;

const suplements = [
  suplement1,
  suplement2,
  suplement3,
  suplement4,
  suplement5,
  suplement6,
  suplement7,
  suplement8,
  suplement9,
  suplement10,
  suplement11,
  suplement12,
  suplement13,
  suplement14,
];

const Suplement = () => {
  return (
    <ContainerWrapper>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        navigation={true}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Navigation]}
        className="suplement-swiper"
      >
        {suplements.map((url, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={url} alt={url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ContainerWrapper>
  );
};

export default Suplement;
