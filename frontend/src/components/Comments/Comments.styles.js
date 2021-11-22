import styled from "vue3-styled-components";
import { Flex } from "../Atoms/Atoms.styles";
import CommentIcon from "../../assets/icons/comment.svg";
import { typestyles } from "../../styles/typestyles";
import Notification from "../Notification/Notification";

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

export const NavButtons = styled(Flex)`
  flex-grow: 0;
`;

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

export const HeaderTitle = styled.h4`
  ${typestyles.bodyBold};
  flex: 1;
  align-self: center;
  margin-left: 2rem;
`;

export const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const CommentsWrapper = styled(Flex)`
  padding: 1rem 0;
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
`;

export const CommentItem = styled("li", { color: String, isAuthor: Boolean })`
  padding: 1.5rem;
  padding-left: 4rem;
  position: relative;
  ${({ isAuthor, theme }) => isAuthor && `color: ${theme.colors.green}`};
  ${({ isAuthor, theme }) =>
    isAuthor &&
    `background-color: ${theme.utils.hexToRgba(theme.colors.green, 0.05)}`};

  &:before {
    content: "";
    position: absolute;
    width: ${({ isAuthor }) => (isAuthor ? "2px" : "1rem")};
    height: ${({ isAuthor }) => (isAuthor ? "calc(100% - 3rem)" : "1rem")};
    border: ${({ isAuthor, color }) => !isAuthor && `solid 3px ${color}`};
    border-radius: 1rem;
    top: ${({ isAuthor }) => (isAuthor ? "1.5rem" : "2.1rem")};
    left: 2rem;
    ${({ isAuthor, color }) => isAuthor && `background-color: ${color}`};
  }

  transition: all 0.5s ease;
`;

export const StyledIcon = styled(CommentIcon)`
  width: 2.8rem;
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.2;
  transition: opacity 0.5s ease;
  margin-right: 1.5rem;
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
  border-radius: 6px;
  resize: none;
  padding: 0.5rem;
  transition: border-color 0.5s ease;

  &:focus-visible {
    border: solid 2px
      ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.5)};
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    line-height: 3.8rem;
    transition: color 0.3s ease;
  }
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  text-decoration: underline;
  > * {
    font-weight: 600;
  }
`;

export const EmptyList = styled.div`
  margin: 1rem 2rem 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.metawhite};
  color: ${({ theme }) => theme.colors.midgrey};
  text-align: center;
`;

export const ConfirmDialog = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 1.5rem;
  text-align: center;

  p {
    position: relative;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 0;
  }
`;

export const StyledNotification = styled(Notification)`
  margin: auto;
  left: 0;
  right: 0;
  max-width: 33rem;
`;
