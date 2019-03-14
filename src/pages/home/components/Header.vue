<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconfanhui back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconsousuo"></span>
      输入城市主题/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont iconjiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
  // import {mapState, mapGetters} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
      // ...mapGetters(['doubleCity'])
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff

    .header-left
      width: .64rem
      float: left

      .back-icon
        text-align: center
        font-size: .3rem

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      background-color: #fff
      border-radius: .1rem
      margin-left: .2rem
      color: #ccc
      padding-left: .2rem

    .header-right
      padding: 0 .1rem
      min-width: 1.04rem
      float: right
      text-align: center
      color: #fff

</style>
