<template>
  <main-blog>
    <main-filing class="filing">
      <!-- <div class="filing"> -->
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
    <!-- </div> -->
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
    //请求所有文章
    this.$request({
      method: "get",
      url: "blog/category/query?user_id=8",
    }).then((res) => {
      let articleID = [];
      res.data.data.forEach((obj) => {
        articleID.push(obj.id);
      });
      for (let i = 0; i < articleID.length; i++) {
        this.$request({
          method: "get",
          url: `blog/query/withcategory?cate_id=${articleID[i]}&pageNum=1&pageSize=1000`,
        }).then((res) => {
          res.data.data.forEach((obj) => {
            this.articleList.push(obj);
            //按时间排序-降序
            this.articleList.sort((a, b) => {
              return (
                b.create_time.replace(/[^0-9]/gi, "") -
                a.create_time.replace(/[^0-9]/gi, "")
              );
            });
          });
        });
      }
    });
  },
};
</script>

<style scoped>
@import "~assets/css/element-ui/filing-timeline.css";
</style>