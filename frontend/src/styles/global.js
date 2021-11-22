import { normalize } from "polished";
import { injectGlobal } from "vue-styled-components";
import { theme } from "./theme";
import { typestyles } from "./typestyles";
import { transitions } from "./transitions";

injectGlobal`
	${normalize()};
	${transitions};

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
