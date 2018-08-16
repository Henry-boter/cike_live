<template>
  <transition name="slide">
    <div class="discuss">
      <div class="top-tab">
        <!--<tab class="discuss-tab">-->
          <!--<tab-item>全部</tab-item>-->
          <!--<tab-item>A组</tab-item>-->
          <!--<tab-item>B组</tab-item>-->
          <!--<tab-item>C组</tab-item>-->
          <!--<tab-item>D组</tab-item>-->
          <!--<tab-item>E组</tab-item>-->
          <!--<tab-item>F组</tab-item>-->
          <!--<tab-item>G组</tab-item>-->
          <!--<tab-item></tab-item>-->
          <!--<tab-item></tab-item>-->
        <!--</tab>-->
        <Tab>
          <tab-item>全部</tab-item>
          <tab-item>A组</tab-item>
          <tab-item>B组</tab-item>
          <tab-item>C组</tab-item>
          <tab-item>D组</tab-item>
          <tab-item>E组</tab-item>
          <tab-item>F组</tab-item>
        </Tab>
        <div class="right">
          <div class="btn">组内谈论</div>
        </div>
      </div>
      <view-box>
        <chat-text></chat-text>
        <chat-audio></chat-audio>
        <chat-text></chat-text>
        <chat-audio></chat-audio>
        <chat-audio></chat-audio>
        <chat-audio></chat-audio>
        <chat-text></chat-text>
        <chat-text></chat-text>
        <chat-image></chat-image>
      </view-box>
      <chat-input></chat-input>
    </div>
  </transition>
</template>

<script>
  import { ViewBox } from 'vux'
  import ChatImage from './ChatImage'
  import ChatAudio from './ChatAudio'
  import ChatText from './ChatText'
  import ChatVideo from './ChatVideo'
  import ChatInput from './ChatInput'
  import Tab from '../../base/Tab'
  import TabItem from '../../base/TabItem'
  export default {
    name: 'Discuss',
    metaInfo () {
      return {
        title: '直播-互动区',
        titleTemplate: null
      }
    },
    components: {
      ViewBox,
      ChatImage,
      ChatAudio,
      ChatText,
      ChatVideo,
      ChatInput,
      Tab,
      TabItem
    },
    mounted () {
      this.videoHiddle()
    },
    methods: {
      videoHiddle () {
        console.log(this.$route.params.id)
        // if (this.$route.params.id) {
        //   this.$emit('videoHiddle')
        // }
      }
    }
  }
</script>

<style scoped lang="less">
.slide-enter-active, .slide-leave-active{
  transition: all 0.3s
}
.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0)
}
.discuss{
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(8, 12, 54, 0.9);
  .top-tab{
    background-color: #00c1de;
    position: relative;
    .right{
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 44px;
      background-color: #6c6262;
    }
  }
}
.discuss-tab{
  background-color: #2bd687;
  .vux-tab-container{
    background-color: #2bd687;
  }
}
.vux-tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  background-color: #222;
  height: 44px;
  position: relative;
}
</style>
