import styled, { css } from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";

export const PrimaryButton = styled.button`
  ${typestyles.button};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

const TextProps = { typeStyle: String, color: String, margin: String };
export const Text = styled("p", TextProps)`
  ${(props) => props.typeStyle && typestyles[props.typeStyle]};
  ${(props) => props.color && `color:${props.theme.colors[props.color]};`};
  ${(props) => props.margin && `margin:${props.margin};`};
`;

const flexProps = { gap: String, justify: String, direction: String };
export const Flex = styled("div", flexProps)`
  display: flex;

  ${(props) => css`
    gap: ${props.gap || "0"};
    justify-content: ${props.justify || "0"};
    align-items: ${props.align};
    flex-direction: ${props.direction};
  `};
`;
