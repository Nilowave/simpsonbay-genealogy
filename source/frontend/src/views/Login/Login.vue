<template>
  <Login>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <FlexWrapper>
        <Logo src="/images/logos_transparent.png" alt="logo" />
        <Wrapper>
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
      </FlexWrapper>
    </Container>
  </Login>
</template>

<script>
import * as S from "./Login.styles";
import { useForm } from "vue-hooks-form";
export default {
  components: { ...S },
  setup() {
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });
    const email = useField("email", {
      rule: { required: true },
    });
    const password = useField("password", {
      rule: {
        required: true,
        min: 6,
      },
    });
    const onSubmit = (data) => console.log(data);
    return {
      email,
      password,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
</script>
