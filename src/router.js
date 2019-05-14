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
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      redirect: "basisPlatform", // 重定向
      children: [
        // 基础平台主页
        {
          path: "/basisPlatform",
          name: "basisPlatform",
          redirect: "importantBuilding", // 重定向
          component: () =>
            import(/* webpackChunkName: "BasisPlatform" */ "./views/BasisPlatform.vue"),
          children: [
            {
              path: "/importantBuilding",
              name: "importantBuilding",
              component: () =>
                import(/* webpackChunkName: "ImportantBuilding" */ "./components/basisPlatform/ImportantBuilding.vue")
            },
            {
              path: "/socialUnit",
              name: "socialUnit",
              component: () =>
                import(/* webpackChunkName: "SocialUnit" */ "./components/basisPlatform/SocialUnit.vue")
            },
            {
              path: "/productManufacturer",
              name: "productManufacturer",
              component: () =>
                import(/* webpackChunkName: "ProductManufacturer" */ "./components/basisPlatform/ProductManufacturer.vue")
            },
            {
              path: "/facilitatingAgency",
              name: "facilitatingAgency",
              component: () =>
                import(/* webpackChunkName: "FacilitatingAgency" */ "./components/basisPlatform/FacilitatingAgency.vue")
            },
            {
              path: "/fireForce",
              name: "fireForce",
              component: () =>
                import(/* webpackChunkName: "FireForce" */ "./components/basisPlatform/FireForce.vue")
            },
            {
              path: "/linkageForces",
              name: "linkageForces",
              component: () =>
                import(/* webpackChunkName: "LinkageForces" */ "./components/basisPlatform/LinkageForces.vue")
            },
            {
              path: "/fireWaterSupply",
              name: "fireWaterSupply",
              component: () =>
                import(/* webpackChunkName: "FireWaterSupply" */ "./components/basisPlatform/FireWaterSupply.vue")
            }
          ]
        },
        // 责任平台主页
        {
          path: "/responsibility",
          name: "responsibility",
          redirect: "Unitliability", // 重定向
          component: () =>
            import(/* webpackChunkName: "Responsibility" */ "./views/Responsibility.vue"),
            children:[
            {
              path:"/Unitliability",
              name:"Unitliability",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/Unitliability.vue")
            },
            {
              path:"/Departmentalcomanagement",
              name:"Departmentalcomanagement",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/Departmentalcomanagement.vue")
            },
            {
              path:"/Supervision",
              name:"Supervision",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/Supervision.vue")
            },
            {
              path:"/Safetyassessment",
              name:"Safetyassessment",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/Safetyassessment.vue")
            },
            {
              path:"/Responsibilitynetwork",
              name:"Responsibilitynetwork",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/Responsibilitynetwork.vue")
            },
            {
              path:"/Supervise",
              name:"Supervise",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/Supervise.vue")
            },
            {
              path:"/PublicSecurity",
              name:"PublicSecurity",
              component: () =>
                import(/* webpackChunkName: "Responsibility" */ "./components/responsibility/PublicSecurity.vue")
            }
           
            
            ]
        }
      ]
    }
  ]
});
