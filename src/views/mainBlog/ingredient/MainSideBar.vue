<template>
  <div class="sidebar">
    <div class="sidebar-inner">
      <div class="avatar">
        <img src="~assets/img/avatar/cheung.jpg" />
      </div>
      <div class="description">何时眼前突兀见此屋</div>
      <div class="statistics">
        <div class="article">
          <span>{{ articleCounts }}</span>
          <p>文章</p>
        </div>
        <div class="visit">
          <span>{{ view }}</span>
          <p>观看</p>
        </div>
        <div class="diary">
          <span>12</span>
          <p>日记</p>
        </div>
        <div class="mark">
          <span>0</span>
          <p>留言</p>
        </div>
      </div>
      <div class="links-of-author">
        <div>
          <a
            href="https://blog.csdn.net/LeslieCheung_?spm=1001.2014.3001.5113"
            target="_blank"
          >
            <i class="iconfont icon-csdn"></i
          ></a>
        </div>
        <div>
          <el-popover placement="top-start" trigger="hover">
            <img src="~assets/img/contact/weChatQR.png" class="weChatQR" />
            <i class="iconfont icon-weixin1" slot="reference"></i>
          </el-popover>
        </div>
        <div>
          <a
            target="_blank"
            href="http://wpa.qq.com/msgrd?v=3&uin=416317444&site=qq&menu=yes"
          >
            <i class="iconfont icon-qq1"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      articleList: [],
      articleCounts: 0,
      view: 0,
    };
  },
  created() {
    //请求所有文章
    this.$request({
      method: "get",
      url: "blog/category/query?user_id=8",
    }).then((res) => {
      res.data.data.forEach((cate) => {
        this.articleCounts += cate.blogs.length;
        this.articleList.push(cate.id);
      });
      for (let i = 0; i < this.articleList.length; i++) {
        this.$request({
          method: "get",
          url: `blog/query/withcategory?cate_id=${this.articleList[i]}&pageNum=1&pageSize=1000`,
        }).then((res) => {
          res.data.data.forEach((article) => {
            this.view += article.view;
          });
        });
      }
    });
  },
};
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 450px;
  margin: 450px 10px 0;
  width: 240px;
  min-width: 240px;
  height: 300px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
}

.sidebar-inner {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  text-align: center;
}

.avatar {
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
}

.avatar img {
  width: 40%;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.5s;
}

.avatar img:hover {
  transform: rotate(360deg);
}

.description {
  margin: 0 0 25px;
  font-size: 13px;
  color: #999;
}

.statistics {
  display: flex;
  padding: 0 25px;
  width: 100%;
  font-size: 12px;
}

.statistics span {
  font-weight: bold;
  color: #555;
}

.statistics p {
  margin: 10px 0 0;
  color: #999;
}

.statistics div {
  flex: 1;
  padding: 5px 0;
}

.statistics div:not(:first-child) {
  border-left: 1px solid #eee;
}

.links-of-author {
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  margin-top: 25px;
}

.links-of-author i {
  color: rgb(122, 122, 122);
}

.links-of-author div {
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  line-height: 30px;
}

.links-of-author div:hover {
  background-color: #eee;
}

.weChatQR {
  width: 150px;
}

.icon-csdn {
  font-size: 15px;
}

@media (max-width: 990px) {
  .sidebar {
    display: none;
  }
}
</style>