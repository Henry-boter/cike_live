<template>
  <div class="Live">
    <audio style="position: fixed;z-index: 100;top: 0;left: 0" autoplay src="http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4" v-if="!isMedia" controls></audio>
     <live-media v-if="isMedia"></live-media>
    <!--<media></media>-->
    <Scroll class="wrapper"
            :style="autoHeight"
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
        <div style="height: 1px"></div>
        <chat-img></chat-img>
        <chat-audio></chat-audio>
        <chat-text></chat-text>
        <!--<chat-video></chat-video>-->
        <chat-audio></chat-audio>
        <chat-audio></chat-audio>
        <chat-text></chat-text>
        <chat-audio></chat-audio>
        <!--<ul class="content">-->
          <!--<li class="item" v-for="item in data">{{item}}</li>-->
        <!--</ul>-->
        <div style="height: 20px"></div>
      </div>
    </Scroll>
    <div class="right-sidebar" @click="toDiscuss">
      <div class="left">
        <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-return"></use>
        </svg>
      </div>
      <div class="right">进入互动</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Scroll from '../../base/Scroll'
  import ChatImg from './ChatImg'
  import ChatAudio from './ChatAudio'
  import ChatText from './ChatText'
  import ChatVideo from './ChatVideo'
  import ChatInput from './ChatInput'
  import LiveMedia from './LiveMedia'
  import AliPlayer from './AliPlayer'
  import Media from './Media.vue'
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
      ChatImg,
      ChatAudio,
      ChatText,
      ChatVideo,
      ChatInput,
      AliPlayer,
      LiveMedia,
      Media
    },
    data () {
      return {
        data: [],
        pulldown: true
      }
    },
    watch: {
      '$route': {        // 使用watch来监控是否是同一个路由
        handler: 'resetData',
        immediate: true
      }
    },
    created () {
      this.loadData()
    },
    mounted () {
      console.log(this.$route.params.id)
    },
    computed: {
      autoHeight () {
        return `height: ${window.innerHeight - window.innerWidth * 9 / 16 - 53}px`
      }
    },
    methods: {
      resetData () {
        console.log(this.$route.params.id)
        if (this.$route.params.id) {
          this.isMedia = false
        } else {
          this.isMedia = true
        }
      },
      loadData () {
        setTimeout(() => {
          this.data = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 22, 2, 2, 33, 3, 3, 3, 3, 3, 3, 2, 23, 3, 2, 35, 6, 45, 94, 6]
        }, 1000)
      },
      toDiscuss () {
        const url = {
          path: `/1`
        }
        this.$router.push(url)
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
  .right-sidebar{
    position: fixed;
    right: 0;
    top: 50%;
    margin-top: -36px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: #9c9db7;
    .left{
      .icon{
        width: 30px;
        height: 30px;
      }
    }
    .right{
      font-size: 12px;
      line-height: 1.5;
      width: 16px;
    }
  }
</style>
