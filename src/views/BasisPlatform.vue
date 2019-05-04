/**基础平台主页 */
<template>
  <div class="basisPlatform w100 h100">
    <div class="navs h100">
      <navs></navs>
    </div>
    <div class="content h100">
      123
    </div>
  </div>
</template>

<script>
import Navs from "components/Navs";

export default {
  name: "BasisPlatform",
  components: {
    Navs
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
    border: 1px solid red;
  }

  .content {
    flex: 1;
    background: red;
  }
}
</style>
