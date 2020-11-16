import Vue from 'vue';
import Blog from './Blog.vue';
import router from "router/router";
import { request } from "network/request"

Vue.config.productionTip = false;

//代码高亮
import 'highlight.js/styles/googlecode.css'

// 引入并使用elementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入animate.css库 
import 'animate.css';

// 阿里图标库
import "common/iconfont"

//vuex
import store from "store/store"

// 事件总线
Vue.prototype.$bus = new Vue()

//网络请求
Vue.prototype.$request = request;

//图片地址
Vue.prototype.$imgPrefix = 'https://mdw.oss-cn-hangzhou.aliyuncs.com/';

import { ityped } from "common/ityped";
Vue.prototype.$ityped = ityped

new Vue({
  render: h => h(Blog),
  router,
  store,
}).$mount('#Blog')
