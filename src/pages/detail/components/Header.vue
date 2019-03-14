<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont iconfanhui header-abs-back"></div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont iconfanhui header-fixed-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        // console.log(document.documentElement.scrollTop)
        const top = document.documentElement.scrollTop;
        // this.showAbs = top > 60 ? false : true
        // this.showAbs = top <= 60
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {
            opacity
          };
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    mounted() {  // keepalive引出来的这两个钩子函数。
      window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
      // 解绑全局事件，否则会在所有页面都触发这个事件，这就需要解绑。
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)

    .header-abs-back
      color: #ffffff
      font-size: .4rem

  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor
    font-size: .28rem

    .header-fixed-back
      top: 0
      left: 0
      position: absolute
      font-size: .3rem
      width: .64rem
      text-align: center
      color: #fff
</style>
