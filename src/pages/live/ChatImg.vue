<template>
  <div class="chat-img">
    <svg class="icon" aria-hidden="true" slot="icon-active">
      <use xlink:href="#icon-ArtboardCopy-"></use>
    </svg>
    <img class="content-img" src="../../common/img/pic_1.jpg"/>
  </div>
</template>

<script>
  export default {
    name: 'ChatImg'
  }
</script>

<style scoped lang="less">
  .chat-img{
    background-color: #fff;
    width: 94%;
    margin: 20px auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
    .icon {
      width: 30px;
      height: 30px;
      margin-top: -10px;
      color: #9c9db7;
      border-radius: 50%;
    }
    .content-img{
      width: 100%;
      border-radius: 0 0 10px 10px;
    }
  }
</style>
