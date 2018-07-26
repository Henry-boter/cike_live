<template>
  <div class="chat-text">
    <div class="left">
      <img class="image" src="../../common/img/header-4.png"/></div>
    <div class="right">
      <div class="up">马星星是哪个</div>
      <div class="down">
        <img class="down-img" src="../../common/img/pic-2.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatText'
  }
</script>

<style scoped lang="less">
  .chat-text{
    width: 94%;
    margin: 10px auto;
    display: flex;
    .left{
      .image{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .right{
      margin-left: 10px;
      color: #080c36;
      .up{
        font-size: 12px;
        color: #fff;
        height: 16px;
      }
      .down{
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        .down-img{
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
</style>
