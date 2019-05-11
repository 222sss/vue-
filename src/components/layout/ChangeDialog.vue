/**修改弹窗布局 */
<template>
  <div class="change-dialog w100">
    <div class="dialog-left h100">
      <tab-bar></tab-bar>
    </div>
    <div class="dialog-right h100">
      234
    </div>
  </div>
</template>

<script>
import TabBar from "../TabBar";

export default {
  name: "ChangeDialog",
  components: {
    TabBar
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
    width: calc(100% - 180px);
  }
}
</style>
