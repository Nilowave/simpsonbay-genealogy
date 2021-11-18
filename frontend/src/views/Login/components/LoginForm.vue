<template>
  <Wrapper direction="column" justify="center">
    <Heading>Sign-in</Heading>
    <Paragraph>To read the family book</Paragraph>
    <StyledForm @submit="onSubmit">
      <InputWrapper>
        <StyledInput
          v-model="email.value"
          :ref="email.ref"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Error v-if="email.error">{{ email.error.message }}</Error>
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          v-model="password.value"
          :ref="password.ref"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Error v-if="password.error">{{ password.error.message }}</Error>
      </InputWrapper>
      <PrimaryButton type="submit">Sign in</PrimaryButton>
    </StyledForm>
    <SecondaryButton>Reset password</SecondaryButton>
  </Wrapper>
</template>

<script>
import * as S from "../Login.styles";
import * as Atoms from "../../../components/Atoms/Atoms.styles";

export default {
  components: { ...S, ...Atoms },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    email: {
      type: Object,
      required: true,
    },
    password: {
      type: Object,
      required: true,
    },
  },
};
</script>
