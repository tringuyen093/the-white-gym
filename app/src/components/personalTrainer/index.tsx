import styled from 'styled-components';
import mediaQuery from '@/utils/units/mediaQuery';
import ptPriceImg from '@/assets/images/prices/pt-price.jpg';

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
    object-fit: contain;
  }
`;

const PersonalTrainer = () => {
  return (
    <ContainerWrapper>
      <img src={ptPriceImg} alt="price-img" loading="lazy" />
    </ContainerWrapper>
  );
};

export default PersonalTrainer;
