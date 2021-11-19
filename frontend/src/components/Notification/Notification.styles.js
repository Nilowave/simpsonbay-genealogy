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
  border-radius: 1rem;
  box-shadow: 0 1px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  animation: ${apear} 0.3s ease-out;
`;

export const NotificationText = styled.p`
  ${typestyles.bodySmall};
  padding: 1rem 2rem;
  padding-left: 5.5rem;
  max-width: 30rem;
  font-weight: 600;
  vertical-align: middle;
`;

export const Icon = styled.div`
  /* min-height: 3rem; */
  /* min-width: 3rem; */
  width: 4rem;
  padding: 1rem;
  height: 100%;
  /* flex: 1; */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  .material-design-icon > .material-design-icon__svg,
  .material-design-icon {
    width: 2rem;
    height: 2rem;
  }
`;
