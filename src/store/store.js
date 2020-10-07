import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cate_id: "66"
  },
  mutations: {
    saveCateId(state,foo) {
      state.cate_id = foo
    }
  }
})

export default store