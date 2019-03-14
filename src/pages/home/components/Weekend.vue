<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in list" :key="item.id">
        <!--item-img-wrapper用来撑开内容区域，防止网速慢的时候页面抖动。-->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%

    .item-img
      width: 100%

  .item-info
    padding: .1rem

    .item-title
      ellipsis()
      line-height: .54rem
      font-size: .3rem

    .item-desc
      ellipsis()
      line-height: .4rem
      color: #ccc
      font-size: .2rem

</style>
