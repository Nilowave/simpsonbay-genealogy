import styled from "vue-styled-components";
import { typestyles } from "../../styles/typestyles";

export const PrimaryButton = styled.button`
  ${typestyles.button};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
`;
