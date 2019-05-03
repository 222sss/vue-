<template>
  <div class="home w100 h100">
    <img class="title-img" src="../assets/img/home/home_title.png" />
    <div class="home-title w100">
      <div class="title-left h100">
        <div>
          {{ timer }}
        </div>
      </div>
      <div class="title-right h100">right</div>
    </div>
  </div>
</template>

<script>
import { getDays } from "utils/tool.js";

export default {
  name: "home",
  data: function() {
    return {};
  },
  computed: {
    timer: function() {
      let timer = "";
      let timers = getDays();
      // timers.year + "年" + "月" + "日"
      // eslint-disable-next-line
      console.log(timers);
      return timer;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.home {
  @include diy-bg("backgroud.png", center, center);
  overflow: hidden;
  position: relative;

  .title-img {
    width: 100%;
    height: 62px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .home-title {
    @include flex;
    @include flex-primary-axis-between;
    line-height: 62px;
    height: 62px;
    overflow: hidden;
    color: $color-fff;
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
