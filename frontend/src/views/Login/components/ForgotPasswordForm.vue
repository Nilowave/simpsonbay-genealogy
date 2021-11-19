<template>
  <Wrapper direction="column" justify="center">
    <Heading>Forgotten Password</Heading>
    <Paragraph>
      Enter your email to receive password recovery instructions.
    </Paragraph>
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
      <PrimaryButton type="submit">Recover password</PrimaryButton>
    </StyledForm>
    <SecondaryButton @click="backToLogin">Back to Sign in</SecondaryButton>
  </Wrapper>
</template>

<script>
import * as S from "../Login.styles";
import * as Atoms from "../../../components/Atoms/Atoms.styles";
import { useForm } from "vue-hooks-form";
// TODO: on submit, validate email with backend
// import axios from "axios";

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
  setup(props) {
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });

    const email = useField("email", {
      rule: { required: true },
    });

    const onSubmit = (data) => {
      console.log("email sent to", data);
      props.setMessage(`Password recovery email sent to ${data.email}`);
    };

    return {
      email,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
</script>
