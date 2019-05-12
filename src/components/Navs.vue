/**导航 */
<template>
  <div v-bind:class="['nav-div', 'w100', 'h100', diyClass]">
    <div
      v-for="nav of navs"
      v-bind:key="nav.id"
      v-bind:class="['nav', 'w100', { navActive: active == nav.router }]"
      @click="change(nav.router)"
    >
      {{ nav.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Navs",
  props: {
    // 自定义class
    diyClass: {
      type: String,
      default: ""
    },
    // 导航
    navs: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      // 选中
      active: ""
    };
  },
  methods: {
    // 修改选中跳转路由
    change: function(router) {
      this.$router.push({ path: `/${router}` });
      this.active = router;
    }
  },
  mounted: function() {
    this.active = this.$route.name;
  },
  watch: {
    $route: function(to) {
      this.active = to.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.nav-div {
  @include flex;
  @include flex-column;
  @include flex-primary-axis-center;
  @include flex-secondary-axis-center;

  .nav {
    @include flex;
    @include flex-primary-axis-center;
    @include flex-secondary-axis-center;
    @include bg-color(#002890);
    color: $font-color-1;
    border: 1px solid #013d85;
    border-radius: 20px;
    font-size: 15px;
    height: 35px;
    margin-bottom: 12px;
    text-align: center;
  }

  .navActive {
    @include bg-color(#003bd9);
    color: $color-fff;
  }
}
</style>
