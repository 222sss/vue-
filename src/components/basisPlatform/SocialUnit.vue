/**社会单位 */
<template>
  <div class="social-unit w100 h100">
    <div class="box-title w100">
      <img src="../../assets/img/build.png" />
      <span>社会单位</span>
    </div>
    <echarts-table v-if="detalis">
      <template slot="echarts">
        <div class="w100 h100" id="unitEcharts"></div>
      </template>
    </echarts-table>
  </div>
</template>

<script>
import EchartsTable from "components/layout/EchartsTable";
import { dataIsNullArray, initECharts } from "@/utils/tool";
import { socialUnit } from "@/utils/api";

export default {
  name: "SocialUnit",
  components: {
    EchartsTable
  },
  data: function() {
    return {
      // 详情
      detalis: true,
      // echarts
      socialUnitEcharts: null
    };
  },
  methods: {
    // 获取数据
    getData: function() {
      // echarts配置
      let option = {};
      socialUnit().then(res => {
        if (res.data.code == 200) {
          // echarts
          const echartsData = dataIsNullArray(res.data.socialUnitEcharts);
          option = {
            tooltip: {
              show: true
            },
            legend: {
              orient: "vertical",
              top: "30%",
              left: "10%",
              itemGap: 20,
              data: ["一般单位", "重点单位", "高危单位"]
            },
            series: [
              {
                name: "",
                type: "pie",
                radius: "70%",
                center: ["50%", "50%"],
                data: [
                  {
                    value: 2,
                    name: "重点单位",
                    itemStyle: {
                      normal: {
                        color: "#d63e41"
                      }
                    }
                  },
                  {
                    value: 5,
                    name: "高危单位",
                    itemStyle: {
                      normal: {
                        color: "#25c65d"
                      }
                    }
                  },
                  {
                    value: 40,
                    name: "一般单位",
                    itemStyle: {
                      normal: {
                        color: "#11aafd"
                      }
                    }
                  }
                ],
                label: {
                  normal: {
                    show: false,
                    position: "center"
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
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
          this.buildEcharts = initECharts(
            document.getElementById("unitEcharts"),
            option
          );
        }
        // eslint-disable-next-line
        console.log(res);
      });
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.social-unit {
  overflow: hidden;
}
</style>
