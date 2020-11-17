<template>
  <div id="Blog" :class="[theme == 2 ? 'light' : 'dark']">
    <router-view />
    <theme-switch-btn
      v-if="$route.path == '/Home' || $route.path == '/Friends'"
    />
    <back-top></back-top>
  </div>
</template>

<script>
import ThemeSwitchBtn from "./components/content/theme-switch-btn/ThemeSwitchBtn";
import BackTop from "./components/common/backTop/BackTop";

export default {
  components: {
    ThemeSwitchBtn,
    BackTop,
  },
  data() {
    return {
      theme: 2,
    };
  },
  created() {
    // 初始化主题
    this.initTheme();
  },
  mounted() {
    this.$bus.$on("switchTheme", () => {
      this.theme = +window.localStorage.getItem("theme");
    });
  },
  methods: {
    initTheme() {
      if (!window.localStorage.getItem("theme")) {
        window.localStorage.setItem("theme", 2);
        this.theme = +window.localStorage.getItem("theme");
      }
    },
  },
};
</script>

<style>
@import "~assets/css/base.css";
</style>
