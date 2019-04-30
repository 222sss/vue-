import Vue from "vue";
// // 引入ElementUI
// import ElementUI from "element-ui";
import {
  Select,
  Loading,
  Input,
  Button,
  Dialog,
  Table,
  TableColumn,
  Pagination,
  Message,
  Scrollbar
} from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Select);
Vue.use(Loading);
Vue.use(Input);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Message);
Vue.use(Scrollbar);

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
            duration: 3000,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
        case "error":
          Message.error({
            duration: 3000,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
        case "warning":
          Message.warning({
            duration: 3000,
            message: `${msg}！`,
            showClose: showClose
          });
          break;
        default:
          Message.info({
            duration: 3000,
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
