<template>
  <div class="articleList">
    <main-article-item />
  </div>
</template>
 
<script>
import MainArticleItem from "./MainArticleItem";

export default {
  name: "",
  components: {
    MainArticleItem,
  },
};
</script>

<style scoped>
.articleList {
  width: calc(100% - 260px);
}

@media (max-width: 990px) {
  .articleList {
    margin-top: 6px;
    width: 100%;
  }
}

@media (min-width: 990px) {
  .articleList {
    margin-right: 10px;
  }
}
</style>