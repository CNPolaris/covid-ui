<template>
  <el-container>
    <el-header height="61" class="student-header">
    <el-menu mode="horizontal" class="el-menu-title" :router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/introduction">系统介绍</el-menu-item>
      <el-menu-item index="/china">中国趋势</el-menu-item>
      <el-menu-item index="/province">省市趋势</el-menu-item>
    </el-menu>
    </el-header>
    <el-main class="student-main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  mixins: [ResizeMixin],
  data() {
    return {
      defaultUrl: '/',
      userInfo: {
        imagePath: null
      }
    }
  },
  watch: {
    $route(to, from) {
      this.defaultUrl = this.routeSelect(to.path)
    }
  },
  methods: {
    routeSelect(path) {
      const topPath = ['/', '/index', '/paper/index', '/record/index', '/question/index']
      if (topPath.indexOf(path)) {
        return path
      }
      return null
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  .student-header {
    padding: 0!important;
  }
</style>
