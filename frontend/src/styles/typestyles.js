import { css } from "vue-styled-components";

export const typestyles = {
  h2: css`
    font-size: 3.2rem;
    line-height: 1.2;
    font-family: ${({ theme }) => theme.fonts.baskerville};
    font-weight: 700;
  `,
  body: css`
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1.2;
    font-weight: 400;
    font-style: normal;
  `,
  button: css`
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1;
    font-weight: 600;
    font-style: normal;
  `,
  input: css`
    font-size: 2.4rem;
    line-height: 1.14;
    font-family: ${({ theme }) => theme.fonts.baskerville};
    font-weight: 400;
    font-style: italic;
  `,
};
