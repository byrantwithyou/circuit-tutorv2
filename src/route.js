import Vue from "vue";
import Router from "vue-router";
import overview from "./components/overview";
import student from "./components/student";
import single from "./components/single";
import singleT from "./components/singleT";
import sc from "./components/sc";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: overview
  },
  {
    path: "/student",
    component: student
  },
  {
    path: "/single",
    component: single
  },
  {
    path: "/singlet",
    component: singleT
  },
  {
    path: "/sc",
    component: sc
  }
];

const router = new Router({
  routes
});

export default router;

