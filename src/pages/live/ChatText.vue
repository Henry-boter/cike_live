<template>
  <div class="chat-text">
    <div class="left">
      <img class="image" src="../../common/img/header-4.png"/></div>
    <div class="right">
      <div class="up">马星星是哪个</div>
      <div class="down">
        <p class="text">
        在美国，大小规模的Flea Market一年四季都有：
        1.美国中西部最大规模Flea Market，Shipshewana Flea Market，有超过900多个vendors
        2.California的Rose Bowl Flea Market，整个市场长达5公里，每月第二个星期二都会开放
        </p>
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
        border-radius: 0 10px 10px 10px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        .text{
          padding: 10px;
          line-height: 1.5;
          font-size: 14px;
        }
      }
    }
  }
</style>
