<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :model="formData"
      :rules="rules"
    >
      <!-- logo -->
      <div class="title-container">
        <h3 class="title"><img src="@/assets/images/logo.png" alt=""></h3>
      </div>

      <!-- 输入框 -->
      <el-form-item prop="loginName">
        <span class="svg-container">
          <i class="iconfont icon-shouji" />
        </span>
        <el-input v-model="formData.loginName" placeholder="请输入手机号" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="iconfont icon-mima" />
        </span>
        <el-input v-model="formData.password" :type="passwordType" placeholder="请输入密码" />
        <span class="svg-container">
          <svg-icon :icon-class="`${passwordType == 'password' ? 'eye' : 'eye-open'}`" @click="changePassword" />
        </span>
      </el-form-item>

      <el-form-item prop="code">
        <span class="svg-container">
          <i class="iconfont icon-yanzhengma" />
        </span>
        <el-input v-model="formData.code" placeholder="请输入验证码" />
        <span class="authCode" @click="changeImgCode">
          <img :src="`http://likede2-admin.itheima.net/likede/api/user-service/user/imageCode/${imgHtml}`" alt="">
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        :loading="loading"
        type="primary"
        style="
          width: 100%;
          margin-bottom: 30px;
          background: linear-gradient(262deg, #2e50e1, #6878f0);
        "
        @click="login"
      >Login
      </el-button>
    </el-form>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    return {
      passwordType: 'password', // 密码框小眼睛
      imgHtml: 0, // 图片地址
      loading: false, // loding效果 防止连续点击
      formData: { // 收集表单数据
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: 0,
        loginType: 0
      },
      // 表单验证
      rules: {
        loginName: [
          { required: true, message: '手机号必填', trigger: 'blur' }
          // {validator:}
        ],
        password: [
          { required: true, message: '密码必填', trigger: 'blur' },
          { min: 5, max: 16, message: '密码格式不对', trigger: 'blur' }
        ],

        code: [{ required: true, message: '验证码必填', trigger: 'blur' }]
      }
    }
  },
  mounted() {
  },
  methods: {

    // 密码小眼睛睁开和关闭
    changePassword() {
      // console.log(111)
      // 如果点击的时候是密码框就变成空 不是就变成密码框
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
    },

    // 图片验证码 点击刷新
    changeImgCode() {
      // 随机生成一个数 然后添加到网路地址后面
      const num = Math.ceil(Math.random() * 10)// 生成一个随机数（防止缓存）
      this.imgHtml = num
    },

    // 登录按钮
    async login() {
      this.formData.clientToken = this.imgHtml
      try {
        // console.log(111)
        await this.$refs.loginForm.validate() 	// validate 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
        this.loading = true
        await this.$store.dispatch('user/getUserInfo', this.formData)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: #ccc;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    color: #ccc;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      height: 47px;
      // caret-color: #ccc;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor  !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;

  background: url("~@/assets/images/login.png") no-repeat center center;
  overflow: hidden;

  .login-form {
    // position: relative;
    // top: 50%;
    // left: 50%;
    // width: 520px;
    // height: 388px;
    // max-width: 100%;
    // padding: 160px 35px 0;
    // // margin: 0 auto;

    // overflow: hidden;
    // background-color: #fff;

    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    // box-shadow: 0 3px 70px 0rgba(30, 111, 72, .35);
    border-radius: 10px;
  }

  .tips {
    font-size: 14px;
    color: #000;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: absolute;
    top: -65px;
    left: 50%;
    transform: translateX(-50%);
    width: 96px;
    height: 96px;
    // background-color: pink;
    border-radius: 50%;

    .title {
      img {
        width: 100%;
      }
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .authCode {
    position: absolute;
    top: 1px;
    right: 0;
    width: 130px;
    height: 53px;
    // background-color: pink;
  }
}
</style>
