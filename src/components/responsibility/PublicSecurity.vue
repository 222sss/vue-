<template>
  <div class="facilitating-agency w100 h100">
    <echarts-table v-bind:title="'服务机构'"></echarts-table>
  </div>
</template>
<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "PublicSecurity",
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