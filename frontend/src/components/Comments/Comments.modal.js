import axios from "axios";
import { ref, onMounted, watch } from "vue";
import { useForm } from "vue-hooks-form";
import { useMessage } from "../../hooks/useMessage";
import { stringToColour } from "../../utils/stringToColour";
import { Loader } from "../Loader/Loader.styles";
import Notification from "../Notification/Notification";
import CloseIcon from "../../assets/icons/close.svg";
import ChevronIcon from "../../assets/icons/chevron.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import * as Atoms from "../Atoms/Atoms.styles";
import * as S from "./Comments.styles";

export default {
  components: {
    ...S,
    ...Atoms,
    CloseIcon,
    ChevronIcon,
    CommentIcon,
    Notification,
    Loader,
  },
  props: {
    onClose: {
      type: Function,
      required: true,
    },
    page: Number,
    user: Object,
  },

  data() {
    return {
      deleteConfirm: null,
      viewAll: false,
    };
  },

  watch: {
    viewAll(value) {
      console.log("view all", value, this.page);

      this.getPageComments(this.page, value);
    },
  },

  methods: {
    stringToColour,
    deleteComment(id, callback) {
      console.log("delete comment", id);
      // this.deleteConfirm = id;
      axios
        .delete(
          `${process.env.VUE_APP_API_DOMAIN}/comments/e-book:1/${id}?authorId=${this.user.id}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          callback(this.page);
          this.deleteConfirm = null;
        })
        .catch((err) => {
          console.log(err);
          this.deleteConfirm = null;
        });
    },
  },

  setup(props) {
    const items = ref([]);
    const isFetching = ref(true);

    const { message, setMessage } = useMessage();

    const getPageComments = (page, viewAll) => {
      console.log(
        `${process.env.VUE_APP_API_DOMAIN}/comments/e-book:1${
          !viewAll && `?points=${page}`
        }`
      );
      isFetching.value = true;
      axios
        .get(
          `${process.env.VUE_APP_API_DOMAIN}/comments/e-book:1${
            viewAll ? "" : `?points=${page}`
          }`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          const comments = res.data
            .filter((item) => !item.blocked && item.authorUser.id)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          items.value = comments;
          isFetching.value = false;
        })
        .catch((err) => {
          isFetching.value = false;
          console.log(err);
          return [];
        });
    };

    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });

    const comment = useField("comment", {
      rule: { required: true },
    });

    const onSubmit = (data) => {
      axios
        .post(
          `${process.env.VUE_APP_API_DOMAIN}/comments/e-book`,
          {
            authorId: props.user.id,
            authorName: props.user.fullname,
            authorEmail: props.user.email,
            content: data.comment,
            points: props.page,
            // "threadOf": 2, // id of comment we would like to start / continue the thread (Optional)
            related: [
              {
                refId: 1,
                ref: "e-book",
                field: "comments",
              },
            ],
          },
          { withCredentials: true }
        )
        .then((res) => {
          // FETCH COMMENTS
          comment.value = "";
          getPageComments(props.page);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          if (err.response.status === 400) {
            const errorMessage = JSON.parse(err.response.data.message);
            setMessage(errorMessage.message);
          } else {
            setMessage(
              "Something went wrong. Please try again or contact info@simpsonbay-heritage.com"
            );
            console.log(err.response.data.message);
            console.log(err.response.headers);
          }
        });
    };

    watch(
      () => props.page,
      () => {
        getPageComments(props.page);
      }
    );

    onMounted(() => {
      getPageComments(props.page);
    });

    return {
      items,
      isFetching,
      comment,
      message,
      setMessage,
      getPageComments,
      onSubmit: handleSubmit(onSubmit),
    };
  },
};
