<template>
  <Flex gap="6rem" direction="column" align="center">
    <IntroWrapper v-html="text" />
    <ContinueButton @click="onShowSignIn"
      >Continue to Sign in <Arrow class="arrow"
    /></ContinueButton>
  </Flex>
</template>

<style scoped>
.arrow {
  height: 1rem;
}
</style>

<script>
import * as S from "../Login.styles";
import Arrow from "../../../assets/icons/long-arrow.svg";

export default {
  components: { ...S, Arrow },
  props: {
    onShowSignIn: {
      type: Function,
      required: true,
    },
    text: String,
  },
};
</script>
