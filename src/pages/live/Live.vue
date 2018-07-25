<template>
  <div class="Live">
    <Scroll class="wrapper"
            :data="data"
            :listenScroll="true"
            @scroll="scroll"
            :probeType="3"
            :pullup="true"
            @scrollToEnd="scrollToEnd"
            :pulldown="pulldown"
            @pulldownRefash="scrollToTop"
            :beforeScroll="true">
      <div class="content">
        <chat-img></chat-img>
        <ul class="content">
          <li class="item" v-for="item in data">{{item}}</li>
        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from '../../base/Scroll'
  import ChatImg from './ChatImg'
  export default {
    name: 'Live',
    metaInfo () {
      return {
        title: '直播',
        titleTemplate: null
      }
    },
    components: {
      Scroll,
      ChatImg
    },
    data () {
      return {
        data: [],
        pulldown: true
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData () {
        setTimeout(() => {
          this.data = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 22, 2, 2, 33, 3, 3, 3, 3, 3, 3, 2, 23, 3, 2, 35, 6, 45, 94, 6]
        }, 1000)
      },
      scroll () {
        // console.log('滚动了')
      },
      scrollToEnd () {
        console.log('上拉加载。。')
      },
      scrollToTop () {
        console.log('下拉刷新。。')
      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper{
    width: 100%;
    height: calc(~"100vh - 54px");
    overflow: hidden;
  }
</style>
