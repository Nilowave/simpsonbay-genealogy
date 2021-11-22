import styled from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";
import { keyframes } from "vue3-styled-components";

const apear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.3rem;
  padding: 1.5rem;
  box-shadow: 2px 1px 4px
    ${({ theme }) => theme.utils.hexToRgba(theme.colors.green, 0.4)};
  position: absolute;
  bottom: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  animation: ${apear} 0.3s ease-out;
  gap: 1rem;
`;

export const NotificationText = styled.p`
  ${typestyles.bodySmall};
  /* padding: 1rem; */
  /* padding-left: 4.5rem; */
  max-width: 30rem;
  font-weight: 600;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

export const Icon = styled.div`
  /* width: 4rem; */
  /* padding: 1rem; */
  height: 100%;
  /* position: absolute; */
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.6;
  margin-right: 0.5rem;

  .material-design-icon > .material-design-icon__svg,
  .material-design-icon {
    width: 2rem;
    height: 2rem;
  }
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.2rem 0.5rem 0;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
