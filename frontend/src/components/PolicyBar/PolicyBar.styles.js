import styled from "vue3-styled-components";
import { Flex } from "../../components/Atoms/Atoms.styles";

export const PolicyBar = styled(Flex, { color: String })`
  color: ${({ theme, color }) => theme.colors[color || "green"]};
  padding: 1rem ${({ theme }) => theme.sitePaddings.mobile};
  width: 100%;
`;

export const StyledButton = styled.button`
  color: inherit;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      text-decoration-color: currentColor;
      text-decoration: underline;
    }
  }
`;
