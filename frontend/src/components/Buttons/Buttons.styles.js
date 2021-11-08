import styled from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";

export const PrimaryButton = styled.button`
  ${typestyles.button};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const SecondaryButton = styled.button`
  ${typestyles.button};
  color: ${({ theme }) => theme.colors.green};
  text-decoration: underline;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;
