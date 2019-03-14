<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="(recommend,index) in list"
        :key="index"
        :to="'/detail/' + recommend.id"
      >
        <!--item-img-wrapper用来撑开内容区域，防止网速慢的时候页面抖动。-->
        <img class="item-img" :src="recommend.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    margin: .3rem 0

    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem

    .item-info
      //加了mixins.styl后不显示省略号的解决办法，加下面这一行。
      min-width: 0
      flex: 1
      padding: .1rem

      .item-title
        ellipsis()
        line-height: .54rem
        font-size: .32rem

      .item-desc
        ellipsis()
        line-height: .4rem
        color: #ccc

      .item-button
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        margin-top: .2rem
        color: #fff
</style>
