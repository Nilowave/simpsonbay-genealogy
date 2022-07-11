import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";
import PathNotFound from "../components/PathNotFound/PathNotFound";
import store from "../store/index";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: {
      page: "Login",
    },
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn) {
        next({ name: "Home" });
      } else {
        next();
        console.log("go login");
      }
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: Login,
    props: {
      page: "ResetPassword",
    },
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Login,
    props: (route) => ({
      page: "Register",
      isGroup: route.name === "Register Group",
    }),
    children: [
      {
        path: ":id",
        name: "Register",
        component: Login,
      },
      {
        path: "group/:id",
        name: "Register Group",
        component: Login,
      },
    ],
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn) {
        next({ name: "Home" });
      } else {
        if (to.name === "Register Group")
          axios
            .get(
              `${process.env.VUE_APP_API_DOMAIN}/get-group-invites/${to.params.id}`
            )
            .then((res) => {
              store.commit("setInvite", res.data);
              next();
            })
            .catch((err) => {
              next({ name: "Login" });
              console.log("go login");
            });
        else
          axios
            .get(`${process.env.VUE_APP_API_DOMAIN}/getinvite/${to.params.id}`)
            .then((res) => {
              store.commit("setInvite", res.data);
              next();
            })
            .catch((err) => {
              next({ name: "Login" });
              console.log("go login");
            });
      }
    },
  },
  { path: "/:pathMatch(.*)*", component: PathNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (store.state.isLoggedIn) {
    next();
  } else {
    axios
      .get(`${process.env.VUE_APP_API_DOMAIN}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.id) {
          store.commit("setIsLoggedIn", res.data);
          store.commit("setReadPages", res.data.readPages);
          next();
        } else {
          if (to.name === "ResetPassword") {
            next();
          } else {
            next({ name: "Login" });
            console.log("no user data, go login", res);
          }
        }
      })
      .catch((err) => {
        if (
          to.name === "Login" ||
          to.name === "Register" ||
          to.name === "Register Group" ||
          to.name === "ResetPassword"
        ) {
          next();
        } else {
          next({ name: "Login" });
        }
      });
  }
});

export default router;
