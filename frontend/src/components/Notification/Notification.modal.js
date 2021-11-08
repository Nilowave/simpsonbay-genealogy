import * as S from "./Notification.styles";
import AlertIcon from "vue-material-design-icons/AlertCircleOutline";

export default {
  components: { ...S, AlertIcon },
  props: {
    message: String,
  },
};
