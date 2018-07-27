<template>
  <div class="live-media" :style="autoHeight">
    <video  width="100%"
            controls>
      <source src="http://live.cland.hk/cike1/test.flv?auth_key=1532672302-0-0-0993ac157ad3e5fafa637c8267ba605d">
      <source src="rtmp://live.cland.hk/cike1/test?auth_key=1532672302-0-0-704fd7ab04672cf8086a7c442a875138">
      <source src="http://live.cland.hk/cike1/test.m3u8?auth_key=1532672302-0-0-a8f8bb94d839d017efd70f80cfa140af">
    </video>
  </div>
</template>

<script>
  export default {
    name: 'LiveMedia',
    computed: {
      autoHeight () {
        return `height: ${window.innerWidth * 9 / 16}px`
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
