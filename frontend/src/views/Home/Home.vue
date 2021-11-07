<template>
  <div
    id="home"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <Background>
      <Logo src="/images/logos_transparent.png" alt="Simpson Bay Genealogy" />
    </Background>

    <LogoutButton v-on:click="logout">Logout</LogoutButton>
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd"
    >
      <div class="action-bar">
        <left-icon
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <plus-icon
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <minus-icon
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <right-icon
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
  </div>
</template>

<script>
import "vue-material-design-icons/styles.css";
import * as S from "./Home.styles";
import Ribbon from "vue-ribbon";
import LeftIcon from "vue-material-design-icons/ChevronLeftCircle";
import RightIcon from "vue-material-design-icons/ChevronRightCircle";
import PlusIcon from "vue-material-design-icons/PlusCircle";
import MinusIcon from "vue-material-design-icons/MinusCircle";
import Flipbook from "../../components/Flipbook";
import axios from "axios";
import router from "../../router";
import store from "../../store/index";

export default {
  name: "home",
  components: {
    Flipbook,
    LeftIcon,
    RightIcon,
    PlusIcon,
    MinusIcon,
    Ribbon,
    ...S,
  },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null,
    };
  },
  methods: {
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
    onFlipLeftStart(page) {
      console.log("flip-left-start", page);
    },
    onFlipLeftEnd(page) {
      console.log("flip-left-end", page);
      window.location.hash = "#" + page;
    },
    onFlipRightStart(page) {
      console.log("flip-right-start", page);
    },
    onFlipRightEnd(page) {
      console.log("flip-right-end", page);
      window.location.hash = "#" + page;
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
        this.pageNum = n;
      }
    },
  },
  mounted() {
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
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#home {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  overflow: hidden;
}

a {
  color: inherit;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 1rem;
}

.action-bar .btn {
  font-size: 30px;
  color: #999;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook {
  display: flex;
  flex-direction: column-reverse;
}

.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
</style>
