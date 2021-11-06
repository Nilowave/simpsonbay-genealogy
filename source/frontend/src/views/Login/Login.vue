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
import axios from "axios";
import router from "../../router";

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
        min: process.env.NODE_ENV === "production" ? 6 : 0,
      },
    });

    const onSubmit = (data) => {
      axios
        .post(
          `${process.env.API_DOMAIN}/auth/local`,
          {
            identifier: data.email,
            password: data.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log("login succes, push /", res.data);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      email,
      password,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
</script>
