import styled, { css } from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";

export const PrimaryButton = styled.button`
  ${typestyles.button};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  transition: background-color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgreen};
    }
  }

  @media (min-width: 768px) {
    padding: 1.4rem;
  }
`;

export const SecondaryButton = styled.button`
  ${typestyles.button};
  color: ${({ theme }) => theme.colors.green};
  text-decoration: underline;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  transition: color 0.3s ease;
  align-self: center; // maybe not a good idea to have this here?

  &:hover {
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

const TextProps = {
  typeStyle: String,
  color: String,
  margin: String,
  align: String,
};
export const Text = styled("p", TextProps)`
  ${(props) => props.typeStyle && typestyles[props.typeStyle]};
  ${(props) => props.color && `color: ${props.theme.colors[props.color]};`};
  ${(props) => props.margin && `margin: ${props.margin};`};
  ${(props) => props.align && `text-align: ${props.align};`};
`;

const flexProps = {
  gap: String,
  justify: String,
  align: String,
  direction: String,
  margin: String,
};
export const Flex = styled("div", flexProps)`
  display: flex;
  position: relative;
  flex: 1;

  ${(props) => css`
    gap: ${props.gap || "0"};
    justify-content: ${props.justify || "0"};
    align-items: ${props.align};
    flex-direction: ${props.direction};
  `};
  ${(props) => props.margin && `margin: ${props.margin};`};
`;
