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
        :current-page="pageNum"
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
      pageNum: 1,
      articleCategory: "",
    };
  },
  created() {
    request({
      method: "get",
      url: "/blog/category/query?user_id=8",
    }).then((res) => {
      //有本地数据的情况下，获取本地，否则获取默认值
      if (window.localStorage.getItem("articleCategory")) {
        this.articleCategory = +window.localStorage.getItem("articleCategory");
      } else {
        this.articleCategory = res.data.data[0].id;
      }
      if (window.localStorage.getItem("pageNum")) {
        this.pageNum = +window.localStorage.getItem("pageNum");
        this.requestCateData(+window.localStorage.getItem("pageNum"));
      } else {
        this.requestCateData(this.pageNum);
      }
    });
  },
  methods: {
    //分页请求
    requestCateData(pageNum) {
      request({
        method: "get",
        url: `/blog/query/withcategory?cate_id=${this.articleCategory}&pageNum=${pageNum}&pageSize=10`,
      }).then((res) => {
        this.articleDatas = res.data.data;
      });
    },
    //更改页码
    currentChange(pageNum) {
      window.localStorage.setItem("pageNum", pageNum);
      location.reload();
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