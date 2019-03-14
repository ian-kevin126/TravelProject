import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  // 当我们切换城市的时候，页面再刷新，就不会直接跳到上海去了，只有当没有的时候，才默认是上海。

  // actions: {
  //   changeCity(ctx, city) {
  //     // console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
  // getters: {
  //   doubleCity(state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
