<template>
  <div id="app">
    <router-view ref="child"></router-view>
    <div class="h100 w100 noteDisplayMinSize" v-show="showDisplayMinSizeNote">
      <span class="w100">
        hi，您当前的浏览器窗口尺寸太小，影响体验，建议最低1000×600下浏览
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      // 最小浏览尺寸提示
      showDisplayMinSizeNote: false
    };
  },
  methods: {
    // 页面尺寸改变去找到子页面的callResize方法并执行
    callResize: function() {
      const child = this.$refs["child"];
      if (child && typeof child.callResize === "function") {
        this.t = setTimeout(() => {
          child.callResize();
        }, 300);
      }
    },
    // 显示最小浏览尺寸提示
    displayMinSize: function() {
      this.showDisplayMinSizeNote =
        document.body.clientWidth < 1000 || document.body.clientHeight < 600;
    }
  },
  mounted: function() {
    this.callResize();
    this.displayMinSize();
    window.onresize = () => {
      this.callResize();
      this.displayMinSize();
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/common.scss";

@include common;
@include a-common;
@include ul-common;

// element
@include el-checkbox;

html,
body {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
#app {
  overflow: hidden;
  height: 100%;
  width: 100%;

  .noteDisplayMinSize {
    @include bg-color($color-fff);
    left: 0;
    position: fixed;
    top: 0;
    z-index: 10000;

    span {
      display: block;
      text-align: center;
      color: $font-color-6;
      font-size: 14px;
      margin-top: 50px;
    }
  }
}
.h100 {
  height: 100%;
}
.w100 {
  width: 100%;
}
</style>
