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
          codeStyle="paraiso-light"
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
  margin-right: 15px;
  overflow: hidden;
  overflow-y: scroll;
}

.toc {
  box-sizing: border-box;
  padding: 10px 10px 20px;
  width: 300px;
  border-right: 1px solid rgb(204, 204, 204);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.content {
  width: 50%;
}

.articleContent {
  z-index: 0;
  margin-bottom: 10px;
  padding: 0 1rem 80px;
  font-family: 幼圆;
  font-size: 18px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: #333;
}

@media (max-width: 900px) {
  .toc-wrapper {
    display: none;
  }
  .content {
    width: 100%;
  }
}
</style>