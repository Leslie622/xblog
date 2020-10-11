import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cate_id: "66",
    pageNum:1
  },
  mutations: {
    saveCateId(state,foo) {
      state.cate_id = foo
    },
    savePageNum(state, foo) {
      state.pageNum = foo
    }
  }
})

export default store