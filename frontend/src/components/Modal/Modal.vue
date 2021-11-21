<template>
  <ModalWrapper justify="center" align="center">
    <Backdrop @click="hideModal" />
    <ContentWrapper>
      <CloseButton @click="hideModal"
        ><Close aria-label="Close Modal"
      /></CloseButton>
      <Content>
        <component :is="component" />
      </Content>
    </ContentWrapper>
  </ModalWrapper>
</template>

<script>
import * as S from "./Modal.styles";
import Close from "../../assets/icons/close.svg";
import Privacy from "../Privacy/Privacy";
import Terms from "../Terms/Terms";

export default {
  props: {
    hideModal: Function,
    component: String,
  },
  components: {
    ...S,
    Close,
    Privacy,
    Terms,
  },
  setup() {},
};
</script>
