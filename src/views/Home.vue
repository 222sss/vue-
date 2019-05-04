<template>
  <div class="home w100 h100">
    <img class="title-img" src="../assets/img/home/home_title.png" />
    <div class="home-title w100">
      <div class="title-left h100">
        <div class="weather h100">
          <iframe
            name="weather_inc"
            src="http://i.tianqi.com/index.php?c=code&id=99&color=%23FFFFFF"
            width="130"
            height="30"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
          ></iframe>
        </div>
        <div>{{ timer }} {{ realTime }}</div>
      </div>
      <div class="title-right h100">
        <img class="user-icon" src="../assets/img/home/user.png" />
        <div class="user-name">{{ userName }}</div>
        <span class="el-icon-switch-button out" @click="quitSystem"></span>
      </div>
    </div>
    <div class="content w100">
      <div class="change-plate">
        <div class="jichubox" v-show="show">
          <div class="choosebox" @mousemove="mousemoveF"></div>
          <img
            v-if="showjc"
            src="../assets/img/home/jichu1.png"
            class="jichu1"
          />
          <img v-else src="../assets/img/home/zeren1.png" class="jichu1" />
        </div>
        <div
          v-show="!show"
          class="jichubox1"
          @mousemove="mousemoveF1"
          @mouseout="mouseoutF"
        >
          <img
            src="../assets/img/home/jichu2.png"
            class="jichu2"
            @click="basisPlatformF"
          />
          <img
            src="../assets/img/home/zeren.png"
            class="zeren"
            @click="responsibilityF"
          />
        </div>
      </div>
      <div class="content-box w100 h100">
        <router-view ref="child"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { getDays, time } from "utils/tool.js";
import { real } from "utils/global.js";
import { MessageBox } from "element-ui";

export default {
  name: "home",
  data: function() {
    return {
      realTime: "",
      refreshTime: null,
      show: true,
      showjc: true
    };
  },
  computed: {
    // 时间
    timer: function() {
      let timer = "";
      let timers = getDays();
      timer =
        timers.year +
        "年" +
        timers.month +
        "月" +
        timers.day +
        "日" +
        " " +
        timers.days;
      return timer;
    },
    // 用户名
    userName: function() {
      let localData = window.localStorage.getItem("username");
      if (this.$store.state.userName === null && localData) {
        this.$store.commit("changNameMutations", localData);
      }
      return this.$store.state.userName;
    }
  },
  methods: {
    // 实时时间
    realTimeF: function() {
      this.refreshTime = setInterval(() => {
        this.realTime = time();
      }, real);
    },
    // 登出
    quitSystem: function() {
      MessageBox.confirm("是否退出系统？", "退出确认", {
        closeOnClickModal: false,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        customClass: "messagebox",
        type: "warning"
      })
        .then(() => {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("name");
          window.localStorage.removeItem("password");
          window.localStorage.removeItem("username");
          this.$router.push({ path: "/login" });
        })
        .catch(() => {
          return;
        });
    },
    mousemoveF: function() {
      this.show = false;
    },
    mousemoveF1: function() {
      this.show = false;
    },
    mouseoutF: function() {
      this.show = true;
    },
    // 基础平台
    basisPlatformF: function() {
      this.showjc = true;
      this.$router.push({ path: "/basisPlatform" });
    },
    // 责任平台
    responsibilityF: function() {
      this.showjc = false;
      this.$router.push({ path: "/responsibility" });
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
    this.realTimeF();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.home {
  @include flex;
  @include flex-column;
  @include diy-bg("backgroud.png", top, center);
  background-size: cover;
  overflow: hidden;
  position: relative;
  font-size: 16px;

  .title-img {
    width: 100%;
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
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;

    .title-left {
      @include flex;

      .weather {
        box-sizing: border-box;
        padding-top: 6px;
      }
    }

    .title-right {
      @include flex;
      @include flex-secondary-axis-center;

      .user-icon {
        width: 35px;
        height: 35px;
      }

      .user-name {
        font-size: 14px;
        margin: 0 6px;
      }

      .out {
        font-size: 27px;
        cursor: pointer;
      }

      .out:hover {
        color: #29b9c1;
      }
    }
  }

  .content {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    padding: 25px;
    position: relative;

    .change-plate {
      position: absolute;
      top: 25px;
      left: 25px;
      z-index: 999;

      .jichubox {
        width: 127px;
        height: 125px;

        .choosebox {
          width: 116px;
          height: 96px;
          z-index: 9;
          position: absolute;
        }

        .jichu1 {
          width: 127px;
        }
      }

      .jichubox1 {
        @include flex;
        @include flex-primary-axis-between;
        height: 98px;
        width: 238px;

        img {
          display: block;
        }

        .jichu2,
        .zeren {
          width: 116px;
          height: 96px;
        }
      }
    }
  }
}
</style>
