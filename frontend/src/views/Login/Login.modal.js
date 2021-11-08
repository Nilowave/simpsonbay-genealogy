import * as S from "./Login.styles";
import * as Buttons from "../../components/Buttons/Buttons.styles.js";
import { useForm } from "vue-hooks-form";
import axios from "axios";
import router from "../../router";
import { useMessage } from "../../hooks/useMessage";
import Notification from "../../components/Notification/Notification.vue";
import store from "../../store";

export default {
  components: { ...S, ...Buttons, Notification },
  setup() {
    const { message, setMessage } = useMessage();

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
          console.log("login succes, push /", res.data);
          router.push("/");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setMessage("Incorrect email or password");
          } else {
            setMessage("There was an error. Please try again.");
          }
        });
    };

    return {
      email,
      password,
      message,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
