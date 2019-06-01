/** 内容布局 上为echarts，下为table*/
<template>
  <div v-bind:class="['echarts-table', 'w100', 'h100', diyClass]">
    <div class="content w100">
      <div v-if="this.$slots.echarts" class="echarts-box w100">
        <slot name="echarts"></slot>
      </div>
      <div v-if="this.$slots.table_content" class="table-box w100">
        <div class="w100 table">
          <slot name="table_content"></slot>
        </div>
        <div class="table_pagination">
          <slot name="table_pagination_content"></slot>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EchartsTable",
  props: {
    diyClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.echarts-table {
  overflow: hidden;
  box-sizing: border-box;

  .content {
    @include bg-color-transparent(#00175b, 0.8);
    height: calc(100% - 30px);

    .echarts-box {
      height: 45%;
    }

    .table-box {
      @include flex;
      @include flex-column;
      height: 55%;

      .table {
        height: calc(100% - 40px);
      }

      .table_pagination {
        @include flex;
        @include flex-primary-axis-end;
        @include flex-secondary-axis-center;
        height: 40px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
  }
}
</style>
