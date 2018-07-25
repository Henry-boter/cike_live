<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import './common/iconfont/iconfont'
import NavBar from './base/NavBar'
export default {
  metaInfo: {
    title: '磁课英语'
  },
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="less">
@import "common/less/reset.less";
  #app::-webkit-scrollbar {display:none}
</style>
