<template>
  <div id="Blog" :class="[theme == 2 ? 'light' : 'dark']">
    <router-view />
    <theme-switch-btn v-if="$route.path == '/Home'" />
  </div>
</template>

<script>
import themeSwitchBtn from "./components/content/themeSwitchBtn";

export default {
  components: {
    themeSwitchBtn,
  },
  data() {
    return {
      theme: +window.localStorage.getItem("theme"),
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
        window.localStorage.setItem("theme", 1);
      }
    },
  },
};
</script>

<style>
@import "~assets/css/base.css";
</style>
