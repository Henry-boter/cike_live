<template>
  <tabbar>
    <tabbar-item :selected="isHome" link="/">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-video"></use>
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon-active">
        <use xlink:href="#icon-video_fill"></use>
      </svg>
      <span slot="label">往期</span>
    </tabbar-item>
    <tabbar-item :selected="isQuestion" show-dot link="/Live">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-live"></use>
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon-active">
        <use xlink:href="#icon-live_fill"></use>
      </svg>
      <span slot="label">直播</span>
    </tabbar-item>
    <tabbar-item :selected="isUser" badge="2" link="/User">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-people"></use>
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon-active">
        <use xlink:href="#icon-people_fill"></use>
      </svg>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'NavBar',
    components: {
      Tabbar,
      TabbarItem
    },
    computed: {
      isHome () {
        return this.$route.name === 'Home'
      },
      isQuestion () {
        return this.$route.name === 'Question'
      },
      isShop () {
        return this.$route.name === 'Shop'
      },
      isUser () {
        return this.$route.name === 'User'
      }
    }
  }
</script>

<style scoped lang="less">
  .icon{
    width: 27px;
    height: 27px
  }
  .weui-tabbar:before{
    content: none
  }
  .weui-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
  }
</style>
