<template>
<div>
  <h1 class="title">home</h1>
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
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/variable";
.title{
  color: @color-sub-theme;
}
</style>
