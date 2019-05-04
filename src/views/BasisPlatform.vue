/**基础平台主页 */
<template>
  <div class="basisPlatform w100 h100">
    <div class="navs h100">
      <navs v-bind:navs="navsList"></navs>
    </div>
    <div class="content h100">
      <router-view ref="child"></router-view>
    </div>
  </div>
</template>

<script>
import Navs from "components/Navs";
import navsList from "utils/data";

export default {
  name: "BasisPlatform",
  components: {
    Navs
  },
  data: function() {
    return {
      navsList: navsList.basisPlatformNavs
    };
  },
  methods: {
    // 触发页面改变大小
    callResize: function() {
      const child = this.$refs["child"];
      if (child && typeof child.callResize === "function") {
        child.callResize();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.basisPlatform {
  @include flex;
  overflow: hidden;

  .navs {
    width: 117px;
    margin-right: 30px;
  }

  .content {
    flex: 1;
    background: red;
  }
}
</style>
