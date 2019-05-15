/**基础平台主页 */
<template>
  <div class="basisPlatform w100 h100">
    <div class="navs h100">
      <navs v-bind:navs="navsList" @changeNav="changeContent"></navs>
    </div>
    <div class="content h100">
      <div class="choose w100">
        <el-select
          v-model="areaSelect"
          filterable
          class="areaSelect"
          v-bind:popper-append-to-body="false"
        >
          <el-option
            v-for="item in options"
            v-bind:key="item.value"
            v-bind:label="item.label"
            v-bind:value="item.value"
            class="areaOption"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="plateSelect"
          class="areaSelect"
          v-bind:popper-append-to-body="false"
        >
          <el-option
            v-for="item in navsList"
            v-bind:key="item.id"
            v-bind:label="item.text"
            v-bind:value="item.router"
            class="areaOption"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入单位"
          suffix-icon="el-icon-search"
          v-model="search"
          class="areaSearch"
        >
        </el-input>
        <el-button class="new">新增</el-button>
      </div>
      <div class="content-router w100">
        <div class="w100 contentBox">
          <router-view ref="child"></router-view>
        </div>
        <div class="bot-box w100">
          <div class="bot-content h100">
            <div class="imgDiv h100">
              <img src="../assets/img/build.png" />
            </div>
            <div class="chooseDiv h100">
              <el-checkbox-group v-model="checkList" size="mini">
                <el-checkbox
                  v-for="check of checkListData"
                  v-bind:key="check.id"
                  v-bind:label="check.label"
                  border
                ></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="bot-btn h100" v-if="showBtn">
              <span>撒点</span>
              <span>列表</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navs from "components/Navs";
import dataList from "utils/data";

export default {
  name: "BasisPlatform",
  components: {
    Navs
  },
  data: function() {
    return {
      // 导航
      navsList: dataList.basisPlatformNavs,
      // 区域选择
      areaSelect: 1,
      // 区域
      options: dataList.areaSelect,
      // 版块
      plateSelect: "",
      // 搜索
      search: "",
      // 底部选择内容
      checkListData: [],
      // 底部选择
      checkList: [],
      // 显示撒点列表按钮
      showBtn: true
    };
  },
  methods: {
    // 点击导航
    changeContent: function(id) {
      this.navsList.map(res => {
        if (id == res.id) {
          this.checkListData = res.checkList;
          this.showBtn = true;
          // eslint-disable-next-line
          console.log(res);
        }
        if (id == 7) {
          this.showBtn = false;
        }
      });
      // eslint-disable-next-line
      console.log(id);
    },
    // 刷新时判断显示
    refershShow: function(router) {
      this.navsList.map(res => {
        if (router == res.router) {
          this.checkListData = res.checkList;
          this.showBtn = true;
        }
        if (router == "fireWaterSupply") {
          this.showBtn = false;
        }
      });
    },
    // 触发页面改变大小
    callResize: function() {
      const child = this.$refs["child"];
      if (child && typeof child.callResize === "function") {
        child.callResize();
      }
    }
  },
  mounted: function() {
    this.plateSelect = this.$route.name;
    this.refershShow(this.$route.name);
  },
  watch: {
    plateSelect: function() {
      this.$router.push({ path: `/${this.plateSelect}` });
    },
    $route: function(to) {
      this.plateSelect = to.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.basisPlatform {
  @include flex;
  overflow: hidden;

  .navs {
    width: 117px;
    margin-right: 30px;
  }

  .content {
    @include flex;
    @include flex-column;
    width: calc(100% - 147px);
    box-sizing: border-box;
    padding: 10px;

    .choose {
      @include flex;
      @include flex-primary-axis-end;
      height: 40px;
    }

    .content-router {
      @include flex;
      @include flex-column;
      @include flex-primary-axis-between;
      flex: 1;
      box-sizing: border-box;
      padding-right: 8%;

      .contentBox {
        height: calc(100% - 80px);
      }

      .bot-box {
        @include flex;
        @include flex-primary-axis-center;
        color: $color-fff;
        height: 30px;

        .bot-content {
          @include flex;
          @include bg-color(#00165a);
          border: 1px solid #264082;
          border-radius: 5px;

          .imgDiv {
            @include flex;
            @include flex-primary-axis-center;
            @include flex-secondary-axis-center;
            width: 30px;
            background: url("../assets/img/buildBackgroud.png") no-repeat;
            background-size: 100%;

            img {
              display: block;
              width: 23px;
              height: 20px;
            }
          }

          .chooseDiv {
            @include flex;
            @include flex-secondary-axis-center;
            padding: 0 16px;
          }

          .bot-btn {
            @include flex;
            @include flex-secondary-axis-center;
            background: url("../assets/img/buildBackgroud.png") no-repeat;
            background-size: 100%;
            font-size: 12px;
            color: #2bc4dd;
            padding: 0 5px;

            span {
              margin: 0 5px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "assets/css/common.scss";

.basisPlatform {
  .areaSelect {
    width: 120px;
    margin-right: 10px;
  }

  .areaSearch {
    width: 140px;
    height: 26px;
  }

  .el-input__inner {
    border: 1px solid #007294;
    color: $font-color-2;
    background: none;
    height: 26px;
  }

  .el-input__icon {
    line-height: 26px;
  }

  .el-input .el-select__caret,
  .el-input__prefix,
  .el-input__suffix {
    color: $font-color-2;
  }

  .new {
    height: 26px;
    line-height: 26px;
    padding: 0 18px;
    background: #015199;
    border: 1px solid #1c70af;
    color: $color-fff;
    margin-left: 20px;
  }
}
</style>
