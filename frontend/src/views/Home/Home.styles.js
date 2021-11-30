import styled from "vue3-styled-components";
import Flipbook from "../../components/Flipbook/Flipbook";
import {
  SecondaryButton,
  PrimaryButton,
  Flex,
} from "../../components/Atoms/Atoms.styles";
import { fadeIn } from "../../styles/transitions";
import { respondTo } from "../../styles/helpers/respondTo";
import {
  MediaQuery,
  MediaQueryHeight,
  Orientation,
} from "../../styles/mediaQuery";

export const Home = styled.main`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  overflow: hidden;
`;

export const Background = styled.div`
  background: url("/images/login-bg.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  mix-blend-mode: multiply;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 70%;
    background: transparent
      linear-gradient(180deg, #efdbce 0%, #efdbce 0%, #efdbce00 100%) 0% 0%
      no-repeat padding-box;
    mix-blend-mode: screen;
  }
`;

export const Logo = styled.div`
  max-width: 14.3rem;
  width: 25%;
  position: absolute;
  top: 2.2rem;
  left: ${({ theme }) => theme.sitePaddings.mobile};

  svg {
    width: 100%;
  }

  @media ${respondTo(MediaQueryHeight.MAX_767, Orientation.landscape)} {
    max-width: 10rem;
  }

  @media ${respondTo(MediaQueryHeight.MAX_479, Orientation.landscape)} {
    path {
      &:last-of-type {
        display: none;
      }
    }
  }
`;

export const UsernameWrapper = styled.div`
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5rem ${({ theme }) => theme.sitePaddings.mobile};
  z-index: 10;

  @media ${respondTo(MediaQueryHeight.MAX_767, Orientation.landscape)} {
    display: none;
  }
`;

export const Username = styled.p`
  span {
    font-style: italic;
    font-weight: 600;
  }
`;

export const LogoutButton = styled(SecondaryButton)`
  padding: 0;
  text-align: right;
  width: auto;
  font-size: 1.6rem;
  display: inline;
`;

export const StyledFlipbook = styled(Flipbook)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  animation: ${fadeIn} 2s ease forwards;

  @media ${respondTo(MediaQueryHeight.MAX_479, Orientation.landscape)} {
    flex-direction: row;
    gap: 0rem;
    /* flex-wrap: wrap; */
  }
`;

export const ActionBar = styled.div`
  width: 100%;
  padding: 1.3rem ${({ theme }) => theme.sitePaddings.mobile};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  border-radius: 1rem 1rem 0 0;
  gap: 2rem;
  margin-top: 1rem;

  @media ${respondTo(MediaQuery.MIN_768)} {
    justify-content: center;
  }

  @media ${respondTo(MediaQueryHeight.MAX_479, Orientation.landscape)} {
    flex-direction: column;
    width: auto;
    height: 100%;
    border-radius: 0;
    padding: 0.5rem;
    position: relative;
    z-index: 1;
  }
`;

export const ControlSet = styled(Flex)`
  flex-direction: column;

  &:first-of-type {
    flex-direction: column-reverse;

    @media ${respondTo(MediaQuery.MIN_768)} {
      flex-direction: row;
    }
  }

  @media ${respondTo(MediaQuery.MIN_768)} {
    flex-direction: row;
  }

  @media ${respondTo(MediaQueryHeight.MAX_479, Orientation.landscape)} {
    flex-direction: column !important;
  }
`;

export const ControlButton = styled.button`
  border-radius: 2.7rem;
  border: solid 1px
    ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.3)};
  display: flex;
  padding: 1.8rem 2.6rem;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 600;
  min-height: 5.6rem;

  transition: all 0.7s cubic-bezier(0.16, 1.52, 0.3, 1);

  &:active {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  > div {
    transition: all 0.7s cubic-bezier(0.16, 1.52, 0.3, 1);
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.5);

      > div {
        transform: translate(3px, 3px);
      }
    }
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.grey};
    border-color: ${({ theme }) =>
      theme.utils.hexToRgba(theme.colors.grey, 0.3)};
    pointer-events: none;
    opacity: 0.5;
  }

  @media ${respondTo(MediaQueryHeight.MAX_767, Orientation.landscape)} {
    span {
      display: none;
    }
  }

  @media ${respondTo(MediaQuery.MAX_479)} {
    span {
      display: none;
    }
  }
`;

export const DownloadButton = styled(PrimaryButton)`
  margin-left: auto;
  width: auto;
  position: absolute;
  right: ${({ theme }) => theme.sitePaddings.mobile};
  bottom: 21.3rem;

  @media ${respondTo(MediaQuery.MIN_768)} {
    bottom: 13.7rem;
  }

  @media only screen and (min-width: 1230px) {
    position: static;
  }

  @media ${respondTo(MediaQueryHeight.MAX_767, Orientation.landscape)} {
    display: none;
  }
`;

export const CommentsButton = styled(PrimaryButton)`
  margin-right: auto;
  width: auto;
  position: absolute;
  right: ${({ theme }) => theme.sitePaddings.mobile};
  bottom: 27.3rem;

  @media only screen and (min-width: 520px) {
    bottom: 21.3rem;
    left: ${({ theme }) => theme.sitePaddings.mobile};
    right: auto;
  }

  @media ${respondTo(MediaQuery.MIN_768)} {
    bottom: 13.7rem;
  }

  @media only screen and (min-width: 1230px) {
    position: static;
  }

  @media ${respondTo(MediaQueryHeight.MAX_767, Orientation.landscape)} {
    display: none;
  }
`;

export const PolicyBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-top: dashed 1px ${({ theme }) => theme.colors.lightgrey};

  @media ${respondTo(MediaQueryHeight.MAX_767, Orientation.landscape)} {
    display: none;
  }
`;
