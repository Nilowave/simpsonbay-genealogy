import * as S from "./Register.styles";
import * as L from "../Login/Login.styles";
import * as Atoms from "../../components/Atoms/Atoms.styles.js";
import { useForm } from "vue-hooks-form";
import store from "../../store";
import axios from "axios";
import router from "../../router";
import { useMessage } from "../../hooks/useMessage";

export default {
  components: { ...L, ...S, ...Atoms },
  setup() {
    const invite = store.state.invite;
    const { message, setMessage } = useMessage();
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
      message,
      onSubmit: handleSubmit(onSubmit),
      data: store.state.invite,
    };
  },
};
