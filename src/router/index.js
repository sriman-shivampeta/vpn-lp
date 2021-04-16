import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "@/components/Auth/SignUp.vue";
import Login from "@/components/Auth/Login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "*",
    redirect: "/signup",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "SignUp") {
    store.dispatch("getUserDetails");
  }
  if (to.name === "Login") {
    localStorage.removeItem("token");
  }
  next();
});

export default router;
