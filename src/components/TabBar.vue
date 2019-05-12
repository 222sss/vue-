/**标签栏 */
<template>
  <div v-bind:class="['tab-bar', 'w100', 'h100', `tabbar-${key}`, diyClass]">
    <el-scrollbar class="scrollbar">
      <ul class="tabs w100 h100" res="tabs">
        <li
          v-for="tab of tabs"
          v-bind:key="tab.key"
          v-bind:class="['tab', tab.key === key ? 'tab-active' : '']"
          v-bind:ref="`tabbar-${tab.key}`"
        >
          <a
            v-bind:title="tab.text"
            v-cloak
            @click.stop="changeHandle(tab.key)"
          >
            {{ tab.text }}
          </a>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
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
    // 选中
    activeKey: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      key: String
    };
  },
  methods: {
    // 切换选中
    changeHandle: function(key) {
      this.key = key;
      this.$emit("change", key);
    },
    // 外部使用
    setActiveKey: function(key) {
      this.key = key;
    }
  },
  mounted() {
    if (this.activeKey) {
      this.key = this.activeKey;
      return;
    }
    if (this.tabs && this.tabs[0]) {
      this.key = this.tabs[0].key;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.tab-bar {
  overflow-x: hidden;
  overflow-y: auto;

  a {
    @include text-ellipsis;
  }

  .tab {
    @include bg-color($bg-color-content);
    text-align: center;
    color: $font-color-3;
    height: 30px;
    line-height: 30px;
    position: relative;
    border-bottom: 1px solid #007294;
    font-size: 14px;
  }

  .tab-active {
    a {
      color: $color-fff;
    }
  }
}
</style>
