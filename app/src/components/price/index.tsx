import styled from 'styled-components';
import mediaQuery from '@/utils/units/mediaQuery';
import priceImg from '@/assets/images/price.jpeg';

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
`;

const Price = () => {
  return (
    <ContainerWrapper>
      <img src={priceImg} alt="price-img" loading="lazy" />
    </ContainerWrapper>
  );
};

export default Price;
