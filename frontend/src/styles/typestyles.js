import { css } from "vue-styled-components";

export const typestyles = {
  h2: css`
    font-size: 3.2rem;
    line-height: 1.2;
    font-family: ${({ theme }) => theme.fonts.baskerville};
    font-weight: 700;
  `,
  bodyBold: css`
    --fs-min: var(--font-size-16);
    --fs-val: 1.12vw;
    --fs-max: var(--font-size-18);
    font-size: clamp(var(--fs-min), var(--fs-val), var(--fs-max));
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1.2;
    font-weight: 600;
    font-style: normal;
  `,
  body: css`
    --fs-min: var(--font-size-16);
    --fs-val: 1.12vw;
    --fs-max: var(--font-size-18);
    font-size: clamp(var(--fs-min), var(--fs-val), var(--fs-max));
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1.2;
    font-weight: 400;
    font-style: normal;
  `,
  bodyMedium: css`
    --fs-min: calc(14 / 16 * 1rem);
    --fs-val: 1vw;
    --fs-max: var(--font-size-16);
    font-size: clamp(var(--fs-min), var(--fs-val), var(--fs-max));
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1.5;
    font-weight: 400;
    font-style: normal;
  `,
  bodySmall: css`
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1.2;
    font-weight: 400;
    font-style: normal;
  `,
  note: css`
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1.2;
    font-weight: 400;
    font-style: italic;
  `,
  button: css`
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1;
    font-weight: 600;
    font-style: normal;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  `,
  error: css`
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.gillSans};
    line-height: 1;
    font-weight: 600;
    font-style: normal;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  `,
  input: css`
    font-size: 2.4rem;
    line-height: 1.14;
    font-family: ${({ theme }) => theme.fonts.baskerville};
    font-weight: 400;
    font-style: italic;
  `,
  disclaimer: css`
    font-size: 1.2rem;
    /* line-height: 1; */
    font-family: ${({ theme }) => theme.fonts.gillSans};
    font-weight: 400;
    font-style: italic;
  `,
};
