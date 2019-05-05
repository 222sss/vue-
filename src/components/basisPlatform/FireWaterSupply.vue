/**消防水源 */
<template>
  <div class="fire-water w100 h100">
    <echarts-table v-bind:title="'消防水源'"></echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "FireWater",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.fire-water {
  overflow: hidden;
}
</style>
