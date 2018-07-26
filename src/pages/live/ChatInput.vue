<template>
  <div class="chat-input">
    <div class="up">
      <div class="left">
        <svg class="icon left" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-translation"></use>
        </svg>
      </div>
      <!--<input class="middle" type="text" placeholder="请输入">-->
      <textarea class="middle" placeholder="请输入"></textarea>
      <div class="right">
        <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-enter"></use>
        </svg>
      </div>
      <div class="add">
        <svg class="icon" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-add"></use>
        </svg>
      </div>
    </div>
    <div class="middle" style="display: none">
      <div class="item">
        <svg class="icon left" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-translation"></use>
        </svg>
      </div>
      <div class="item">
        <svg class="icon center" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-picture"></use>
        </svg>
      </div>
      <div class="item">
        <svg class="icon right" aria-hidden="true" slot="icon">
          <use xlink:href="#icon-emoji"></use>
        </svg>
      </div>
    </div>
    <div class="down" style="display: none">
      <div class="down-up">点击录音</div>
      <div class="down-middle">
        按钮
      </div>
      <div class="down-down">
        撒送
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatInput'
  }
</script>

<style scoped lang="less">
  .chat-input{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 90%;
    padding: 5px 5%;
    background-color: rgba(255,255,255,0.8);
    .up{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        margin-right: 3px;
        .icon{
          width: 30px;
          height: 30px;
          color: #9c9db7;
          border: 1px solid #9c9db7;
          border-radius: 50%;
        }
      }
      .middle{
        flex: 1;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.5);
        border: 1px solid rgba(0,0,0,0.1);
        -webkit-appearance:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        resize: none;
        font-size: 12px;
      }
      .right{
        padding: 0 5px;
        .icon{
          width: 30px;
          height: 30px;
        }
      }
      .add{
        .icon{
          width: 30px;
          height: 30px;
          color: #9c9db7;
          border: 1px solid #9c9db7;
          border-radius: 50%;
        }
      }
    }
    .middle{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item{
        .icon{
          width: 30px;
          height: 30px;
          color: #9c9db7;
        }
      }
    }
  }
</style>
