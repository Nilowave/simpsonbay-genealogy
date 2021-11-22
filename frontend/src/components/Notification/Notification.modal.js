import * as S from "./Notification.styles";
import AlertIcon from "vue-material-design-icons/AlertCircleOutline";
import Close from "../../assets/icons/close.svg";

export default {
  components: { ...S, AlertIcon, Close },
  props: {
    message: String,
    setMessage: Function,
  },
};
