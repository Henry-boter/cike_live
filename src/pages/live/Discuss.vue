<template>
  <transition name="slide">
    <view-box class="discuss">
      <chat-text></chat-text>
      <chat-audio></chat-audio>
      <chat-text></chat-text>
      <chat-audio></chat-audio>
      <chat-audio></chat-audio>
      <chat-audio></chat-audio>
      <chat-text></chat-text>
      <chat-text></chat-text>
      <chat-image></chat-image>
      <chat-input></chat-input>
    </view-box>
  </transition>
</template>

<script>
  import { ViewBox } from 'vux'
  import ChatImage from './ChatImage'
  import ChatAudio from './ChatAudio'
  import ChatText from './ChatText'
  import ChatVideo from './ChatVideo'
  import ChatInput from './ChatInput'
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
      ChatInput
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
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(8, 12, 54, 0.9);
}
</style>
