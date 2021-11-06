import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import PathNotFound from "../components/PathNotFound";
import store from "../store/index";
import axios from "axios";

const isAuthenticated = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
      else next();
    },
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
        .get(`http://localhost:1337/getinvite/${to.params.id}`)
        .then((res) => {
          store.commit("setInvite", res.data);
          next();
        })
        .catch((err) => {
          console.log(err);
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

export default router;
