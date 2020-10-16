<template>
  <div class="articleList-wrapper">
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
          :total="articleCount"
          class="articlePagination"
          :current-page="pageNum"
          @current-change="currentChange"
          @next-click="currentChange"
          @prev-click="currentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
 
<script>
import MainArticleItem from "./MainArticleItem";

export default {
  components: {
    MainArticleItem,
  },
  data() {
    return {
      articleDatas: [],
      isPagination: true,
      pageNum: 1,
      articleCategory: "",
      articleCount: 0,
    };
  },
  created() {
    this.$request({
      method: "get",
      url: "/blog/category/query?user_id=8",
    }).then((res) => {
      //分类 ——> 默认(本地) —— 切换
      if (window.localStorage.getItem("articleCategory")) {
        this.articleCategory = +window.localStorage.getItem("articleCategory");
      } else {
        this.articleCategory = res.data.data[0].id;
      }
      //分页 ——> 默认(本地) —— 请求
      if (window.localStorage.getItem("pageNum")) {
        this.pageNum = +window.localStorage.getItem("pageNum");
        this.requestCateData(+window.localStorage.getItem("pageNum"));
      } else {
        this.requestCateData(this.pageNum);
      }
      //文章数量 ——> 分页器
      let cate_data = res.data.data;
      for (let i = 0; i < cate_data.length; i++) {
        if (cate_data[i].id == this.articleCategory) {
          this.articleCount = cate_data[i].blog.count;
        }
      }
    });
  },
  methods: {
    //分页请求
    requestCateData(pageNum) {
      this.$request({
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
};
</script>

<style scoped>
@import "~assets/css/element-ui/mainblog-pagination.css";

.articleList-wrapper {
  width: calc(100% - 260px);
  overflow: hidden;
}

.articleList {
  opacity: 0;
  animation: move 0.4s 0.5s linear forwards;
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
  .articleList-wrapper {
    margin-top: 6px;
    width: 100%;
  }
}

@media (min-width: 990px) {
  .articleList {
    margin-right: 10px;
  }
}

@keyframes move {
  0% {
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
  }
}
</style>