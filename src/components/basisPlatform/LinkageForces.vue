/**联动力量 */
<template>
  <div class="linkage-forces w100 h100">
    <echarts-table v-bind:title="'联动力量'"></echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "LinkageForces",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.linkage-forces {
  overflow: hidden;
}
</style>
