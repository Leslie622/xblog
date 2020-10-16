<template>
  <transition appear enter-active-class="animate__animated animate__fadeIn">
    <div>
      <time-line></time-line>
      <diary-list></diary-list>
    </div>
  </transition>
</template>
 
<script>
import TimeLine from "./ingredient/TimeLine";
import DiaryList from "./ingredient/DiaryList";

export default {
  name: "",
  components: {
    TimeLine,
    DiaryList,
  },
  beforeRouteEnter(to, from, next) {
    document.body.style.backgroundImage =
      "url(" + require("../../assets/img/bg/wallhaven-r2v5wj.jpg") + ")";
    next();
  },
};
</script>

<style scoped>
</style>