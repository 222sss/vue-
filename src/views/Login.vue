/**登陆 */
<template>
  <div class="login w100 h100">
    <div class="login-div">
      <img src="../assets//img//login/total_title.png" />
      <div class="login-form w100">
        <div class="form-box w100 h100">
          <img src="../assets/img/login/login_title.png" />
          <el-form
            v-bind:model="ruleForm"
            v-bind:rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="name">
              <div class="iunput-box">
                <i class="el-icon-user"></i>
                <span class="el-icon-minus"></span>
                <el-input
                  v-model="ruleForm.name"
                  placeholder="请输入用户名"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <div class="iunput-box">
                <i class="el-icon-lock"></i>
                <span class="el-icon-minus"></span>
                <el-input
                  v-model="ruleForm.password"
                  type="text"
                  class="password"
                  v-on:blur="passKeyUpHandle"
                  placeholder="请输入密码"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="记住账号" name="type"></el-checkbox>
                <el-checkbox label="记住密码" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="warning" @click="submitForm('ruleForm')">
                登&nbsp;&nbsp;&nbsp;&nbsp;陆
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="copy">Copyright © 2018 广西贵港 All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      ruleForm: {
        name: "",
        password: "",
        type: []
      },
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      params: {}
    };
  },
  methods: {
    // 登录
    submitForm: function(formName) {
      this.ruleForm.name = this.ruleForm.name.replace(/\s+/g, "");
      this.ruleForm.password = this.ruleForm.password.replace(/\s+/g, "");
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.name == "cs" && this.ruleForm.password == 123) {
            window.localStorage.setItem("token", "1");
            this.$store.commit("changNameMutations", "小冉");
            this.$router.push({ path: "/" });
          } else {
            this.ruleForm.name = "";
            this.ruleForm.password = "";
          }
          if (this.ruleForm.type.length != 0) {
            this.ruleForm.type.map(res => {
              switch (res) {
                case "记住账号":
                  window.localStorage.setItem("name", this.ruleForm.name);
                  break;
                case "记住密码":
                  window.localStorage.setItem(
                    "password",
                    this.ruleForm.password
                  );
                  break;
                default:
                  break;
              }
            });
          }
        } else {
          return;
        }
      });
    },
    // 密码只允许输入非中文
    passKeyUpHandle: function(e) {
      this.ruleForm.password = e.target.value.replace(/[\u4e00-\u9fa5]/g, "");
    }
  },
  mounted: function() {
    if (window.localStorage.getItem("name")) {
      this.ruleForm.name = window.localStorage.getItem("name");
      this.ruleForm.type.push("记住账号");
    }
    if (window.localStorage.getItem("password")) {
      this.ruleForm.password = window.localStorage.getItem("password");
      this.ruleForm.type.push("记住密码");
    }
  }
};
</script>

<style lang="scss">
/* 重写el-input样式 */
.demo-ruleForm {
  .el-input__inner {
    border: none;
    background: none;
  }

  .el-form-item__content {
    text-align: center;
  }
}
.password {
  .el-input__inner {
    font-family: "PasswordEntry";
  }
}
</style>

<style lang="scss" scoped>
@import "assets/css/common.scss";

.login {
  @include diy-bg("/login/total_bg.png", center, center);
  background-size: cover;
  @include flex;
  @include flex-column;
  @include flex-primary-axis-between;
  @include flex-secondary-axis-center;
  box-sizing: border-box;
  padding: 10% 0 1% 0;
  overflow: hidden;

  .login-div {
    @include flex;
    @include flex-column;
    @include flex-primary-axis-between;
    @include flex-secondary-axis-center;
    height: 51%;
    min-height: 510px;
    width: 567px;

    .login-form {
      @include bg-color(rgba(255, 255, 255, 0.5));
      height: 375px;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 8px;

      .form-box {
        @include flex;
        @include flex-column;
        @include flex-primary-axis-between;
        @include flex-secondary-axis-center;
        @include bg-color($color-fff);
        border: 1px solid #4fccdc;
        border-radius: 5px;
        box-sizing: border-box;
        padding-top: 34px;

        .el-input {
          width: 240px;
        }

        .iunput-box {
          @include flex;
          @include flex-primary-axis-between;
          @include flex-secondary-axis-center;
          width: 320px;
          background-color: #e5e5e5;
          border-radius: 5px;
          box-sizing: border-box;
          padding: 0 0 0 10px;

          i {
            font-size: 24px;
            color: #12a1c6;
          }

          span {
            @include transform-rotate(90);
            font-size: 30px;
            color: #12a1c6;
          }
        }

        .el-button {
          width: 140px;
          border-radius: 15px;
          background-color: #e79c13;
          font-size: 18px;
        }
      }
    }
  }

  .copy {
    color: $color-fff;
    font-size: 14px;
  }
}
</style>
