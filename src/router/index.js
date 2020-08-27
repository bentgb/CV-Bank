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


];

const router = new VueRouter({
  routes
});

export default router;
