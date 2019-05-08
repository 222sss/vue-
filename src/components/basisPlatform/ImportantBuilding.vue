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
          v-bind:tableSize="'small'"
          v-bind:table-data="tableData"
        ></table-e-l>
      </template>
      <template slot="table_pagination_content">
        <el-pagination
          background
          v-bind:total="tableDataTotal"
          v-bind:page-size="tablePageSize"
          v-bind:page-sizes="[2, 4, 8, 10]"
          v-bind:current-page.sync="tablePageNo"
          layout="prev, pager, next, total, jumper, sizes"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </template>
    </echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";
import TableEL from "components/TableEL";
import {
  calcTableMaxHeight,
  dataIsNullArray,
  dataIsNullNumber
} from "@/utils/tool";
import { buildingHomeTable } from "@/utils/api";

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
          prop: "buildingName",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "地址",
          prop: "buildingDress",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "管理单位",
          prop: "unit",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "联系人",
          prop: "pop",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "联系电话",
          prop: "phone",
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
          showOverflowTooltip: true
        }
      ],
      // 表格数据
      tableData: [],
      // 表格数据总数
      tableDataTotal: 0,
      // 分页当前页码
      tablePageNo: 1,
      // 分页每页显示记录数
      tablePageSize: 2,
      // 数据暂存
      tableMockData: [],
      tableParams: {}
    };
  },
  methods: {
    // 获取表格最大高度
    getTableMaxHeight: function() {
      this.tableMaxHeight = String(calcTableMaxHeight(true, true));
    },
    // 每页展示条数选择
    handleSizeChange: function(val) {
      this.tablePageSize = val;
      this.tableLoading = true;
      this.searchTable();
    },
    // 分页按钮
    handleCurrentChange: function(val) {
      this.tablePageNo = val;
      this.tableLoading = true;
      this.searchTable(this.tablePageNo);
    },
    // 获取数据
    getData: function() {
      buildingHomeTable().then(res => {
        if (res.data.code == 200) {
          const data = dataIsNullArray(res.data.buildingHomeTable);
          data.map(record => {
            this.tableMockData.push({
              buildingName: record.buildingName,
              buildingDress: record.buildingDress,
              unit: record.unit,
              pop: record.pop,
              phone: record.phone
            });
          });
          this.searchTable();
        }
      });
    },
    // 分页查询表格
    searchTable: function(pageNo = 1, loading = null) {
      setTimeout(() => {
        const data = [];
        this.tableMockData.map(record => {
          data.push(record);
        });
        this.clearTable();
        let i = 0;
        const iStart = (pageNo - 1) * this.tablePageSize;
        const iEnd = pageNo * this.tablePageSize - 1;
        for (i = iStart; i <= iEnd; i++) {
          if (data[i]) {
            this.tableData.push(data[i]);
          }
        }
        this.tableDataTotal = dataIsNullNumber(data.length);
        if (loading) {
          loading.close();
        } else {
          this.tableLoading = false;
        }
      }, 500);
    },
    // 清空表格
    clearTable: function() {
      this.tableData.splice(0, this.tableData.length);
    }
  },
  mounted: function() {
    this.getData();
    this.getTableMaxHeight();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.important-building {
  overflow: hidden;
}
</style>
