/** 内容布局 上为echarts，下为table*/
<template>
  <div v-bind:class="['echarts-table', 'w100', 'h100', diyClass]">
    <div class="title w100">
      <img src="../../assets/img/build.png" />
      <span>{{ title }}</span>
    </div>
    <div class="content w100">
      <div class="echarts-box w100">
        <slot name="echarts"></slot>
      </div>
      <div class="table-box w100">
        <div class="w100 table">
          <slot name="table_content"></slot>
        </div>
        <div class="table_pagination">
          <slot name="table_pagination_content"></slot>
        </div>
      </div>
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
  padding-bottom: 20px;

  .title {
    @include flex;
    @include flex-secondary-axis-center;
    @include bg-color(#002996);
    color: $font-color-3;
    height: 30px;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;

    img {
      display: block;
      width: 23px;
      height: 20px;
      margin-right: 16px;
    }
  }

  .content {
    @include bg-color-transparent(#00175b, 0.8);
    height: 600px;

    .echarts-box {
      height: 45%;
    }

    .table-box {
      @include flex;
      @include flex-column;
      height: 55%;

      .table {
        flex: 1;
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
