<template>
<div>
<video id="test_video" 
      src="http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4"
      x5-video-player-type="h5" 
      webkit-playsinline="true" 
      x-webkit-airplay="true"
      playsinline="true"
      x5-video-player-fullscreen="true"
      autoplay
      muted
      width="100%">
</video>
</div>
</template>

<script>
  export default {
    name: 'User',
    metaInfo () {
      return {
        title: '我的',
        titleTemplate: null
      }
    },
    mounted () {
      this.audioAutoPlay('test_video')
    },
    methods: {
      audioAutoPlay (id) {
        var audio = document.getElementById(id)
        audio.muted = true
        audio.play()
        document.addEventListener('WeixinJSBridgeReady', () => {
          audio.play()
        }, false)
      }
    }
  }
</script>

<style scoped lang="less">

</style>
