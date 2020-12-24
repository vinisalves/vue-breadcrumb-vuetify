import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import PageB from "../views/PageB.vue";
import PageC from "../views/PageC.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadCrumb: [
        {
          text: 'Home'
        }
      ]
    }
  },
  {
    path: "/:paramToPageB",
    name: "PageB",
    component: PageB,
    meta: {
      breadCrumb(route: Route) {
        const paramToPageB = route.params.paramToPageB;
        return [
          {
            text: 'Home',
            to: { name: 'Home' }
          },
          {
            text: paramToPageB,
          }

        ]
      }
    }
  },
  {
    path: "/:paramToPageB/action",
    name: "PageC",
    component: PageC,
    meta: {
      breadCrumb(route: Route) {
        const paramToPageB = route.params.paramToPageB;
        return [
          {
            text: 'Home',
            to: { name: 'Home' }
          },
          {
            text: paramToPageB,
            to: {
              name: 'PageB',
              params: {
                paramToPageB: paramToPageB
              }
            }
          },
          {
            text: 'Action'
          }

        ]
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
