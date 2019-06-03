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
                @click="changeData"
              ></button-link>
              <button-link
                v-bind:data="scope"
                v-bind:diy-class="'buttonlink_red'"
                v-bind:text="'删除'"
                @click="deleteF"
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
    <el-dialog
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      v-bind:visible.sync="changeDialog"
      width="600px"
      v-bind:custom-class="'dialog dialog-paddingzero'"
      top="200px"
      v-bind:title="'修改'"
      v-bind:close-on-click-modal="false"
    >
      <change-dialog
        ref="changeDialog"
        v-bind:tabs="tabs"
        v-bind:tabKey="tabKey"
        v-bind:changes="changes"
      ></change-dialog>
    </el-dialog>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";
import TableEL from "components/TableEL";
import {
  calcTableMaxHeight,
  dataIsNullArray,
  dataIsNullNumber,
  dataIsNullStr,
  initECharts
} from "@/utils/tool";
import ButtonLink from "@/components/ButtonLink.vue";
import { allData } from "@/utils/api";
import ChangeDialog from "components/layout/ChangeDialog";
import data from "../../utils/basisPlatform";
import { MessageBox } from "element-ui";

export default {
  name: "ProductManufacturer",
  components: {
    EchartsTable,
    TableEL,
    ButtonLink,
    ChangeDialog
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
      tableMockData: [],
      // echarts
      productEcharts: null,
      // 修改
      changeDialog: false,
      // 修改tab
      tabs: [
        {
          key: "product",
          text: "产品厂家"
        }
      ],
      // 选中标签
      tabKey: "product",
      // 修改内容
      changes: data.manufacturerChangeList
    };
  },
  methods: {
    // 获取表格最大高度
    getTableMaxHeight: function() {
      this.tableMaxHeight = String(calcTableMaxHeight(true, true));
    },
    // 获取数据
    getData: function() {
      // echarts配置
      let option = {};
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
          // echarts
          const echartsData = dataIsNullArray(res.data.manufacturerEcharts);
          option = {
            color: ["#11aafd", "#d63e41", "#25c65d"],
            tooltip: {
              show: true
            },
            legend: {
              orient: "vertical",
              top: "10%",
              left: "2%",
              itemGap: 10,
              data: [],
              textStyle: {
                color: "#fff"
              }
            },
            series: [
              {
                name: "",
                type: "pie",
                radius: "70%",
                center: ["50%", "50%"],
                triggerEvent: true,
                data: [],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          };
          echartsData.map(res => {
            option.legend.data.push(dataIsNullStr(res.name, "未知"));
            option.series[0].data.push({
              value: res.num,
              name: res.name
            });
          });
          this.productEcharts = initECharts(
            document.getElementById("productEcharts"),
            option
          );
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
    // 打开修改
    changeData: function(data) {
      this.changeDialog = true;
      const changeDialog = this.$refs["changeDialog"];
      if (changeDialog && typeof changeDialog.recover === "function") {
        changeDialog.recover();
      }
      // eslint-disable-next-line
      console.log(data);
    },
    // 删除
    deleteF: function(data) {
      // eslint-disable-next-line
      console.log(data);
      MessageBox.confirm("是否删除？", "删除", {
        closeOnClickModal: false,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        customClass: "messagebox",
        type: "warning"
      })
        .then(() => {
          this.$root.showMessage("success", "删除成功!");
        })
        .catch(() => {
          return;
        });
    },
    // 触发页面改变大小
    callResize: function() {
      this.getTableMaxHeight();
      if (this.productEcharts) {
        this.productEcharts.resize();
      }
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
