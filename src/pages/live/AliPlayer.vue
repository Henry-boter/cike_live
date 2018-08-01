<template>
  <div class="prism-player" id="player-con"></div>
</template>

<script>
  import '../../common/js/aliplayer'
  export default {
    name: 'AliPlayer',
    mounted () {
      // var player = new Aliplayer({
      //   id: 'player-con',
      //   source: 'http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4',
      //   width: '100%',
      //   autoplay: false,
      //   isLive: false,
      //   x5_type: 'h5',
      //   x5_fullscreen: false,
      //   x5_video_position: 'top',
      //   x5_orientation: 'portraint',
      //   rePlay: false,
      //   playsinline: true,
      //   preload: true,
      //   controlBarVisibility: 'hover',
      //   useH5Prism: true
      // }, function (player) {
      //   console.log('播放器创建了。')
      // }
      // )
    }
  }
</script>

<style scoped>
  @import url('https://g.alicdn.com/de/prismplayer/2.7.1/skins/default/aliplayer-min.css');
</style>
