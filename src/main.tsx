/* eslint-disable react-refresh/only-export-components */
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyle } from '@/globalStyle';
import styled from 'styled-components';
import style from '@/style';
import App from '@/App.tsx';
import Header from '@/components/header';
import mediaQuery from '@/utils/units/mediaQuery';
import './style.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const MainWrapper = styled.div`
  padding-top: 100px;
  height: calc(100vh - 100px);

  ${mediaQuery['belowTablet']} {
    padding-top: 60px;
    height: calc(100vh - 60px);
  }
`;

const LoadingWrapper = styled.div`
  height: calc(100vh - 100px);

  ${mediaQuery['belowTablet']} {
    height: calc(100vh - 60px);
  }
`;

const Loading = () => {
  return <LoadingWrapper />;
};

root.render(
  <StrictMode>
    <Global styles={[GlobalStyle, style]} />
    <BrowserRouter>
      <Header />

      <MainWrapper>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </MainWrapper>
    </BrowserRouter>
  </StrictMode>,
);
