<template>
  <div class="facilitating-agency w100 h100">
    <echarts-table v-bind:title="'单位履责'"></echarts-table>
  </div>
</template>
<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "Unitliability",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.facilitating-agency {
  overflow: hidden;
}
</style>
