<template>
  <Wrapper direction="column" justify="center">
    <Heading>Reset Password</Heading>
    <Paragraph> Enter your <b>new</b> password. </Paragraph>
    <StyledForm @submit="onSubmit">
      <InputWrapper>
        <StyledInput
          v-model="password.value"
          :ref="password.ref"
          type="password"
          name="password"
          placeholder="New Password"
        />
        <Error v-if="password.error">{{ password.error.message }}</Error>
      </InputWrapper>

      <InputWrapper>
        <StyledInput
          v-model="confirmpassword.value"
          :ref="confirmpassword.ref"
          type="password"
          name="confirmpassword"
          placeholder="Confirm New Password"
        />
        <Error v-if="confirmpassword.error">{{
          confirmpassword.error.message
        }}</Error>
      </InputWrapper>
      <PrimaryButton type="submit">Reset password</PrimaryButton>
    </StyledForm>
    <SecondaryButton v-show="showSingin" @click="backToLogin"
      >Go to Sign in</SecondaryButton
    >
  </Wrapper>
</template>

<script>
import { useForm } from "vue-hooks-form";
import axios from "axios";
import router from "../../../router";
import store from "../../../store";
import * as S from "../Login.styles";
import * as Atoms from "../../../components/Atoms/Atoms.styles";

export default {
  components: { ...S, ...Atoms },
  props: {
    setMessage: {
      type: Function,
      required: true,
    },
    backToLogin: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showSingin: false,
    };
  },
  mounted() {
    const code = this.$route.query.code;
    if (!code) {
      router.push("/login");
    }

    store.commit("setResetPasswordCode", code);
  },
  setup(props) {
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });

    const password = useField("password", {
      rule: {
        required: true,
        min: process.env.NODE_ENV === "production" ? 6 : 0,
      },
    });

    const confirmpassword = useField("confirmpassword", {
      rule: {
        required: true,
        message: "passwords do not match",
        validator: (rule, value) => {
          if (password.value !== value || !value) {
            return false;
          }
          return true;
        },
      },
    });

    const onSubmit = (data) => {
      axios
        .post(`${process.env.VUE_APP_API_DOMAIN}/auth/reset-password`, {
          code: store.state.resetPasswordCode, // code contained in the reset link of step 3.
          password: data.password,
          passwordConfirmation: data.confirmpassword,
        })
        .then((response) => {
          store.commit("setResetPasswordCode", null);
          props.setMessage("Your user's password has been reset.");
          props.backToLogin();
        })
        .catch((error) => {
          props.setMessage(
            "There was an error. Please try again or contact info@simpsonbay-heritage.com"
          );
        });
    };

    return {
      password,
      confirmpassword,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
</script>
