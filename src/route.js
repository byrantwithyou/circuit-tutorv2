import Vue from "vue";
import Router from "vue-router";
import overview from "./components/overview";
import student from "./components/student";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: overview
  },
  {
    path: "/student",
    component: student
  }
];

const router = new Router({
  routes
});

export default router;

