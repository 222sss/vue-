import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "basisPlatform", // 重定向
      children: [
        // 基础平台主页
        {
          path: "/basisPlatform",
          name: "basisPlatform",
          component: () =>
            import(/* webpackChunkName: "BasisPlatform" */ "./views/BasisPlatform.vue")
        },
        // 责任平台主页
        {
          path: "/responsibility",
          name: "responsibility",
          component: () =>
            import(/* webpackChunkName: "Responsibility" */ "./views/Responsibility.vue")
        }
      ]
    }
  ]
});
