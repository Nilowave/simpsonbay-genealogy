<template>
  <PolicyBar justify="flex-start" align="left" gap="3rem" :color="color">
    <Text typeStyle="disclaimer">Simpsonbay Heritage © 2021</Text>
    <StyledButton @click="showModal(privacy)">
      <Text typeStyle="disclaimer">Privacy</Text></StyledButton
    >
    <StyledButton @click="showModal(terms)">
      <Text typeStyle="disclaimer">Terms</Text>
    </StyledButton>
  </PolicyBar>
</template>

<script>
import * as S from "./PolicyBar.styles";
import { Text } from "../Atoms/Atoms.styles";

export default {
  components: { ...S, Text },
  props: {
    color: String,
    showModal: Function,
  },
  data() {
    return {
      privacy: "privacy",
      terms: "terms",
    };
  },
  setup(props) {
    console.log(props);
  },
};
</script>
