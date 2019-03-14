<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img"
               :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonGallery',
    props: {
      imgs: {
        type: Array,
        default() {
          return ['http://img1.qunarzz.com/sight/p0/1804/da/daf7c367efebf1c8a3.img.jpg_r_800x800_4e5a9cee.jpg',
            'http://img1.qunarzz.com/sight/p0/1804/a6/a66fbfbebb59de4fa3.img.jpg_r_800x800_9be0919c.jpg',
            'http://img1.qunarzz.com/sight/p0/1804/6b/6b012b04d20d02dda3.img.jpg_r_800x800_78fb16b6.jpg']
        }
      }
    },
    methods: {
      handleGallaryClick() {
        this.$emit('close')
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observer: true,
          observeParents: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow: inherit

  .container
    display: flex
    flex-direction: column
    justify-content center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000

    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%

      .gallary-img
        width: 100%

      .swiper-pagination
        color: #ffffff
        bottom: -1rem


</style>
