/**产品厂家 */
<template>
  <div class="product-manufacturer w100 h100">
    <echarts-table v-bind:title="'产品厂家'"></echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";

export default {
  name: "ProductManufacturer",
  components: {
    EchartsTable
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.product-manufacturer {
  overflow: hidden;
}
</style>
