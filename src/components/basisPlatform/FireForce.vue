/**消防力量 */
<template>
  <div class="fire-force w100 h100">
    <echarts-table v-bind:title="'消防力量'"></echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "FireForce",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.fire-force {
  overflow: hidden;
}
</style>
