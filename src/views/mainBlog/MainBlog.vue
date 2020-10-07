<template>
  <div class="mainBlog">
    <main-header></main-header>
    <main class="main">
      <div class="main-inner">
        <main-side-bar />
        <main-article-list></main-article-list>
      </div>
    </main>
  </div>
</template>
 
<script>
import MainHeader from "./ingredient/MainHeader";
import MainSideBar from "./ingredient/MainSideBar";
import MainArticleList from "./ingredient/MainArticleList";

export default {
  name: "",
  data() {
    return {
      linkList: [
        { path: "/", value: "主页", iconClass: "iconfont icon-icon" },
        { path: "/Diary", value: "日记", iconClass: "el-icon-notebook-2" },
        { path: "/Mark", value: "留言", iconClass: "el-icon-edit-outline" },
        { path: "/About", value: "关于", iconClass: "iconfont icon-guanyu" },
        { path: "/Friends", value: "友链", iconClass: "iconfont icon-pengyou" },
        { path: "/Friends", value: "搜索", iconClass: "el-icon-search" },
      ],
      selectOptions: [
        { value: "选项1", label: "Html" },
        { value: "选项2", label: "Css" },
        { value: "选项3", label: "Javascript" },
        { value: "选项4", label: "Vue" },
      ],
      articleCategory: "",
    };
  },
  components: {
    MainHeader,
    MainSideBar,
    MainArticleList,
  },
  beforeCreate() {
    document.body.style.background = "#eee";
  },
  beforeDestroy() {
    document.body.style.background = "";
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}

.main-inner {
  display: flex;
  width: 1200px;
}

@media (min-width: 1600px) {
  .main-inner {
    width: 73%;
  }
}

@media (max-width: 990px) {
  .sidebar {
    display: none;
  }
  .main-inner {
    width: auto;
  }
}
</style>