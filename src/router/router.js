import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import("views/home/Home.vue")
const Diary = () => import("../views/diary/Diary.vue")
const Mark = () => import("../views/mark/Mark.vue")
const MainBlog = () => import("../views/mainBlog/MainBlog.vue")
const About = () => import("../views/about/About.vue")
const Friends = () => import("../views/friends/Friends.vue")

const routes = [
  {
    path:"",
    redirect: '/Home'
  },
  {
    path: "/Home",
    component: Home,
    meta: { title: 'Home | Leslie' }
  },
  {
    path: "/MainBlog",
    component: MainBlog,
    meta: { title: 'MainBlog | Leslie' }
  },
  {
    path: "/Diary",
    component: Diary,
    meta: { title: 'Diary | Leslie' }
  },
  {
    path: "/Mark",
    component: Mark,
    meta: { title: 'Mark | Leslie' }
  },
  {
    path: "/About",
    component: About,
    meta: { title: 'About | Leslie' }
  },
  {
    path: "/Friends",
    component: Friends,
    meta: { title: 'Friends | Leslie' }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

//动态title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || '首页'
  }
  next()
})

export default router