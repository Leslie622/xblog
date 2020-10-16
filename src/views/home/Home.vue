<template>
  <div class="wrapper">
    <div class="indexPage">
      <div class="siteLogo">Leslie</div>
      <div class="homeMenu">
        <router-link
          v-for="(item, index) in this.linkList"
          :to="item.path"
          class="linkItem"
          :key="index"
          >{{ item.value }}</router-link
        >
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      linkList: [
        { path: "/MainBlog", value: "BLOG" },
        { path: "/Diary", value: "DIARY" },
        { path: "/Mark", value: "MARK" },
        { path: "/About", value: "ABOUT" },
        { path: "/Friends", value: "FRIENDS" },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(339deg, rgba(47, 47, 47, .02) 0%, rgba(47, 47, 47, .02) 42%, transparent 42%, transparent 99%, rgba(17, 17, 17, .02) 99%, rgba(17, 17, 17, .02) 100%), linear-gradient(257deg, rgba(65, 65, 65, .02) 0%, rgba(65, 65, 65, .02) 11%, transparent 11%, transparent 92%, rgba(53, 53, 53, .02) 92%, rgba(53, 53, 53, .02) 100%), linear-gradient(191deg, rgba(5, 5, 5, .02) 0%, rgba(5, 5, 5, .02) 1%, transparent 1%, transparent 45%, rgba(19, 19, 19, .02) 45%, rgba(19, 19, 19, .02) 100%), linear-gradient(29deg, rgba(28, 28, 28, .02) 0%, rgba(28, 28, 28, .02) 33%, transparent 33%, transparent 40%, rgba(220, 220, 220, .02) 40%, rgba(220, 220, 220, .02) 100%), linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}

.indexPage {
  display: flex;
  flex-direction: column;
  font-family: Arial;
}

.siteLogo {
  flex: 1;
  margin: 0 auto;
  font-family: Monoton-Regular;
  font-size: 7rem;
  text-align: center;
}

.homeMenu {
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
}

.linkItem {
  flex: 1;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: #249ffd;
}

.linkItem:hover {
  opacity: .5;
}

</style>