<template>
  <div class="articleList">
    <main-article-item
      v-for="(item, index) in articleDatas"
      :articleData="item"
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
    request({
      method: "get",
      url: `/blog/query/withcategory?cate_id=${75}&pageNum=1&pageSize=10`,
    }).then((res) => {
      console.log(res);
      this.articleDatas = res.data.data;
    });
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