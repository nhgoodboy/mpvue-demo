import Vue from 'vue'
import Vuex from 'vuex'

import hot from './modules/hot'
import list from './modules/list'
import item from './modules/item'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hot: {
      namespaced: true,
      ...hot
    },
    list: {
      namespaced: true,
      ...list
    },
    item: {
      namespaced: true,
      ...item
    }
  }
})

export default store
