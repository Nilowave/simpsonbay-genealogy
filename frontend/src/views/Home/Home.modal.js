import * as S from "./Home.styles";
import * as Atoms from "../../components/Atoms/Atoms.styles";
import MinusIcon from "../../assets/icons/minus.svg";
import NextIcon from "../../assets/icons/next.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import LogoIcon from "../../assets/icons/logo-sbg.svg";
import Flipbook from "../../components/Flipbook/Flipbook";
import Comments from "../../components/Comments/Comments";
import PolicyBar from "../../components/PolicyBar/PolicyBar";
import axios from "axios";
import router from "../../router";
import store from "../../store/index";

const comments = [
  {
    name: "Danilo Meulens",
    comment: "Looks great!",
    time: "now",
  },
  {
    name: "Ashley Vincent",
    comment: "Wow fancy!",
    time: "1 day ago",
  },
  {
    name: "Nirmala Meulens",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    time: "1 day ago",
  },
  {
    name: "Bryan Meulens",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    time: "1 day ago",
  },
];

export default {
  name: "home",
  props: {
    showModal: Function,
  },
  components: {
    ...Atoms,
    Flipbook,
    PolicyBar,
    NextIcon,
    PlusIcon,
    MinusIcon,
    DownloadIcon,
    CommentIcon,
    LogoIcon,
    Comments,
    ...S,
  },
  data() {
    return {
      comments,
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      showComments: false,
      pageNumber: null,
      user: store.state.isLoggedIn,
    };
  },
  methods: {
    hideComments() {
      this.showComments = false;
    },
    logout() {
      axios
        .post(
          `${process.env.VUE_APP_API_DOMAIN}/logout`,
          {},
          { withCredentials: true }
        )
        .then((res) => {
          console.log("logout success", res.data);
          store.commit("setIsLoggedIn", false);
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          router.push("/login");
        });
    },
    onFlipEnd(page) {
      if (store.state.isLoggedIn) {
        const user = store.state.isLoggedIn;
        console.log("FLIPT", page, store.state.readPages);
        if (page > store.state.readPages) {
          store.commit("setReadPages", page);
          axios
            .put(
              `${process.env.VUE_APP_API_DOMAIN}/users/${user.id}`,
              {
                readPages: page,
              },
              { withCredentials: true }
            )
            .then((res) => {
              console.log("user updated");
            })
            .catch((err) => {
              console.log("user update error", err.response);
            });
        }
      }
    },
    onFlipLeftStart(page) {
      console.log("flip-left-start", page);
    },
    onFlipLeftEnd(page) {
      console.log("flip-left-end", page);
      window.location.hash = "#" + page;
      this.onFlipEnd(page);
    },
    onFlipRightStart(page) {
      console.log("flip-right-start", page);
    },
    onFlipRightEnd(page) {
      console.log("flip-right-end", page);
      window.location.hash = "#" + page;
      this.onFlipEnd(page);
    },
    onZoomStart(zoom) {
      console.log("zoom-start", zoom);
    },
    onZoomEnd(zoom) {
      console.log("zoom-end", zoom);
    },
    setPageFromHash() {
      const n = parseInt(window.location.hash.slice(1), 10);
      if (isFinite(n)) {
        this.pageNumber = n;
      }
    },
  },
  mounted() {
    // update user last read
    if (store.state.isLoggedIn) {
      const user = store.state.isLoggedIn;
      axios
        .put(
          `${process.env.VUE_APP_API_DOMAIN}/users/${user.id}`,
          {
            lastRead: new Date(),
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("user updated");
        })
        .catch((err) => {
          console.log("user update error", err.response);
        });
    }

    const TOTAL_PAGES = 77;
    const lowResPages = [...new Array(TOTAL_PAGES).keys()].map(
      (index) => "pdf/low_res/page_" + (index + 1) + ".jpg"
    );
    const highResPages = [...new Array(TOTAL_PAGES).keys()].map(
      (index) => "pdf/high_res/page_" + (index + 1) + ".jpg"
    );

    window.addEventListener("keydown", (ev) => {
      const flipbook = this.$refs.flipbook;
      if (!flipbook) {
        return;
      }
      if (ev.keyCode === 37 && flipbook.canFlipLeft) {
        flipbook.flipLeft();
      }
      if (ev.keyCode === 39 && flipbook.canFlipRight) {
        return flipbook.flipRight();
      }
    });

    // Simulate asynchronous pages initialization
    setTimeout(() => {
      this.pages = [null, ...lowResPages];
      this.pagesHiRes = [null, ...highResPages];
    }, 1);

    window.addEventListener("hashchange", this.setPageFromHash);
    this.setPageFromHash();
  },
};
