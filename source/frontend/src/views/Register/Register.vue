<template>
  <Register>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <FlexWrapper>
        <Logo src="/images/logos_transparent.png" alt="logo" />
        <Wrapper>
          <Heading>Welcome to the family!</Heading>
          <Paragraph
            >Please register your infromation below to gain exclusive
            access.</Paragraph
          >
          <StyledForm @submit="onSubmit">
            <InputWrapper>
              <StyledInput
                v-model="name.value"
                :ref="name.ref"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <Error v-if="name.error">{{ name.error.message }}</Error>
            </InputWrapper>

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

            <InputWrapper>
              <StyledInput
                v-model="confirmpassword.value"
                :ref="confirmpassword.ref"
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
              <Error v-if="confirmpassword.error">{{
                confirmpassword.error.message
              }}</Error>
            </InputWrapper>

            <PrimaryButton type="submit">Register</PrimaryButton>
          </StyledForm>
        </Wrapper>
      </FlexWrapper>
    </Container>
  </Register>
</template>

<script>
import * as S from "./Register.styles";
import { Error, InputWrapper } from "../Login/Login.styles";
import { useForm } from "vue-hooks-form";
import store from "../../store";
import axios from "axios";

console.log("get invite");

export default {
  components: { ...S, Error, InputWrapper },
  setup() {
    const invite = store.state.invite;
    const { useField, handleSubmit } = useForm({
      defaultValues: { email: invite.Email },
    });
    const name = useField("name", {
      rule: { required: true },
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
    const confirmpassword = useField("confirmpassword", {
      rule: {
        required: true,
        message: "password does not match",
        validator: (rule, value) => {
          if (password.value !== value || !value) {
            return false;
          }
          return true;
        },
      },
    });
    const onSubmit = (data) => {
      console.log(data);
      axios
        .post("http://localhost:1337/auth/local/register", {
          username: data.name,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          // Handle success.
          console.log("Well done!");
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    };

    return {
      name,
      email,
      password,
      confirmpassword,
      onSubmit: handleSubmit(onSubmit),
      data: store.state.invite,
    };
  },
};
</script>
