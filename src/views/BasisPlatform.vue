/**基础平台主页 */
<template>
  <div class="basisPlatform w100 h100">
    <div class="navs h100">
      <navs v-bind:navs="navsList"></navs>
    </div>
    <div class="content h100">
      <div class="choose w100">
        <el-select
          v-model="areaSelect"
          filterable
          class="areaSelect"
          v-bind:popper-append-to-body="popper"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            class="areaOption"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="plateSelect"
          class="areaSelect"
          v-bind:popper-append-to-body="popper"
        >
          <el-option
            v-for="item in navsList"
            :key="item.id"
            :label="item.text"
            :value="item.router"
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
        <router-view ref="child"></router-view>
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
      popper: false,
      // 导航
      navsList: dataList.basisPlatformNavs,
      // 区域选择
      areaSelect: 1,
      // 区域
      options: dataList.areaSelect,
      // 版块
      plateSelect: "",
      // 搜索
      search: ""
    };
  },
  methods: {
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
    // eslint-disable-next-line
    console.log(this.$route.name);
  },
  watch: {
    plateSelect: function() {
      this.$router.push({ path: `/${this.plateSelect}` });
      // eslint-disable-next-line
      console.log(this.plateSelect);
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
    flex: 1;
    box-sizing: border-box;
    padding: 10px;

    .choose {
      @include flex;
      @include flex-primary-axis-end;
      height: 40px;
    }

    .content-router {
      flex: 1;
      background: green;
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

  .el-select-dropdown {
    border: 1px solid #1c70af;
    color: $color-fff;
    text-align: left;
    padding-bottom: 5px;
    background: rgba(0, 11, 55, 0.8);

    .el-select-dropdown__item {
      border-bottom: 1px solid #002c3e;
      color: $font-color-2;
      font-weight: 100;
    }

    .el-select-dropdown__item.hover,
    .el-select-dropdown__item:hover {
      background: rgb(1, 95, 132);
    }

    .popper__arrow,
    .popper__arrow::after {
      border-bottom-color: #002c3e !important;
    }
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
