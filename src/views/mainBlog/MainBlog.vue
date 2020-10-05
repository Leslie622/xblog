<template>
  <div>
    <button class="btn">clickme</button>
    <header class="header">
      <div class="header-inner">
        <div class="brand-container">
          <div class="brand">Leslie</div>
          <div class="brand-sub">Leslie's Blog</div>
        </div>
        <ul class="menu">
          <li v-for="(item, index) in linkList" :key="index">
            <router-link :to="item.path" class="menuItem">
              <i :class="item.iconClass"></i>{{ item.value }}</router-link
            >
          </li>
        </ul>
      </div>
    </header>
    <main class="main">
      <div class="main-inner">
        <div class="sidebar">
          <ul class="articleCategory">
            <li v-for="(item, index) in articleCategory" :key="index">
              <i :class="item.iconClass"></i>{{ item.name }}
            </li>
          </ul>
        </div>
        <div class="articleList">
          <div class="articleItem"></div>
          <div class="articleItem"></div>
        </div>
      </div>
    </main>
  </div>
</template>
 
<script>
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
      articleCategory: [
        { name: "Html", iconClass: "iconfont icon-html" },
        { name: "Css", iconClass: "iconfont icon-css" },
        { name: "JavaScript", iconClass: "iconfont icon-java-script" },
        { name: "Vue", iconClass: "iconfont icon-vue" },
      ],
    };
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

.header-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 10px;
  width: 240px;
  height: 390px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}

.brand-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 130px;
  color: white;
  background-color: #222;
}

.brand {
  margin-bottom: 20px;
  font-family: YatraOne-Regular;
  font-size: 45px;
}

.brand-sub {
  font-family: Arial;
  font-size: 10px;
}

.menu {
  margin-top: 10px;
}

.menu i {
  padding: 0 15px;
  vertical-align: bottom;
  font-size: 17px;
  line-height: 40px;
}

.menuItem {
  display: block;
  width: 100%;
  height: 40px;
  font-family: Arial;
  font-size: 11px;
  line-height: 40px;
  transition: all 0.2s;
}

.menuItem:hover {
  background-color: #f5f5f5;
}

.btn {
  position: absolute;
  top: 0;
  z-index: 2;
}

.btn:active + .header {
  height: 390px;
  overflow: auto;
  transition: height 1s;
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

.sidebar {
  position: sticky;
  top: 10px;
  width: 240px;
  height: 300px;
  margin: 400px 10px 0;
  background-color: lightskyblue;
}

.articleList {
  width: calc(100% - 260px);

  /* height: 40rem; */
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
    height: 200px;
    overflow: hidden;
  }
  .articleItem {
    width: calc(100vw - 20px);
  }
}
</style>