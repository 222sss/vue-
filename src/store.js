import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 登录账号名字
    userName: null
  },
  mutations: {
    changNameMutations: function(state, name) {
      state.userName = name;
      window.localStorage.setItem("username", name);
    }
  },
  actions: {
    changName: function(NAME, name) {
      NAME.commit("changNameMutations", name);
    }
  }
});
