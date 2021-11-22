import styled, { css, keyframes } from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";
import { PrimaryButton, Flex, Text } from "../../components/Atoms/Atoms.styles";
import { fadeIn } from "../../styles/transitions";

export const PageWrapper = styled.main`
  height: 100%;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 33%;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  opacity: 0.25;
  background: url("/images/login-bg.jpg") no-repeat;
  position: absolute;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const GreenOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 33vh;
  mix-blend-mode: multiply;
  top: 0;
  left: 0;
  position: relative;

  @media (min-width: 768px) {
    position: absolute;
    width: 50%;
    height: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.offwhite};
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    border-radius: 1.5rem;
    width: 90%;
    height: 90%;
    max-width: 160rem;
    max-height: 90rem;
  }
`;

export const StyledPicture = styled.div`
  width: 83%;
  padding-bottom: 48.9%;
  background: url("/images/logo-icon.svg") center no-repeat;
  background-size: 20%;
  border-radius: 0 1.5rem 1.5rem 0;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  margin-top: -25%;

  @media (min-width: 768px) {
    background: url("/images/logo-sbg.svg") center no-repeat;
    background-size: 20%;
    border-radius: 1.5rem 0 0 1.5rem;
    padding: 0;
    width: 50%;
    height: 100%;
    margin: 0;
  }

  &:hover {
    p {
      opacity: 1;
    }
  }
`;

export const IntroVideo = styled("video", { isReady: Boolean })`
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;

  ${(props) => props.isReady && `animation: ${fadeIn} 2s ease forwards;`};
`;

export const IntroWrapper = styled.div`
  ${typestyles.bodyMedium};
  width: 100%;
  color: ${({ theme }) => theme.colors.crimson};
  white-space: break-spaces;
  text-align: justify;
  position: relative;
  overflow-y: auto;

  @media (min-width: 768px) {
    max-height: 88%;
    max-width: 56rem;
  }
`;

export const Wrapper = styled(Flex)`
  width: 100%;
  text-align: center;
  flex: 1;
  position: relative;
  gap: 4rem;
  padding-bottom: 7rem;
  margin-top: 4rem;

  @media (min-width: 590px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    padding-bottom: 0;
    gap: 1rem;
  }
`;

export const IntroFlex = styled(Flex)`
  gap: 4rem;
  @media (min-width: 768px) {
    gap: 0;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    padding: 5%;
  }

  @media (min-width: 1200px) {
    padding: 6rem;
  }
`;

export const LogoMobile = styled.div`
  max-width: 20rem;
  width: 50%;
  display: block;
  margin: 0 auto;
  color: white;
  position: relative;
  top: 30%;
  transform: translateY(-50%);

  @media (min-width: 590px) {
    display: none;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.green};
  margin: 5% 0 5%;
  display: none;
  max-width: 29rem;
  width: 50%;

  @media (min-width: 590px) {
    display: block;
  }
  @media (min-width: 768px) {
    margin: 2.5% 0 9%;
  }
`;

export const Heading = styled.h2`
  ${typestyles.h2};
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  ${typestyles.body};
  color: ${({ theme }) => theme.colors.green};
  font-style: italic;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
  gap: 4rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled("input", { preset: Boolean })`
  ${typestyles.input};
  width: 100%;
  border: solid 1px
    ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.2)};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};

  ${(props) =>
    props.preset &&
    css`
      border: solid 2px;
      border-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.green};
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Error = styled.p`
  ${typestyles.error};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  width: 100%;
  margin: 0.5rem;
  animation: ${fadeIn} 0.5s ease;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ContinueButton = styled(PrimaryButton)`
  max-width: 28rem;
`;

export const FeatherWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: -3rem;
  left: -5%;
  opacity: 0.25;
  width: 20%;
  max-width: 9rem;

  @media (min-width: 590px) {
    left: -4%;
    top: -6%;
  }
`;

export const PolicyBarWrapper = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.offwhite};
  border-top: dashed 1px
    ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.5)};

  @media (min-width: 768px) {
    max-width: 160rem;
    width: 90%;
    position: absolute;
    background-color: transparent;
    border: none;
  }
`;

export const VideoCredit = styled(Text)`
  position: absolute;
  color: ${({ theme }) => theme.colors.offwhite};
  left: 1rem;
  bottom: 1rem;
  opacity: 0;
  transition: opacity 0.5s ease;

  @media (min-width: 768px) {
    left: 2rem;
    bottom: 2rem;
  }

  a {
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
`;
