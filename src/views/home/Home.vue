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
  name: "",
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
  opacity: 0.5;
}
</style>