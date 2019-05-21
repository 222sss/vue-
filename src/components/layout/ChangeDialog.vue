/**修改弹窗布局 */
<template>
  <div v-bind:class="['change-dialog', 'w100', diyClass]">
    <div class="dialog-left h100">
      <tab-bar ref="tabbar" v-bind:tabs="tabs" @change="tabChange"></tab-bar>
    </div>
    <div class="dialog-right h100">
      <div class="right-conten w100">
        <el-scrollbar class="scrollbar">
          <div
            class="chang-box w100"
            v-for="change of changes"
            v-bind:key="change.id"
          >
            <div class="change-label">
              {{ change.label }}
            </div>
            <div v-if="change.type == 'input'" class="change">
              <el-input v-model="change.value" class="chang-input"></el-input>
            </div>
            <div v-if="change.type == 'select'" class="change">
              <el-select
                v-model="change.value"
                filterable
                v-bind:popper-append-to-body="false"
              >
                <el-option
                  v-for="item in change.options"
                  v-bind:key="item.id"
                  v-bind:label="item.label"
                  v-bind:value="item.id"
                >
                </el-option>
              </el-select>
            </div>
            <div v-if="change.type == 'upload'" class="change">
              <el-upload
                class="upload"
                ref="upload"
                action=""
                v-bind:file-list="change.value"
                v-bind:auto-upload="false"
                :on-change="handleChange"
              >
                <el-button
                  slot="trigger"
                  size="mini"
                  type="primary"
                  class="upBtn"
                >
                  选取文件
                </el-button>
              </el-upload>
            </div>
            <div v-if="change.type == 'timer'" class="change">
              <el-date-picker
                v-model="change.value"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="btns w100">
        <el-button class="new" @click="save">保存</el-button>
        <el-button class="new" @click="empty">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "../TabBar";

export default {
  name: "ChangeDialog",
  components: {
    TabBar
  },
  props: {
    // 自定义class
    diyClass: {
      type: String,
      default: ""
    },
    // 标签
    tabs: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 选中标签
    tabKey: {
      type: String,
      default: ""
    },
    // change数据
    changes: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      // 选中标签，操作用
      tabKeys: ""
    };
  },
  methods: {
    // 切换选中
    tabChange: function(key) {
      this.tabKeys = this.tabKey;
      this.tabKeys = key;
    },
    // 选择文件
    handleChange: function(file) {
      this.changes.map(res => {
        if (res.type == "upload") {
          res.value = [];
          res.value.push(file);
        }
      });
    },
    // 第一次进入改变选中后，第二次进入回到第一个
    recover: function() {
      const tabbar = this.$refs["tabbar"];
      if (tabbar) {
        tabbar.setActiveKey(this.tabs[0].key);
        this.tabKeys = this.tabs[0].key;
      }
    },
    // 保存
    save: function() {
      // eslint-disable-next-line
      console.log("保存");
      this.changes.map(res => {
        // eslint-disable-next-line
        console.log(res.value)
      });
    },
    // 清空
    empty: function() {
      // eslint-disable-next-line
      console.log("清空");
      this.changes.map(res => {
        if (res.type == "upload") {
          res.value = [];
        } else {
          res.value = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.change-dialog {
  @include flex;
  @include diyBg-relative("../../", "backgroud.png", center, center);
  background-size: cover;
  height: 400px;
  overflow: hidden;

  .dialog-left {
    @include bg-color-transparent($bg-color-content, 0.6);
    width: 180px;
  }

  .dialog-right {
    @include flex;
    @include flex-column;
    @include flex-primary-axis-between;
    width: calc(100% - 180px);

    .right-conten {
      height: calc(100% - 40px);

      .chang-box {
        @include flex;
        @include flex-primary-axis-between;
        @include flex-secondary-axis-center;
        height: 34px;
        color: $color-fff;
        box-sizing: border-box;
        padding: 0 10px;

        .change {
          width: 200px;
        }
      }
    }

    .btns {
      @include flex;
      @include flex-primary-axis-center;
      @include flex-secondary-axis-center;
      height: 40px;
    }
  }
}
</style>

<style lang="scss">
@import "assets/css/common.scss";

.change-dialog {
  .el-input__inner {
    color: $color-fff;
  }

  .upload {
    @include flex;
    @include flex-secondary-axis-center;
    @include flex-primary-axis-between;

    .el-button {
      background: #015199;
      border: 1px solid #1c70af;
      color: $color-fff;
      padding: 6px 10px;
    }

    .el-upload-list {
      width: calc(100% - 80px);

      .el-upload-list__item:first-child {
        margin-top: 0;
        border: 1px solid #007294;
      }

      .el-upload-list__item:hover {
        background-color: transparent;
        border: 1px solid #007294;
      }

      .el-upload-list__item-name {
        color: $color-fff;
        margin-right: 20px;
      }
    }
  }
}
</style>
