<template>
  <div class="chat-audio">
    <div class="left">
      <img class="image" src="../../common/img/header-4.png"/></div>
    <div class="right">
      <div class="up">Danae老师</div>
      <div class="down">
        <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-yuyin"></use>
        </svg>
        <span>56'</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatAudio'
  }
</script>

<style scoped lang="less">
  .chat-audio{
    width: 200px;
    margin-left: 3%;
    margin-top: 10px;
    margin-bottom: 10px;
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
      color: #fff;
      width: 200px;
      .up{
        font-size: 12px;
        color: #fff;
        height: 16px;
      }
      .down{
        display: flex;
        align-items: center;
        height: 40px;
        background-color: #2BD687;
        border-radius: 0 10px 10px 10px;
        padding-left: 10px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        .icon{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
</style>
