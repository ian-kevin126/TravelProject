<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated() {  // 初次渲染alphabet的时候，什么东西都没有。
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          // const startY = this.$refs['A'][0].offsetTop;
          // console.log(startY)
          // 定时器节流
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            // console.log(touchY);
            const index = Math.floor((touchY - this.startY) / 20);
            // console.log(index);¬
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16);
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem

    .item
      line-height: .33rem
      text-align: center
      color: $bgColor
</style>
