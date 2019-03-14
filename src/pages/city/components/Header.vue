<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont iconfanhui header-back"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor
    font-size: .28rem

    .header-back
      top: 0
      left: 0
      position: absolute
      font-size: .3rem
      width: .64rem
      text-align: center
      color: #fff
</style>
