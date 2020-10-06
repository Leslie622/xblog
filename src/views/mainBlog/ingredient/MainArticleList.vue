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
    width: 100%;
    margin-top: 6px;
  }
}
</style>