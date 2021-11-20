import axios from "axios";
import { useMessage } from "../../hooks/useMessage";
import IntroText from "./components/IntroText";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import Notification from "../../components/Notification/Notification.vue";
import { Flex } from "../../components/Atoms/Atoms.styles";
import { Loader } from "../../components/Loader/Loader.styles";
import * as S from "./Login.styles";

export default {
  components: {
    ...S,
    Notification,
    IntroText,
    LoginForm,
    RegisterForm,
    ForgotPasswordForm,
    ResetPasswordForm,
    Loader,
    Flex,
  },

  props: {
    page: {
      type: String,
      default: "Login",
    },
  },

  methods: {
    showSignIn() {
      this.view = "LoginForm";
    },
    showForgot() {
      this.view = "ForgotPasswordForm";
    },
    showRegister() {
      this.view = "RegisterForm";
    },
  },

  computed: {
    currentProperties() {
      switch (this.view) {
        case "IntroText":
          return {
            onShowSignIn:
              this.page === "Register" ? this.showRegister : this.showSignIn,
            text: this.introText,
            cta:
              this.page === "Register"
                ? "Continue to Register"
                : "Continue to Sign in",
          };

        case "LoginForm":
          return {
            setMessage: this.setMessage,
            showForgot: this.showForgot,
          };

        case "ForgotPasswordForm":
          return {
            setMessage: this.setMessage,
            backToLogin: this.showSignIn,
          };

        case "ResetPasswordForm":
          return {
            setMessage: this.setMessage,
            backToLogin: this.showSignIn,
          };

        case "RegisterForm":
          return {
            setMessage: this.setMessage,
          };
      }
    },
  },

  data() {
    return {
      loading: true,
      videoready: false,
      introText: "",
      view: "IntroText",
    };
  },

  mounted() {
    if (this.page === "ResetPassword") {
      this.view = "ResetPasswordForm";
    }

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

    return {
      setMessage,
      message,
    };
  },
};
