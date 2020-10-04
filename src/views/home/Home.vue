<template>
  <div class="indexPage">
    <div class="siteLogo">Leslie</div>
    <div class="homeMenu">
      <router-link
        v-for="item in this.linkList"
        :to="item.path"
        class="linkItem"
        >{{ item.value }}</router-link
      >
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
      ],
    };
  },
};
</script>

<style scoped>
.indexPage {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 260px;
  font-family: Arial;
}

.siteLogo {
  flex: 1;
  font-family: Monoton-Regular;
  font-size: 110px;
  text-align: center;
}

.homeMenu {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.linkItem {
  flex: 1;
  font-size: 25px;
  text-align: center;
  color: #249ffd;
}

.linkItem:hover {
  opacity: 0.5;
}
</style>