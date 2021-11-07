import styled from "vue3-styled-components";
import { typestyles } from "../../styles/typestyles";

export const Background = styled.div`
  background: url("/images/login-bg.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* opacity: 0.75; */
  mix-blend-mode: multiply;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 70%;
    background: transparent
      linear-gradient(180deg, #efdbce 0%, #efdbce 0%, #efdbce00 100%) 0% 0%
      no-repeat padding-box;
    mix-blend-mode: screen;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 10rem;
  position: absolute;
  top: 5%;
  object-fit: contain;
`;

export const LogoutButton = styled.button`
  margin: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  text-decoration: underline;
`;
