import styled, { css } from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";
import { PrimaryButton, Flex } from "../../components/Atoms/Atoms.styles";

export const PageWrapper = styled.main`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background: url("/images/login-bg.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  opacity: 0.25;
`;

export const GreenOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 50%;
  height: 100%;
  position: absolute;
  mix-blend-mode: multiply;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 160rem;
  max-height: 90rem;
  width: 90%;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.offwhite};
  border-radius: 1.5rem;
`;

export const StyledPicture = styled.div`
  width: 50%;
  height: 100%;
  background: url("/images/bridge.jpg") no-repeat center;
  background-size: cover;
  border-radius: 1.5rem 0 0 1.5rem;
`;

export const IntroWrapper = styled.div`
  ${typestyles.bodyMedium};
  width: 100%;
  max-height: 88%;
  max-width: 56rem;
  color: ${({ theme }) => theme.colors.crimson};
  white-space: break-spaces;
  text-align: justify;
  position: relative;
  overflow-y: auto;
`;

export const Wrapper = styled(Flex)`
  width: 100%;
  text-align: center;
  flex: 1;
  position: relative;
`;

export const FlexWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;

  @media (min-width: 768px) {
    padding: 5%;
  }

  @media (min-width: 1200px) {
    padding: 6rem;
  }
`;

export const Logo = styled.img`
  max-width: 29rem;
  margin: 2.5% 0 9%;
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

export const StyledInput = styled.input`
  ${typestyles.input};
  width: 100%;
  border: solid 1px
    ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.2)};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.offwhite};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Error = styled.p`
  ${typestyles.button};
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  width: 100%;
  margin: 0.5rem;
`;

export const ContinueButton = styled(PrimaryButton)`
  max-width: 28rem;
`;

export const FeatherWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: -6%;
  left: -4%;
  /* transform: translate(0%, -30%); */
  opacity: 0.25;
  width: 20%;
  max-width: 9rem;
`;
