<template>
  <transition name="slide">
    <view-box class="detail-question">
      <div v-for="item in 100">{{item}}</div>
    </view-box>
  </transition>
</template>

<script>
  import { ViewBox } from 'vux'
  export default {
    name: 'DetailQuestion',
    components: {
      ViewBox
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
.detail-question{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #2bd687;
}
</style>
