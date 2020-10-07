<template>
  <div class="articleList">
    <main-article-item
      v-for="(item, index) in articleDatas"
      :articleData="item"
      :key="index"
    />
  </div>
</template>
 
<script>
import MainArticleItem from "./MainArticleItem";

import { request } from "network/request";

export default {
  name: "",
  data() {
    return {
      articleDatas: [],
    };
  },
  created() {
    this.requestCateData();
  },
  mounted() {
    this.$bus.$on("requestAgain", () => {
      this.requestCateData();
    });
  },
  methods: {
    requestCateData() {
      request({
        method: "get",
        url: `/blog/query/withcategory?cate_id=${this.$store.state.cate_id}&pageNum=1&pageSize=10`,
      }).then((res) => {
        this.articleDatas = res.data.data;
      });
    },
  },
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