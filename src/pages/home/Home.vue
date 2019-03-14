<template>
  <div>
    <!--<home-header :city="city"></home-header> 之前是用ajax传过来的，现在用vuex后不需要传city了-->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        // city: '',
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          // this.city = data.city;  有关city 的都去掉
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    },
    mounted() {
      this.lastCity = this.city;
      this.getHomeInfo()
    },
    activated() {  // 这个是keepalive新增的钩子函数，当页面重新被显示的时候执行。
      // 为了不让页面每次来回切换的时候，重复发送请求，浪费资源，就需要在这里判断。
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }
  }
</script>

<style scoped>

</style>
