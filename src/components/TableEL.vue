/**表格 */
<template>
  <el-table
    v-loading="isLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0)"
    v-bind:ref="`eltable${refName}`"
    style="width: 100%"
    v-bind:border="showBorder"
    v-bind:height="getHeight"
    v-bind:max-height="maxHeight"
    v-bind:size="tableSize"
    v-bind:show-header="showHeader"
    v-bind:highlight-current-row="isHighlightCurrentRow"
    v-bind:row-class-name="rowClassName"
    v-bind:cell-class-name="cellClassName"
    v-bind:header-cell-class-name="headerCellClassName"
    v-on:selection-change="selectionChangeHandle"
    v-bind:empty-text="getEmptyText"
    v-bind:data="tableData"
  >
    <el-table-column type="selection" width="36" v-if="canSelect">
    </el-table-column>
    <el-table-column
      v-for="(column, index) in columns"
      v-bind:key="index"
      v-if="column.type === 'index'"
      v-bind:type="column.type"
      v-bind:index="getTableIndex"
      v-bind:label="column.label"
      v-bind:width="column.width"
      v-bind:fixed="column.fixed"
      v-bind:resizable="column.resizable"
      v-bind:align="column.align"
      v-bind:header-align="column.alignHeader"
    >
    </el-table-column>
    <el-table-column
      v-else
      v-bind:key="index"
      v-bind:label="column.label"
      v-bind:prop="column.prop"
      v-bind:width="column.width"
      v-bind:fixed="column.fixed"
      v-bind:sortable="column.sortable"
      v-bind:resizable="column.resizable"
      v-bind:align="column.align"
      v-bind:header-align="column.alignHeader"
      v-bind:show-overflow-tooltip="column.showOverflowTooltip"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    // 是否显示加载
    isLoading: {
      type: Boolean,
      default: false
    },
    // ref名
    refName: {
      type: String,
      default: ""
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 高度
    height: String,
    // 最大高度
    maxHeight: String,
    // 大小
    tableSize: String,
    // 是否显示列标题头
    showHeader: {
      type: Boolean,
      default: true
    },
    // 是否高亮当前行
    isHighlightCurrentRow: {
      type: Boolean,
      default: true
    },
    // 是否现象数据为空提示
    showEmptyText: {
      type: Boolean,
      default: true
    },
    // 数据
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 是否可选择
    canSelect: {
      type: Boolean,
      default: false
    },
    // 列配置
    columns: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    // 获取高度
    getHeight: function() {
      return this.maxHeight ? null : this.height ? this.height : "100%";
    },
    // 获取数据为空提示
    getEmptyText: function() {
      return this.showEmptyText ? "暂无数据" : " ";
    }
  },
  methods: {
    // 行类名
    rowClassName: function({ rowIndex }) {
      return rowIndex % 2 !== 0 ? "table_row" : "table_row_stripe";
    },
    // 单元格类名
    cellClassName: function({ columnIndex }) {
      const str = "table_cell";
      const maxIndex = this.columns.length - (this.$slots.oper ? 0 : 1);
      if (columnIndex === 0) {
        return `${str} table_cell_first`;
      }
      if (columnIndex === maxIndex) {
        return `${str} table_cell_last`;
      }
      return str;
    },
    // 列标题头类名
    headerCellClassName: function() {
      return "table_header_cell";
    },
    // 选择改变
    selectionChangeHandle: function(selection) {
      this.$emit("tableSelectionChange", selection);
    },
    // 获取表格记录索引
    getTableIndex: function(index) {
      const no = index + 1;
      return no < 10 ? `0${no}` : no;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";
</style>
