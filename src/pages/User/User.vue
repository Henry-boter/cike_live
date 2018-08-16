<template>
  <div class="videoBox">
    <i class="fa fa-play-circle-o"></i>
    <video id="video" width="100%" x5-video-player-type="h5" x5-video-player-fullscreen="true" controls x-webkit-airplay="allow" webkit-playsinline playsinline src="http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4"></video>
    <canvas ref="canvas" id="canvas" :width="videoWidth" :height="videoheight"></canvas>
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
    data () {
      return {
        videoWidth: window.innerWidth,
        videoheight: window.innerWidth * 9 / 16
      }
    },
    mounted () {
      /*eslint-disable*/
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      if(isAndroid){
            $("#video").hide();
            $("i.fa").show();
        }else{
            $("i.fa").hide();
            $("#canvas").hide();
        }
        var videoanimate;
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext( '2d' );
        context.fillStyle = '#fff';
        context.fillRect( 0, 0, canvas.width, canvas.height );//绘制1920*1080像素的已填充矩形。
        var img=new Image();//新建一个图片，模仿video里面的poster属性。
        img.src="http://cikeenglish.oss-cn-shenzhen.aliyuncs.com/activity/201807314646";
        context.drawImage(img,0, 0,canvas.width,canvas.height);//将图片绘制进canvas。
        function animate() {//渲染方法。
            if(video.paused){//判断视频是否暂停，如果暂停显示控件。
                $(".video i.fa").show();
            }
            context.drawImage(video,0, 0,canvas.width,canvas.height);//将视频当中的一帧绘制到canvas当中。
            videoanimate = requestAnimationFrame( animate );//每秒60帧渲染页面。关于此方法具体解释请自行百度。
        }

        $("#canvas,i.fa").click(function(){
          if(isAndroid){
              animate();//在这里调用。
              if(!video.paused){//判断视频时候暂停。
                  video.pause();
              }else{
                  video.play();
                  $(".video i.fa").hide();
              }
          }
      })

    },
    methods: {
    }
  }
</script>

<style scoped lang="less">

</style>
