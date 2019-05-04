/*
* 内容布局
* 上为echarts，下为table
 */
<template>
  <div class="echarts-table w100 h100">
    EchartsTable
  </div>
</template>

<script>
export default {
  name: "EchartsTable"
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.echarts-table {
  overflow: hidden;
  background: red;
}
</style>
