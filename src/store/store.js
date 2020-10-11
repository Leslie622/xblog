import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articleCount:"",
  },
  mutations: {
    saveArticleCount(state,foo) {
      state.articleCount = foo
    },
  }
})

export default store