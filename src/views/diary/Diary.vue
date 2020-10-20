<template>
  <transition appear enter-active-class="animate__animated animate__fadeIn">
    <div class="diary">
      <time-line></time-line>
      <diary-list></diary-list>
      <router-link to="/home" class="goHome">去首页</router-link>
    </div>
  </transition>
</template>
 
<script>
import TimeLine from "./ingredient/TimeLine";
import DiaryList from "./ingredient/DiaryList";

export default {
  components: {
    TimeLine,
    DiaryList,
  },
};
</script>

<style scoped>
.diary {
  min-height: 100vh;
  background-image: url("~assets/img/bg/diaryBG.jpg");
}

.goHome {
  position: fixed;
  top: 40px;
  left: 10px;
  margin-left: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}
</style>