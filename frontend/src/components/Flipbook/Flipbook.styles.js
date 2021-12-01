import styled, { css } from "vue3-styled-components";
import { respondTo } from "../../styles/helpers/respondTo";
import { MediaQueryHeight, Orientation } from "../../styles/mediaQuery";

export const Viewport = styled("div", { dragToScroll: Boolean, zoom: Boolean })`
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100%;
  width: 90vw;
  height: calc(100vh - 200px);

  @media ${respondTo(MediaQueryHeight.MAX_479, Orientation.landscape)} {
    height: calc(100vh - 2rem);
  }
  ${({ zoom }) =>
    zoom &&
    css`
      overflow: scroll
        ${({ dragToScroll }) => dragToScroll && "overflow: hidden"};
    `};
`;

export const FlipbookContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: top left;
  user-select: none;
  z-index: 10;
`;

export const ClickToFlip = styled("button", { direction: String })`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  user-select: none;

  ${({ direction }) => (direction === "left" ? "left: 0" : "right: 0")};
`;

export const BoundingBox = styled.div`
  position: absolute;
  user-select: none;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.green};
`;

export const Page = styled.img`
  position: absolute;
  backface-visibility: hidden;
`;

export const Polygon = styled("div", { isBlank: Boolean })`
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  transform-origin: center left;

  ${({ isBlank }) => isBlank && "background-color: #ddd"};
`;

export const Lighting = styled.div`
  width: 100%;
  height: 100%;
`;
