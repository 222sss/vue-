/**重要建筑 */
<template>
  <div class="important-building w100 h100">
    <echarts-table v-bind:title="'重要建筑'">
      <template slot="echarts">
        123
      </template>
      <template slot="table_content">
        <table-e-l
          v-bind:ref-name="'important-building'"
          v-bind:isLoading="tableLoading"
          v-bind:max-height="tableMaxHeight"
          v-bind:columns="tableColumns"
          v-bind:tableSize="'mini'"
          v-bind:table-data="tableData"
        ></table-e-l>
      </template>
      <template slot="table_pagination_content">
        123
      </template>
    </echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";
import TableEL from "components/TableEL";
import { calcTableMaxHeight } from "@/utils/tool";

export default {
  name: "ImportantBuilding",
  components: {
    EchartsTable,
    TableEL
  },
  data: function() {
    return {
      // 表格是否显示加载
      tableLoading: false,
      // 表格最大高度
      tableMaxHeight: null,
      // 表格列配置
      tableColumns: [
        {
          align: "center",
          fixed: true,
          alignHeader: "center",
          label: "编号",
          resizable: false,
          type: "index",
          width: "60"
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "建筑名称",
          prop: "unitName",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "地址",
          prop: "unitDress",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "管理单位",
          prop: "unitType",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "联系人",
          prop: "type",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "联系电话",
          prop: "state",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: "right",
          alignHeader: "center",
          label: "详情",
          prop: "pop",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        }
      ],
      // 表格数据
      tableData: []
    };
  },
  methods: {
    // 获取表格最大高度
    getTableMaxHeight: function() {
      this.tableMaxHeight = String(calcTableMaxHeight(true, true));
    }
  },
  created: function() {
    this.getTableMaxHeight();
    for (let i = 0; i < 10; i++) {
      this.tableData.push({
        unitName: "name",
        unitDress: "address",
        unitType: "unitType",
        type: "monitorType",
        state: "safeState",
        pop: "chargePerson"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.important-building {
  overflow: hidden;
}
</style>
