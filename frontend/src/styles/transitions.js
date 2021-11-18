import { css } from "vue-styled-components";

export const transitions = css`
  .v-enter-from {
    opacity: 0;
    transform: translateX(-20px);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }

  .v-enter-active {
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .v-leave-active {
    transition: all 0.3s cubic-bezier(0.7, 0, 0.84, 0);
  }

  /* slide up */

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(50px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-enter-active {
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .slide-up-leave-active {
    transition: all 0.2s cubic-bezier(0.11, 0, 0.5, 0);
  }
`;
