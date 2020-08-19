import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },

  {
    path: "/mypage",
    name: "mypage",
    component: () =>
        import( "../views/mypage.vue")},

  {
    path: "/loginElev",
    name: "loginElev",
    component: () =>
        import( "../views/loginElev.vue")
  },
  {
    path: "/loginAd",
    name: "loginAd",
    component: () =>
        import( "../views/loginAd.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
