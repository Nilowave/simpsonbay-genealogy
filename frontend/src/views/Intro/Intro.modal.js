import * as S from "./Intro.styles";
import * as Buttons from "../../components/Buttons/Buttons.styles.js";
import axios from "axios";
import router from "../../router";
import store from "../../store";

export default {
  components: { ...S, ...Buttons },
};
