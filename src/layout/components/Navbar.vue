<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb class="breadcrumb-container" /> -->

    <!-- logo -->
    <div class="logo">
      <h1>
        <a href="#" />
      </h1>
    </div>

    <!-- 头像 -->
    <div class="photo">
      <img src="@/assets/images/photo.png" alt="" class="photoImg">
      <span class="photoText">欢迎你，admin</span>
    </div>

    <!-- //退出按钮 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper" @click="$router.push('/login')">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          退出
          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.photo{
  position: absolute;
  top: 10px;
  right: 110px;
  width: 200px;
}
.photoImg{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 30px;
  background-color: pink;
}
.photoText{
 position: absolute;
 top: 12px;
 right: 20px;
 margin-left: 20px;
}
.logo{
  position: absolute;
  top: 10px;
  left: 15px;
  width: 88px;
  height: 35px;
  // background-color: pink;
  background: #fff url(~@/assets/images/logo.png) center center no-repeat;
  background-size: 150%;
}
.navbar {
  // background-color: pink !important;
  // width: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1999;
  background: url(~@/assets/images/beijingtiao.png) !important;
  height: 50px;
  overflow: hidden;
  // position: relative;
  background: #fff;
  margin-bottom: 50px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {

        margin-top: 5px;
        position: relative;
        color: #fff;
        font-size: 16px;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -16px;
          top: 18px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
