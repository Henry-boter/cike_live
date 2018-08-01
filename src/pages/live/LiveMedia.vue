<template>
  <div id="id_test_video" class="live-media" style="margin: 0px auto;" :style="autoHeight"></div>
</template>

<script>
  // import '../../common/js/TcPlayer-2.2.2'
  // import TcPlayer from '../../common/js/TcPlayer-2.2.2'
  export default {
    name: 'LiveMedia',
    computed: {
      autoHeight () {
        return `height: ${window.innerWidth * 9 / 16}px`
      }
    },
    mounted () {
      this.initPage()
    },
    methods: {
      initPage () {
        var player = new TcPlayer('id_test_video', {
          // "m3u8": "http://28821.liveplay.myqcloud.com/live/28821_8cc35ade93d411e892905cb9018cf0d4_550.m3u8", //请替换成实际可用的播放地址
          'mp4': 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          'autoplay': true, // iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
          'live': false,
          'coverpic': 'http://cikeenglish.oss-cn-shenzhen.aliyuncs.com/activity/201807314646',
          'width': window.innerWidth, // 视频的显示宽度，请尽量使用视频分辨率宽度
          'height': window.innerWidth * 9 / 16, // 视频的显示高度，请尽量使用视频分辨率高度
          'h5_flv': true,
          'systemFullscreen': false,
          'flash': true,
          'wording': {
            2032: '请求视频失败，请检查网络',
            2048: '请求m3u8文件失败，可能是网络错误或者跨域问题'
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
.live-media{
  width: 100%;
  background-color: #080c36;
  font-size: 0;
}
</style>
