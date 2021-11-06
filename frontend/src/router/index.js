import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import PathNotFound from "../components/PathNotFound";
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
  },
  {
    path: "/register/:id",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      axios
        .get(`${process.env.API_DOMAIN}/getinvite/${to.params.id}`)
        .then((res) => {
          store.commit("setInvite", res.data);
          next();
        })
        .catch((err) => {
          console.log("no invite found");
          next("/login");
        });
    },
  },
  { path: "/:pathMatch(.*)*", component: PathNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("check if logged in", to);
  axios
    .get(`${process.env.API_DOMAIN}/users/me`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log("user logged in as", res.data);
      if (to.name === "Login") {
        next({ name: "Home" });
      } else {
        next();
      }
    })
    .catch((err) => {
      if (to.name === "Login" || to.name === "Register") {
        next();
      } else {
        console.log("nope logi first");
        next({ name: "Login" });
      }
    });
});

export default router;
