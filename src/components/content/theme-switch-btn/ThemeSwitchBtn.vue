<template>
  <div class="switchBtn_wrapper" @click="switchTheme">
    <i class="iconfont icon-deng"></i>
  </div>
</template>
 
<script>
export default {
  name: "",
  methods: {
    switchTheme() {
      if (+window.localStorage.getItem("theme") === 1) {
        window.localStorage.setItem("theme", 2);
      } else {
        window.localStorage.setItem("theme", 1);
      }
      this.$bus.$emit("switchTheme");
    },
  },
};
</script>

<style scoped>
.switchBtn_wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 1rem;
  color: black;
  cursor: pointer;
}

.dark .switchBtn_wrapper {
  color: white;
}

.icon-deng {
  font-size: 2rem;
}
</style>