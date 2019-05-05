/**社会单位 */
<template>
  <div class="social-unit w100 h100">
    <echarts-table v-bind:title="'社会单位'"></echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "SocialUnit",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.social-unit {
  overflow: hidden;
}
</style>
