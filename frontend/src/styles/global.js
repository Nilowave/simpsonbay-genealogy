import { normalize } from "polished";
import { injectGlobal } from "vue-styled-components";
import { theme } from "./theme";
import { typestyles } from "./typestyles";
import { transitions } from "./transitions";

injectGlobal`
	${normalize()};
	${transitions};

  :root {
    --shadow-color: 166deg 60% 22.5%;
    --shadow-elevation-low:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    --shadow-elevation-high:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
  }

	html {
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    ${typestyles.body};
    font-family: ${theme.fonts.gillSans};
    font-size: 1.6rem;
    background-color: ${theme.colors.cream};
    color: ${theme.colors.black};
  }

  html, body {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: inherit;
  }

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 100%;
    font-weight: normal;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  input,
  select {
    border: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  .mirror {
    transform: scaleX(-1);
  }

  .large {
    font-family: ${theme.fonts.baskerville};
    ${typestyles.h2};
    font-weight: 700;
    margin-left: 2rem;
  }

  .icon-16 {
    width: 1.4rem;
    flex-shrink: 1;
    
    @media (min-width: 768px) {
      width: 1.6rem;
    }
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  *::-webkit-scrollbar-thumb {
    background: ${theme.colors.green};
    border-radius: 0.5rem;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-corner { background: transparent; }
`;
