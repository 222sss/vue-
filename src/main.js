import Vue from "vue";
// 引入ElementUI
import {
  Form,
  FormItem,
  Button,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Message,
  Select,
  Option,
  OptionGroup,
  Input,
  Loading,
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
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Input);

Vue.use(Loading);
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

import { duration } from "./utils/global";

new Vue({
  methods: {
    /*
     * 显示消息提示
     * @param type 类型
     * @param msg 消息
     * @param showClose 是否显示关闭
     */
    showMessage: function(type, msg, showClose = true) {
      switch (type) {
        case "success":
          Message.success({
            duration: duration,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
        case "error":
          Message.error({
            duration: duration,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
        case "warning":
          Message.warning({
            duration: duration,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
        default:
          Message.info({
            duration: duration,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
      }
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
