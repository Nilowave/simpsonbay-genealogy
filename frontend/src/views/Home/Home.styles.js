import styled from "vue3-styled-components";
import Flipbook from "../../components/Flipbook/Flipbook";
import {
  SecondaryButton,
  PrimaryButton,
} from "../../components/Buttons/Buttons.styles";

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
  position: absolute;
  top: 2.2rem;
  left: 2rem;

  svg {
    width: 100%;
  }
`;

export const UsernameWrapper = styled.div`
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5rem;
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
`;

export const ActionBar = styled.div`
  width: 100%;
  padding: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 1rem 1rem 0 0;
  gap: 2rem;
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

  transition: color 0.2s ease-out, background-color 0.2s ease-out,
    opacity 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.grey};
    border-color: ${({ theme }) =>
      theme.utils.hexToRgba(theme.colors.grey, 0.3)};
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const DownloadButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.crimson};
  margin-left: auto;
  width: auto;
`;

export const CommentsButton = styled(PrimaryButton)`
  margin-right: auto;
  width: auto;
`;
