/**产品厂家 */
<template>
  <div class="product-manufacturer w100 h100">
    <div class="box-title w100">
      <img src="../../assets/img/build.png" />
      <span>产品厂家</span>
    </div>
    <echarts-table>
      <template slot="echarts">
        <div class="w100 h100" id="productEcharts">123</div>
      </template>
      <template slot="table_content">
        <table-e-l
          v-bind:ref-name="'product-table'"
          v-bind:isLoading="tableLoading"
          v-bind:max-height="tableMaxHeight"
          v-bind:columns="tableColumns"
          v-bind:tableSize="'small'"
          v-bind:table-data="tableData"
        >
          <el-table-column
            v-bind:align="'center'"
            v-bind:fixed="'right'"
            v-bind:header-align="'center'"
            v-bind:label="'详情'"
            v-bind:resizable="false"
            v-bind:width="'140'"
          >
            <template slot-scope="scope">
              <button-link
                v-bind:data="scope"
                v-bind:diy-class="'buttonlink_red'"
                v-bind:text="'修改'"
              ></button-link>
              <button-link
                v-bind:data="scope"
                v-bind:diy-class="'buttonlink_red'"
                v-bind:text="'删除'"
              ></button-link>
            </template>
          </el-table-column>
        </table-e-l>
      </template>
      <template slot="table_pagination_content">
        <el-pagination
          background
          v-bind:total="tableDataTotal"
          v-bind:page-size="tablePageSize"
          v-bind:page-sizes="[2, 5, 8, 10]"
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
import ButtonLink from "@/components/ButtonLink.vue";
import { allData } from "@/utils/api";

export default {
  name: "ProductManufacturer",
  components: {
    EchartsTable,
    TableEL,
    ButtonLink
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
          label: "厂家名称",
          prop: "productName",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "产品类型",
          prop: "type",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "主要产品",
          prop: "product",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        },
        {
          align: "center",
          fixed: false,
          alignHeader: "center",
          label: "地址",
          prop: "dress",
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
          fixed: false,
          alignHeader: "center",
          label: "质量评价",
          prop: "evaluate",
          resizable: true,
          showOverflowTooltip: true,
          sortable: true
        }
      ],
      // 表格数据
      tableData: [],
      // 表格数据总数
      tableDataTotal: 0,
      // 分页当前页码
      tablePageNo: 1,
      // 分页每页显示记录数
      tablePageSize: 5,
      // 数据暂存
      tableMockData: []
    };
  },
  methods: {
    // 获取表格最大高度
    getTableMaxHeight: function() {
      this.tableMaxHeight = String(calcTableMaxHeight(true, true));
    },
    // 获取数据
    getData: function() {
      allData().then(res => {
        if (res.data.code == 200) {
          // 表格
          const data = dataIsNullArray(res.data.manufacturerTable);
          data.map(record => {
            this.tableMockData.push({
              productName: record.productName,
              type: record.type,
              product: record.product,
              dress: record.dress,
              pop: record.pop,
              phone: record.phone,
              evaluate: record.evaluate,
              id: record.id
            });
          });
          this.tableDataTotal = dataIsNullNumber(this.tableMockData.length);
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
    // 触发页面改变大小
    callResize: function() {
      this.getTableMaxHeight();
    }
  },
  mounted: function() {
    this.getTableMaxHeight();
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.product-manufacturer {
  overflow: hidden;
}
</style>
