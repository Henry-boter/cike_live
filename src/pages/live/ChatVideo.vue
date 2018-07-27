<template>
<div class="chat-video">
  <h1 style="text-align: center;line-height: 2;color: #080c36;font-weight: bold">时态也嘻哈</h1>
  <div class="video-wrapper">
    <video width="100%"
           ref="video"
           class="video"
           controls
           x5-video-player-type="h5"
           webkit-playsinline="true"
           playsinline="true"
           x-webkit-airplay="allow"
           x5-video-player-fullscreen="false"
           x5-video-orientation="portraint"
           @pause="isCover=true"
           @playing="isCover=false"
           @ended="isCover=true"
           src="http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4">
    </video>
    <div class="cover" v-show="isCover">
      <img class="cover-image" src="../../common/img/video.jpg" @click="play"/>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'ChatVideo',
    data () {
      return {
        isCover: true
      }
    },
    methods: {
      play () {
        let video = this.$refs.video
        video.play()
      }
    }
  }
</script>

<style scoped lang="less">
.chat-video{
  width: 92%;
  margin: 10px auto;
  background-color: #fff;
  padding: 0 5px 2px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
  .video-wrapper{
    position: relative;
    overflow: hidden;
    .video{
      width: 100%;
      border-radius: 2px 2px 8px 8px;
      overflow: hidden;
      margin-top: -2px; margin-left: -1px; margin-right: -1px;
    }
    .cover{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 2px 2px 8px 8px;
      overflow: hidden;
      .cover-image{
        width: 100%;
        border-radius: 2px 2px 8px 8px;
        margin-top: -2px; margin-left: -1px; margin-right: -1px;
      }
    }
  }
}
</style>
