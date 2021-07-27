import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
import { Position } from "vue-router/types/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  //懒加载路由：当跳转到路由页面时，相应页面文件才会加载
  //使用named routes后就不需要静态路由了
  //named routes：动态路由
  {
    //path: "/details/:id",
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // webpack特性，magic comment，给chunk命名
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) =>
          (destination as Record<string, unknown>).slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
  },
  //user路由
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
    meta: { requiresAuth: true },
  },
  //login路由
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "../views/Invoices.vue"),
    meta: { requiresAuth: true },
  },
  //404路由
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  //修改路由Active Class
  linkExactActiveClass: "vue-router-class",
  scrollBehavior(to: Route, from: Route, savedPosition: void | Position) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {
        selector: "",
        offset: {} as Position,
      };
      if (to.hash) {
        //console.log(to.hash);
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { x: 0, y: 140 };
        }
        //console.log(document.querySelector(to.hash));
        if (document.querySelector(to.hash)) {
          return position;
        }
        return null;
      }
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to.matched);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
