<template>
  <div>
     <div id="video-container" style="margin: 0px auto;postion: fixed"></div>
     <!-- <video id="test_video"
      src="http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4"
      webkit-playsinline="false"
      x-webkit-airplay="false"
      playsinline="false"
      x5-video-player-fullscreen="false"
      autoplay
      muted
      controls
      width="100%"> -->
</video>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    metaInfo () {
      return {
        title: '学习',
        titleTemplate: null
      }
    },
    data () {
      return {}
    },
    mounted () {
      this.initpage()
    },
    methods: {
      initpage () {
        /* eslint-disable */
        function getParams (name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
          var r = window.location.search.substr(1).match(reg)
          if (r != null) {
            return decodeURIComponent(r[2])
          }
          return null
        }

        function getPathParams () {
          var path = location.pathname.split('/')
          if (path[1] === 'vod-player') {
            return {
              'path': location.origin + path.slice(0, 4).join('/'),
              'appid': path[2],
              'fileid': path[3]
            }
          } else {
            return null
          }
        }

        var rtmp = getParams('rtmp'),
            flv = getParams('flv'),
            m3u8 = getParams('m3u8'),
            mp4 = getParams('mp4'),
            live = (getParams('live') === 'true' ? true : false),
            coverpic = getParams('coverpic'),
            width = getParams('width'),
            height = getParams('height'),
            volume = getParams('volume'),
            flash = (getParams('flash') == 'true' ? true : false),
            x5_player = (getParams('x5_player') == 'false' ? false : true),
            h5_flv = (getParams('h5_flv') == 'true' ? true : false),
            autoplay = (getParams('autoplay') == 'true' ? true : false),
            flashUrl = (function () {
              var params = getPathParams();
              if (params) {
                return params.path + '/player/release/QCPlayer.swf';
              }
              return '//imgcache.qq.com/open/qcloud/video/player/release/QCPlayer.swf'
            })(),
            log = getParams('log');
        /**
         * 视频类型播放优先级
         * mobile ：m3u8>mp4
         * PC ：RTMP>flv>m3u8>mp4
         */
        var options = {
              rtmp: rtmp,
              flv: flv ,
              m3u8: m3u8 ,
              mp4: mp4 || '//1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
              autoplay: autoplay,
              live: false,
              width: width || '40',
              height: height || '30',
              volume: volume || 0.5,
              flash: flash,
              flashUrl: flashUrl,
              x5_player: true,
              h5_flv: h5_flv,
              x5_type: 'h5',
              systemFullscreen: false,
              wording: {
                2032: '请求视频失败，请检查网络',
                2048: '请求m3u8文件失败，可能是网络错误或者跨域问题'
              },
              listener: function (msg) {
              }
            }
        window.tcplayer = new TcPlayer('video-container', options)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/variable";
.title{
  color: @color-sub-theme;
}
</style>
