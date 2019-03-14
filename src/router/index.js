import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 下面这一行是vue-router官方提供的解决，多页面滚动事件互相影响的事件。主要就是在页面切换的时候，一个页面的滚动距离会影响到另一个页面。
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
