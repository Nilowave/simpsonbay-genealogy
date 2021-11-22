import styled from "vue3-styled-components";
import { Flex } from "../Atoms/Atoms.styles";

export const ModalWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.green};
  opacity: 0.6;
`;

export const ContentWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  max-width: 124rem;
  margin: 0 2rem;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  padding: 1rem;
`;

export const Content = styled.div`
  max-height: calc(90vh - 4rem);
  overflow: hidden;
  overflow-y: auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
