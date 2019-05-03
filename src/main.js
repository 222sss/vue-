import Vue from "vue";
// 引入ElementUI
import {
  Form,
  FormItem,
  Button,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Loading,
  Input,
  Dialog,
  Table,
  TableColumn,
  Pagination,
  Scrollbar
} from "element-ui";
import "assets/font/font.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);

Vue.use(Select);
Vue.use(Loading);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Scrollbar);

// 判断是否登录
router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem("token")) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
