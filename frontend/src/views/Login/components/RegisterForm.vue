<template>
  <Wrapper direction="column" justify="center">
    <Heading>Welcome to the family!</Heading>
    <Paragraph>
      Please register your infromation below to gain exclusive access.
    </Paragraph>
    <StyledForm @submit="onSubmit">
      <InputWrapper>
        <StyledInput
          v-model="email.value"
          :ref="email.ref"
          type="email"
          name="email"
          placeholder="Email"
          aria-disabled="true"
          preset
          disabled
        />
        <Error v-if="email.error">{{ email.error.message }}</Error>
      </InputWrapper>

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
</template>

<script>
import { useForm } from "vue-hooks-form";
import store from "../../../store";
import axios from "axios";
import router from "../../../router";
import * as S from "../Login.styles";
import * as Atoms from "../../../components/Atoms/Atoms.styles.js";

export default {
  components: { ...S, ...Atoms },

  setup() {
    console.log("register");
    const invite = store.state.invite;
    console.log(invite.email);

    const { useField, handleSubmit } = useForm({
      defaultValues: { email: invite.email },
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
      console.log(data);
      axios
        .post(`${process.env.VUE_APP_API_DOMAIN}/auth/local/register`, {
          fullname: data.name,
          email: data.email,
          username: data.email,
          password: data.password,
        })
        .then((response) => {
          const token = response.data.jwt;
          axios
            .put(
              `${process.env.VUE_APP_API_DOMAIN}/invites/${invite.id}`,
              {
                confirmed: true,
              },
              {
                headers: {
                  authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => {
              console.log("updated invtie", res.data);
              router.push("/");
            })
            .catch((err) => {
              console.log("failed updating invite", err.response);
              router.push("/");
            });
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
          setMessage("There was an error. Please try again.");
        });
    };

    return {
      name,
      email,
      password,
      confirmpassword,
      // data: store.state.invite,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
</script>
