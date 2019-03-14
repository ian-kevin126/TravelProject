<template>
  <div class="wrapper">
    <!--v-if="list.length"是为了解决，在刷新页面的时候，默认显示最后一张轮播图。因为如果传来的数组是空的，就不显示。必须是数组长度的数组才显示。-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length
      }
    }
  }
</script>

<style scoped lang="stylus">
  // 改变轮播图下面的小圆点的背景颜色   >>> 是穿透符，使得wrapper下面的类样式可以不受scoped的限制。
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
    margin-bottom: .1rem

  .wrapper >>> .swiper-pagination-bullet
    margin-bottom: .1rem

  .wrapper
    //标准写法(兼容性最好);页面防抖动——当网速比较慢的时候，轮播图加载不出来，下面的文字就会挤到轮播图区域。
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background-color: #ccc;

    .swiper-img
      width: 100%
</style>
