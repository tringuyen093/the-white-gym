import styled from 'styled-components';
import mediaQuery from '@/utils/units/mediaQuery';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import dumbbell1 from '@/assets/images/dumbbells/1.jpeg';
import dumbbell2 from '@/assets/images/dumbbells/2.jpg';
import equipment1 from '@/assets/images/equipments/1.jpg';
import equipment2 from '@/assets/images/equipments/2.jpeg';
import equipment3 from '@/assets/images/equipments/3.jpg';
import equipment4 from '@/assets/images/equipments/4.jpg';
import equipment5 from '@/assets/images/equipments/5.jpg';
import equipment6 from '@/assets/images/equipments/6.jpeg';

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

  .swiper {
    margin: 0;
    height: 100%;

    .swiper-slide {
      height: 100%;
      aspect-ratio: 9 / 16;

      img {
        object-fit: cover;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-gray-500);
  }
`;

const equipments = [
  dumbbell1,
  dumbbell2,
  equipment1,
  equipment2,
  equipment3,
  equipment4,
  equipment5,
  equipment6,
];

const Equipment = () => {
  return (
    <ContainerWrapper>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="suplement-swiper"
      >
        {equipments.map((url, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={url} alt={url} loading="lazy" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ContainerWrapper>
  );
};

export default Equipment;
