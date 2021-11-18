import * as S from "./Comments.styles";
import CloseIcon from "../../assets/icons/close.svg";
import ChevronIcon from "../../assets/icons/chevron.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import * as Atoms from "../Atoms/Atoms.styles";

const stringToColour = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

export default {
  components: { ...S, CloseIcon, ChevronIcon, CommentIcon, ...Atoms },
  props: {
    onClose: {
      type: Function,
      required: true,
    },
    items: Array,
    page: Number,
  },
  methods: {
    stringToColour,
  },
};
