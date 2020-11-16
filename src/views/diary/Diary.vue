<template>
  <transition appear enter-active-class="animate__animated animate__fadeIn">
    <div class="diary">
      <time-line></time-line> 
      <time-select></time-select>
      <diary-list></diary-list> 
      <router-link to="/Home" class="goHome">去首页</router-link>
    </div>
  </transition>
</template>
 
<script>
import TimeLine from "./ingredient/TimeLine";
import TimeSelect from "./ingredient/TimeSelect";
import DiaryList from "./ingredient/DiaryList";

export default {
  components: {
    TimeLine,
    TimeSelect,
    DiaryList,
  },
};
</script>

<style scoped>
.diary {
  min-width: 1920px;
  min-height: 100vh;
  background-image: url("~assets/img/bg/diaryBG.jpg");
}

.goHome {
  position: fixed;
  top: 70px;
  right: 35px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .time-shaft {
    display: none;
  }
  .diary {
    min-width: auto;
    background-image: url("~assets/img/bg/wallhaven-zm1kwy.jpg");
    background-position: -240px 0;
  }
}

@media (min-width: 1024px) {
  .time-select {
    display: none;
  }
}
</style>