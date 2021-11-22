import styled, { keyframes } from "vue3-styled-components";

const size = "1.5rem";

const load7 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const Loader = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-size: 10px;
  margin: 0px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  top: -2.5rem;

  &:before,
  &:after,
  & {
    border-radius: 50%;
    width: ${size};
    height: ${size};
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${load7} 1.8s infinite ease-in-out;
    animation: ${load7} 1.8s infinite ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }

  &:before {
    left: ${`calc((${size} + 1rem) * -1)`};
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: ${`calc(${size} + 1rem)`};
  }
`;
