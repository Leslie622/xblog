<template>
  <div class="mainBlog">
    <main-header></main-header>
    <main class="main">
      <div class="main-inner">
        <main-side-bar />
        <slot>
          <main-article-list></main-article-list>
        </slot>
      </div>
    </main>
  </div>
</template>
 
<script>
import MainHeader from "./ingredient/MainHeader";
import MainSideBar from "./ingredient/MainSideBar";
import MainArticleList from "./ingredient/MainArticleList";

export default {
  components: {
    MainHeader,
    MainSideBar,
    MainArticleList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.mainBlog {
  min-height: 100vh;
  background-color: #eee;
}

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