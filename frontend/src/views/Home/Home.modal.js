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
    if (window.innerHeight < 480 && window.innerHeight < window.innerWidth) {
    }
    return {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      showComments: false,
      pageNumber: 1,
      user: store.state.isLoggedIn,
      bookLink: null,
      singlePage: this.isSinglePager(),
    };
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    isSinglePager() {
      return window.innerHeight < 480 && window.innerHeight < window.innerWidth;
    },
    onWindowResize() {
      this.singlePage = this.isSinglePager();
    },
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
          store.commit("setIsLoggedIn", false);
          router.push("/login");
        })
        .catch((err) => {
          router.push("/login");
        });
    },
    onFlipEnd(page) {
      if (store.state.isLoggedIn) {
        const user = store.state.isLoggedIn;

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
            .then((res) => {})
            .catch((err) => {});
        }
      }
    },
    onFlipLeftStart(page) {},
    onFlipLeftEnd(page) {
      window.location.hash = "#" + page;
      this.onFlipEnd(page);
    },
    onFlipRightStart(page) {},
    onFlipRightEnd(page) {
      window.location.hash = "#" + page;
      this.onFlipEnd(page);
    },
    onZoomStart(zoom) {},
    onZoomEnd(zoom) {},
    setPageFromHash() {
      const n = parseInt(window.location.hash.slice(1), 10);
      if (isFinite(n)) {
        const toPage = n <= this.pages.length ? n : this.pages.length - 1;
        this.pageNumber = toPage;
      }
    },
  },
  async mounted() {
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
        .then((res) => {})
        .catch((err) => {});
    }

    // get book pdf

    // get book pages
    const pageResponse = await axios.get(
      `${process.env.VUE_APP_API_DOMAIN}/e-book/pages`,
      {
        withCredentials: true,
      }
    );

    this.bookLink = pageResponse.data.book.file.url;

    this.pages = pageResponse.data.pages;
    this.pagesHiRes = pageResponse.data.pages;

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

    window.addEventListener("hashchange", this.setPageFromHash);
    this.setPageFromHash();
  },
};
