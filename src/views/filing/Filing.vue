<template>
  <main-blog>
    <main-filing class="filing">
      <el-timeline class="filingTimeLine">
        <el-timeline-item
          v-for="(item, index) in articleList"
          :key="index"
          :timestamp="item.create_time"
        >
          {{ item.title }}
        </el-timeline-item>
      </el-timeline>
    </main-filing>
  </main-blog>
</template>
 
<script>
import MainBlog from "../mainBlog/MainBlog";
import MainFiling from "../mainBlog/ingredient/MainArticleList";

export default {
  components: {
    MainBlog,
    MainFiling,
  },
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    this.$request({
      method:"get",
      url:`blog/query/withcategory?cate_id=${+window.localStorage.getItem("articleCategory")}&pageNum=1&pageSize=1000`
    }).then((res) => {
      console.log(res);
      this.articleList = res.data.data
     })
  },
};
</script>

<style scoped>
@import "~assets/css/element-ui/filing-timeline.css";
</style>