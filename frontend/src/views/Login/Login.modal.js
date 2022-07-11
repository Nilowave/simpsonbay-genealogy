import axios from "axios";
import router from "../../router";
import { useMessage } from "../../hooks/useMessage";
import IntroText from "./components/IntroText";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import Notification from "../../components/Notification/Notification.vue";
import PolicyBar from "../../components/PolicyBar/PolicyBar";
import LogoIcon from "../../assets/logo-stacked.svg";
import { Flex } from "../../components/Atoms/Atoms.styles";
import { Loader } from "../../components/Loader/Loader.styles";
import * as S from "./Login.styles";

export default {
  components: {
    ...S,
    LogoIcon,
    Notification,
    PolicyBar,
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
    showModal: Function,
    isGroup: {
      type: Boolean,
      default: false,
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
    showIntro() {
      this.view = "IntroText";
    },
  },

  computed: {
    currentProperties() {
      switch (this.view) {
        case "IntroText":
          return {
            onRedirect: () => router.push("/"),
            onShowSignIn:
              this.page === "Register" ? this.showRegister : this.showSignIn,
            text: this.introText,
            cta: "Read the E-book",
            // this.page === "Register"
            //   ? "Continue to Register"
            //   : "Continue to Sign in",
          };

        case "LoginForm":
          return {
            setMessage: this.setMessage,
            showForgot: this.showForgot,
            onSubmitRedirect: this.showIntro,
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
            isGroup: this.isGroup,
          };
      }
    },
  },

  data() {
    return {
      loading: true,
      videoready: false,
      introText: "",
      introVideo: null,
      view: "LoginForm",
    };
  },

  mounted() {
    if (this.page === "ResetPassword") {
      this.view = "ResetPasswordForm";
    } else if (this.page === "Login") {
      this.view = "LoginForm";
    } else {
      this.view = "RegisterForm";
    }

    axios
      .get(`${process.env.VUE_APP_API_DOMAIN}/intro-text`)
      .then((res) => {
        this.introText = res.data.text.replace(
          res.data.text.substring(0, 1),
          `<span class="large">${res.data.text.substring(0, 1)}</span>`
        );
        this.introVideo = res.data.video.url;
      })
      .catch((error) => {})
      .finally(() => {
        this.loading = false;
      });
  },

  setup(props) {
    const { message, setMessage } = useMessage();

    return {
      setMessage,
      message,
    };
  },
};
