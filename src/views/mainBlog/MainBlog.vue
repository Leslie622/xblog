<template>
  <div>
    <button class="btn">clickme</button>
    <main-header class="header"></main-header>
    <main class="main">
      <div class="main-inner">
        <div class="sidebar"></div>
        <div class="articleList">
          <div class="articleItem"></div>
          <div class="articleItem"></div>
        </div>
      </div>
    </main>
  </div>
</template>
 
<script>
import MainHeader from "./ingredient/MainHeader";
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
        {
          value: "选项1",
          label: "Html",
        },
        {
          value: "选项2",
          label: "Css",
        },
        {
          value: "选项3",
          label: "Javascript",
        },
        {
          value: "选项4",
          label: "Vue",
        },
      ],
      articleCategory: "",
    };
  },
  components: {
    MainHeader,
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
.header {
  width: 1200px;
  height: 0;
  margin: 0 auto;
  background-color: azure;
}

.main {
  display: flex;
  justify-content: center;
  background-color: red;
}

.main-inner {
  display: flex;
  width: 1200px;
  height: 2000px;
  background-color: pink;
}

.btn {
  position: absolute;
  top: 0;
  z-index: 2;
}

.btn:active + .header {
  height: 450px;
  transition: height 1s;
}

.sidebar {
  position: sticky;
  top: 10px;
  width: 240px;
  height: 300px;
  margin: 460px 10px 0;
  background-color: lightskyblue;
}

.articleList {
  width: calc(100% - 260px);
  background-color: lightyellow;
}

.articleItem {
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  background-color: black;
}

@media (min-width: 1600px) {
  .main-inner {
    width: 73%;
  }
  .header {
    width: 73%;
  }
}

@media (max-width: 990px) {
  .sidebar {
    display: none;
  }
  .articleList {
    width: 100%;
    margin: 10px 10px 0;
  }
  .main-inner {
    width: auto;
  }
  .header-inner {
    position: static;
    width: 100%;
  }
  .header {
    width: auto;
    height: 450px;
  }
  .articleItem {
    width: calc(100vw - 20px);
  }
}
</style>