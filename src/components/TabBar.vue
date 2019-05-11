/**标签栏 */
<template>
  <div v-bind:class="['tab-bar', 'w100', 'h100', diyClass]">
    <el-scrollbar class="scrollbar">
      <ul class="tabs w100 h100" res="tabs">
        <li v-bind:class="['tab']">
          <a>123</a>
        </li>
        <li v-bind:class="['tab', 'tab-active']">
          <a>123</a>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    // 自定义class
    diyClass: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.tab-bar {
  overflow-x: hidden;
  overflow-y: auto;

  a {
    @include text-ellipsis;
  }

  .tab {
    @include bg-color($bg-color-content);
    text-align: center;
    color: $font-color-3;
    height: 30px;
    line-height: 30px;
    position: relative;
    border-bottom: 1px solid #007294;
    font-size: 14px;
  }

  .tab-active {
    a {
      color: $color-fff;
    }
  }
}
</style>
