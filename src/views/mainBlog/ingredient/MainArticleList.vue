<template>
  <div class="articleList">
    <main-article-item
      v-for="(item, index) in articleDatas"
      :articleData="item"
      :key="index"
    />
    <div class="Pagination" v-if="isPagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="30"
        class="articlePagination"
        @current-change="currentChange"
        @next-click="currentChange"
        @prev-click="currentChange"
      ></el-pagination>
    </div>
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
      isPagination: true,
    };
  },
  created() {
    this.requestCateData();
  },
  mounted() {
    this.$bus.$on("requestAgain", () => {
      this.requestCateData();
      //刷新分页器
      this.isPagination = false;
      this.$nextTick(() => {
        this.isPagination = true;
      });
    });
  },
  methods: {
    requestCateData(pageNum = 1) {
      request({
        method: "get",
        url: `/blog/query/withcategory?cate_id=${this.$store.state.cate_id}&pageNum=${pageNum}&pageSize=10`,
      }).then((res) => {
        this.articleDatas = res.data.data;
      });
    },
    currentChange(pageNum) {
      this.requestCateData(pageNum);
    },
  },

  components: {
    MainArticleItem,
  },
};
</script>

<style scoped>
@import "../../../assets/css/element-ui/mainblog-pagination.css";

.articleList {
  width: calc(100% - 260px);
}

.Pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 30px 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
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