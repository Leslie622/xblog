<template>
  <transition appear enter-active-class="animate__animated animate__fadeIn">
    <div class="diary">
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
};
</script>

<style scoped>
.diary {
  background-image: url("~assets/img/bg/wallhaven-r2v5wj.jpg");
}
</style>