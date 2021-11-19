import styled from "vue3-styled-components";
import Flipbook from "../../components/Flipbook/Flipbook";
import {
  SecondaryButton,
  PrimaryButton,
  Flex,
} from "../../components/Atoms/Atoms.styles";
import { fadeIn } from "../../styles/transitions";

const sidePadding = "2rem";

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
  /* opacity: 0.75; */
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
  left: ${sidePadding};

  svg {
    width: 100%;
  }
`;

export const UsernameWrapper = styled.div`
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5rem ${sidePadding};
  z-index: 99;
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
`;

export const ActionBar = styled.div`
  width: 100%;
  padding: 1.3rem ${sidePadding};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  border-radius: 1rem 1rem 0 0;
  gap: 2rem;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const ControlSet = styled(Flex)`
  flex-direction: column;

  &:first-of-type {
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
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
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 5.6rem;

  transition: color 0.2s ease-out, background-color 0.2s ease-out,
    opacity 0.2s ease-out;

  &:active {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.grey};
    border-color: ${({ theme }) =>
      theme.utils.hexToRgba(theme.colors.grey, 0.3)};
    pointer-events: none;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export const DownloadButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.crimson};
  margin-left: auto;
  width: auto;
  position: absolute;
  right: ${sidePadding};
  bottom: 21.3rem;

  @media (min-width: 768px) {
    bottom: 13.7rem;
  }

  @media (min-width: 1230px) {
    position: static;
  }
`;

export const CommentsButton = styled(PrimaryButton)`
  margin-right: auto;
  width: auto;
  position: absolute;
  right: ${sidePadding};
  bottom: 27.3rem;

  @media (min-width: 520px) {
    bottom: 21.3rem;
    left: ${sidePadding};
    right: auto;
  }

  @media (min-width: 768px) {
    bottom: 13.7rem;
  }

  @media (min-width: 1230px) {
    position: static;
  }
`;

export const PolicyBar = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.green};
  padding: 1rem ${sidePadding};
  width: 100%;
  border-top: dashed 1px ${({ theme }) => theme.colors.lightgrey};
`;
