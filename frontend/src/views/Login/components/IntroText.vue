<template>
  <Wrapper direction="column" justify="space-between" align="center">
    <IntroFlex direction="column" justify="space-between" align="center">
      <FeatherWrapper><FeatherIcon /></FeatherWrapper>
      <IntroWrapper v-html="text" />
      <ContinueButton @click="onRedirect">
        {{ cta }}
        <Arrow class="arrow" />
      </ContinueButton>
    </IntroFlex>
  </Wrapper>
</template>

<style scoped>
.arrow {
  height: 1rem;
}
</style>

<script>
import * as S from "../Login.styles";
import { Flex } from "../../../components/Atoms/Atoms.styles";
import Arrow from "../../../assets/icons/long-arrow.svg";
import FeatherIcon from "../../../assets/icons/feather.svg";

export default {
  components: { ...S, Arrow, Flex, FeatherIcon },
  props: {
    onShowSignIn: {
      type: Function,
      required: true,
    },
    onRedirect: Function,
    text: String,
    cta: String,
  },
};
</script>
