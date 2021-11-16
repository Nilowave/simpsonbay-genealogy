import * as S from "./Login.styles";
import IntroText from "./components/IntroText";
import LoginForm from "./components/LoginForm";
import { Flex } from "../../components/Atoms/Atoms.styles";
import { Loader } from "../../components/Loader/Loader.styles";
import { useForm } from "vue-hooks-form";
import axios from "axios";
import router from "../../router";
import { useMessage } from "../../hooks/useMessage";
import Notification from "../../components/Notification/Notification.vue";
import store from "../../store";

export default {
  components: { ...S, Notification, IntroText, LoginForm, Loader, Flex },
  data() {
    return {
      view: "IntroText",
      showIntro: true,
      loading: true,
      introText: "",
    };
  },
  methods: {
    showSignIn() {
      this.showIntro = false;
      this.view = "LoginForm";
      console.log("SHOW SIGNING FORM");
    },
  },
  computed: {
    currentProperties() {
      if (this.view === "IntroText") {
        return {
          onShowSignIn: this.showSignIn,
          text: this.introText,
        };
      } else if (this.view === "LoginForm") {
        return {
          onSubmit: this.onSubmit,
          email: this.email,
          password: this.password,
        };
      }
    },
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API_DOMAIN}/intro-text`)
      .then((res) => {
        this.introText = res.data.text.replace(
          res.data.text.substring(0, 1),
          `<span class="large">${res.data.text.substring(0, 1)}</span>`
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },

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
