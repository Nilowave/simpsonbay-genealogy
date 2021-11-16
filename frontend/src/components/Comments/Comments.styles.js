import styled from "vue3-styled-components";
import { Flex, Text } from "../Atoms/Atoms.styles";
import CommentIcon from "../../assets/icons/comment.svg";
import { typestyles } from "../../styles/typestyles";

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px 10px 0 0;
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  bottom: 0;
  left: 0;
  min-width: 32rem;
  max-width: 45rem;
  max-height: 46rem;
  display: flex;
  flex-direction: column;
  width: 30%;
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
`;

export const InputWrapper = styled(Flex)`
  padding: 2.3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.metawhite};
  height: 8.3rem;
`;

export const StyledIcon = styled(CommentIcon)`
  width: 2.8rem;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.1;
`;
