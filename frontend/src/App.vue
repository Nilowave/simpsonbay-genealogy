<template>
  <theme-provider :theme="theme" id="content">
    <router-view />
  </theme-provider>
</template>

<script>
import { ThemeProvider } from "vue3-styled-components";
import { theme } from "./styles/theme";
import "./styles/global";

export default {
  components: {
    "theme-provider": ThemeProvider,
  },
  data() {
    return { theme };
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
