<template>
  <transition
    enter-active-class="animate__animated animate__zoomIn animate__faster"
    appear
  >
    <div class="container">
      <div class="toc-wrapper">
        <div class="toc markdown-body"></div>
      </div>
      <div class="content">
        <mavon-editor
          v-html="blogContentHTML"
          codeStyle="tomorrow"
          :boxShadow="false"
          class="articleContent"
        />
      </div>
    </div>
  </transition>
</template>
 
<script>
import { request } from "network/request";

export default {
  name: "",
  data() {
    return {
      blogContentHTML: null,
    };
  },
  beforeCreate() {
    document.body.style.background = "#eee";
    //创建之前完成时关闭导航
    this.$bus.$emit("switchMenu", false);
    //获取数据
    request({
      method: "get",
      url: `/blog/detail?id=${this.$route.query.id}`,
    }).then((res) => {
      this.blogContentHTML = res.data.data.content;
    });
  },
  updated() {
    let ul = document.querySelectorAll("ul")[0];
    let h3 = document.querySelectorAll("h3")[0];
    let mulu = document.querySelector(".toc");
    mulu.appendChild(h3);
    mulu.appendChild(ul);
  },

  beforeDestroy() {
    document.body.style.background = "";
  },
};
</script>

<style scoped>
@import "~assets/css/markdown/mavon-editor-index.css";

.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: 幼圆;
  overflow-y: scroll;
}

.toc-wrapper {
  position: sticky;
  top: 10px;
  overflow: hidden;
  overflow-y: scroll;
}

.toc {
  box-sizing: border-box;
  margin-right: 10px;
  padding: 10px 10px 20px;
  width: 300px;
  border-right: 1px solid rgb(204, 204, 204);
}

.content {
  width: 55%;
}

.articleContent {
  z-index: 0;
  padding: 0 20px 80px;
  font-family: 幼圆;
  font-size: 15px;
  color: #333;
}
</style>