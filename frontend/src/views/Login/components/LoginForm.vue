<template>
  <Wrapper direction="column" justify="center">
    <Heading>Sign-in</Heading>
    <Paragraph
      >To read the family book, please sign in with your credentials.</Paragraph
    >
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
    <SecondaryButton @click="showForgot">Forgot my password</SecondaryButton>
  </Wrapper>
</template>

<script>
import { useForm } from "vue-hooks-form";
import axios from "axios";
import router from "../../../router";
import * as S from "../Login.styles";
import * as Atoms from "../../../components/Atoms/Atoms.styles";

export default {
  components: { ...S, ...Atoms },
  props: {
    setMessage: {
      type: Function,
    },
    showForgot: {
      type: Function,
    },
    onSubmitRedirect: {
      type: Function,
    },
  },

  setup(props) {
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
          `${process.env.VUE_APP_API_DOMAIN}/auth/local`,
          {
            identifier: data.email,
            password: data.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (props.onSubmitRedirect) {
            props.onSubmitRedirect();
          } else {
            router.push("/");
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            props.setMessage("Incorrect email or password. Please try again.");
          } else if (err.response.data.message) {
            props.setMessage(err.response.data.message);
          } else {
            props.setMessage(
              "There was an error. Please try again or contact info@simpsonbay-heritage.com."
            );
          }
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
