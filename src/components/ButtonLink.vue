/** 按钮（链接）*/
<template>
  <a
    target="_blank"
    v-bind:class="[
      'buttonlink',
      color === 'blue'
        ? 'buttonlink_blue'
        : color === 'yellow'
        ? 'buttonlink_yellow'
        : '',
      diyClass
    ]"
    v-bind:href="href"
    v-bind:style="diyStyle"
    v-bind:title="text"
    v-cloak
    v-if="href"
  >
    {{ text }}
  </a>
  <a
    v-bind:class="[
      'buttonlink',
      color === 'blue'
        ? 'buttonlink_blue'
        : color === 'yellow'
        ? 'buttonlink_yellow'
        : '',
      diyClass
    ]"
    v-bind:style="diyStyle"
    v-bind:title="text"
    v-cloak
    v-on:click.stop="clickHandle"
    v-else
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "buttonlink",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    diyClass: {
      type: String,
      default: ""
    },
    diyStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    href: String,
    text: {
      type: String,
      default: "链接"
    }
  },
  methods: {
    clickHandle: function() {
      this.$emit("click", this.data);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/common.scss";
.buttonlink {
  font-size: 14px;
  cursor: pointer;
  margin: 0 2px;

  &.buttonlink_blue {
    color: #0d80d1;
  }

  &.buttonlink_yellow {
    color: #ff9d0a;
  }

  &.table_link {
    color: #808080;
  }

  &.buttonlink_red {
    color: #fc6766;
  }

  &.buttonlink_green {
    color: #50a854;
  }
}
</style>
