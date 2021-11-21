<template>
  <ThemeProvider :theme="theme" id="content">
    <router-view :key="$route.path" :showModal="showModal" />
    <transition name="fade">
      <Modal
        v-show="modal.isVisible"
        :hideModal="hideModal"
        :component="modal.component"
      />
    </transition>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue3-styled-components";
import { theme } from "./styles/theme";
import { useModal } from "./hooks/useModal";
import Modal from "./components/Modal/Modal";
import "./styles/global";

export default {
  components: {
    ThemeProvider,
    Modal,
  },
  data() {
    return { theme };
  },
  setup() {
    const { modal, showModal, hideModal } = useModal();

    return {
      modal,
      showModal,
      hideModal,
    };
  },
};
</script>

<style>
#content,
#app {
  display: contents;
  height: 100%;
}
</style>
