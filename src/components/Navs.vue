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
import navsList from "utils/data";

export default {
  name: "Navs",
  props: {
    diyClass: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      active: "aaa"
    };
  },
  computed: {
    navs: function() {
      let navs = [];
      navs = navsList.basisPlatformNavs;
      return navs;
    }
  },
  methods: {
    change: function(router) {
      this.$router.push({ path: `/${router}` });
      this.active = router;
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
    @include bg-color(#002890);
    color: $font-color-1;
    border: 1px solid #013d85;
    border-radius: 20px;
    font-size: 15px;
    height: 35px;
    margin-bottom: 12px;
    line-height: 35px;
    text-align: center;
  }

  .navActive {
    @include bg-color(#003bd9);
    color: $color-fff;
  }
}
</style>
