<template>
  <main-blog>
    <main-filing class="filing">
      <el-timeline class="filingTimeLine" v-if="articleList.length != 0">
        <el-timeline-item
          v-for="(item, index) in articleList"
          :key="index"
          :timestamp="item.create_time"
        >
          <div @click="gotoDetail(item)">
            {{ item.title }}
          </div>
        </el-timeline-item>
      </el-timeline>
      <div v-if="articleList.length == 0" class="emptyHint">
        <p>
          这里啥都没有，博主正在努力
          <i class="iconfont icon-biaoqing1"></i>
        </p>
      </div>
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
      method: "get",
      url: `blog/query/withcategory?cate_id=${+window.localStorage.getItem(
        "articleCategory"
      )}&pageNum=1&pageSize=1000`,
    }).then((res) => {
      this.articleList = res.data.data;
    });
  },
  methods: {
    gotoDetail(item) {
      let Detail = this.$router.resolve({
        path: "/Detail",
        query: { id: item.id },
      });
      window.open(Detail.href, "_blank");
    },
  },
};
</script>

<style scoped>
@import "~assets/css/element-ui/filing-timeline.css";
</style>