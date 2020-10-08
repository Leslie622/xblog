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
    return {};
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