import styled from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";

export const Wrapper = styled.div`
  ${typestyles.body};

  h1 {
    ${typestyles.h2};
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.colors.green};
  }

  h2 {
    ${typestyles.h3};
    margin-bottom: 1rem;
  }

  p {
    ${typestyles.body};
    line-height: 1.5;
    margin-bottom: 3rem;
  }

  a {
    display: inline-block;
    text-decoration: underline;
  }

  ul {
    list-style-type: revert;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    line-height: 3rem;
  }
`;
