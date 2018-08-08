<template>
  <transition name="slide">
    <div class="discuss">
    </div>
  </transition>
</template>
<script>
export default {

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
}
</style>
