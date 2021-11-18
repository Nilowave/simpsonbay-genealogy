import styled from "vue3-styled-components";
import { Flex, Text } from "../Atoms/Atoms.styles";
import CommentIcon from "../../assets/icons/comment.svg";
import { typestyles } from "../../styles/typestyles";

export const Wrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px 10px 0 0;
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  bottom: 0;
  left: 0;
  max-height: 46rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 520px) {
    width: 30%;
    min-width: 32rem;
    max-width: 45rem;
  }
`;

export const HeaderNav = styled(Flex)`
  padding: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightgrey};
`;

export const NavButtons = styled(Flex)``;

export const ArrowButton = styled.button`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.midgrey};
  transition: color 0.4s ease;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const HeaderTitle = styled(Text)`
  flex: 1;
  align-self: center;
`;

export const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0.4s ease;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const CommentsWrapper = styled(Flex)`
  padding: 3rem 1.5rem;
  overflow-y: auto;
  max-height: 30vh;

  &::after {
    content: "";
    display: block;
    height: 3rem;
    width: 100%;
  }
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const CommentItem = styled("li", { color: String })`
  padding-left: 3.4rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: solid 3px ${(props) => props.color};
    border-radius: 1rem;
    left: 1rem;
    top: 0.6rem;
  }
`;

export const StyledIcon = styled(CommentIcon)`
  width: 2.8rem;
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.2;
  transition: opacity 0.5s ease;
`;

export const InputWrapper = styled(Flex)`
  padding: 2.3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.metawhite};
  height: 8.3rem;

  &:focus-within {
    svg {
      opacity: 1;
    }
  }
`;

export const StyledTextarea = styled.textarea`
  ${typestyles.body};
  background: transparent;
  border: none;
  flex: 1;
  outline: none;
  border: solid 2px transparent;
  border-radius: 3px;
  resize: none;
  padding: 0.5rem;
  transition: border-color 0.5s ease;

  &:focus-visible {
    border: solid 2px
      ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.5)};
  }
`;
