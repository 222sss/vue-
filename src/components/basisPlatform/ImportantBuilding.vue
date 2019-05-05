/**重要建筑 */
<template>
  <div class="important-building w100 h100">
    <echarts-table v-bind:title="'重要建筑'"></echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "ImportantBuilding",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.important-building {
  overflow: hidden;
}
</style>
