import axios from "axios";
import { useMessage } from "../../hooks/useMessage";
import IntroText from "./components/IntroText";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
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
          };

        case "LoginForm":
          return {
            setMessage: this.setMessage,
            showForgot: this.showForgot,
          };

        case "LoginForm":
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
    console.log("data");
    return {
      loading: true,
      introText: "",
      view: "IntroText",
    };
  },

  mounted() {
    if (this.page === "Register") {
      this.view = "RegisterForm";
      this.loading = false;
      console.log("mounted");
      return;
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
    console.log("setup");
    const { message, setMessage } = useMessage();

    return {
      setMessage,
      message,
    };
  },
};
