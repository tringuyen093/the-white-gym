import { css } from '@emotion/react';
import '@/assets/fonts/Montserrat/stylesheet.css';
import '@/assets/fonts/UKIJTuzTor/stylesheet.css';
import '@/assets/fonts/CaslonTwoBlackSSK/stylesheet.css';

export const style = () =>
  css`
    :root {
      font-family: 'Montserrat Regular';
      line-height: 1.5;
      font-weight: 400;

      color-scheme: light dark;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    a {
      font-weight: 500;
      color: var(--color-gray-750);
      text-decoration: inherit;
      transition: all 200ms ease;
    }

    a:hover {
      opacity: 0.7;
    }

    body {
      margin: 0;
      width: 100vw;
      height: 100vh;
      background-color: var(--color-white);
      color: var(--color-gray-750);
      transition: all 200ms ease;
      box-sizing: border-box;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      :root {
        color: #213547;
        background-color: #ffffff;
      }
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;

export default style;
