<template>
<div class="question">
  <div class="top-nav">
    <div class="left"></div>
    <div class="middle">
      <div class="mid-item">精华</div>
      <div class="mid-item select">动态</div>
      <div class="mid-item">分类 <i class="icon-dropdown">▼</i></div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-prompt"></use>
      </svg>
    </div>
  </div>
  <div>
    <Bcroll>

    </Bcroll>
  </div>
  <div style="height: 150px; width: 96%;margin: 10px auto;background-color: #fff;border-radius: 5px" v-for="item in 10" :key="item" @click="detail(item)">
    {{item}}
  </div>
  <router-view></router-view>
</div>
</template>

<script>
  import Bcroll from '../base/scroll'
  export default {
    name: 'Question',
    metaInfo () {
      return {
        title: '问答',
        titleTemplate: null
      }
    },
    components: {
      Bcroll
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
      },
      detail (item) {
        console.log('done')
        const url = {
          path: `/Question/${item}`
        }
        this.$router.push(url)
        console.log(this.$parent)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../common/less/variable";
.question{
  .top-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    background-color: #f2f2f2;
    .left{
      width: 50px;
      text-align: center;
    }
    .middle{
      display: flex;
      align-items: center;
      .mid-item{
        color: saturate(@color-dark, 50%);
        font-size: @font-size-medium-x;
        margin: 0 10px;
        .icon-dropdown{
          font-size: 12px;
          font-style: normal;
        }
      }
      .mid-item{
        &.select{
          font-size: @font-size-large;
          color: @color-bright-red;
          font-weight: bold;
          padding-bottom: 3px;
          border-bottom: 2px solid @color-bright-red;
        }
      }
    }
    .right{
      width: 50px;
      text-align: center;
      .icon{
        width: 26px;
        height: 26px;
        color: @color-dark-gray;
      }
    }
  }
}
</style>
