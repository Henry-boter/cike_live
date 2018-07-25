<template>
<div class="live">
  <div>
    Live
  </div>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: 'Live',
    metaInfo () {
      return {
        title: '问答',
        titleTemplate: null
      }
    },
    mounted () {
      this.initPage()
    },
    methods: {
      initPage () {
        window.addEventListener('scroll', () => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          console.log('滚动条：' + scrollTop)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/less/variable";
</style>
