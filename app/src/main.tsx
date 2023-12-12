/* eslint-disable react-refresh/only-export-components */
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyle } from '@/globalStyle';
import { Helmet } from 'react-helmet';
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

const toAbsoluteUrl = (relativeUrl: string) => {
  return window.location.protocol + '//' + window.location.host + relativeUrl;
};

const Loading = () => {
  return <LoadingWrapper />;
};

const RootApp = () => {
  return (
    <>
      <Global styles={[GlobalStyle, style]} />
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/src/assets/images/thewhitegym-logo-full.jpeg"
        />
        <meta property="og:URL" key="og:URL" content="https://imgur.com/bKNCVZE" />
        <meta property="og:image" key="og:image" content="https://imgur.com/bKNCVZE" />
        <meta property="og:type" key="og:type" content="article" />
        <meta property="og:title" key="og:title" content="The White Gym" />
        <meta property="og:description" key="og:description" content="Health & Fitness" />
        <title>The White Gym</title>
      </Helmet>

      <BrowserRouter>
        <Header />

        <MainWrapper>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </MainWrapper>
      </BrowserRouter>
    </>
  );
};

root.render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
);
