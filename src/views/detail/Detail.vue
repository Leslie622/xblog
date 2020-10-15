<template>
  <div class="container">
    <div class="toc-wrapper">
      <div class="toc markdown-body"></div>
    </div>
    <div class="content">
      <mavon-editor
        :value="blogContent"
        :toolbarsFlag="false"
        :subfield="false"
        :boxShadow="false"
        :editable="false"
        defaultOpen="preview"
        codeStyle="paraiso-light"
        class="articleContent"
      />
    </div>
  </div>
</template>
 
<script>
import MavonEditor from "components/common/MavonEditor";
import { request } from "network/request";

export default {
  name: "",
  data() {
    return {
      blogContent: "",
    };
  },
  beforeCreate() {
    document.body.style.background = "#eee";
    //获取数据
    request({
      method: "get",
      url: `/blog/detail?id=${this.$route.query.id}`,
    }).then((res) => {
      this.blogContent = res.data.data.content;
    });
  },
  updated() {
    let ul = document.querySelectorAll("ul")[0];
    let h3 = document.querySelectorAll("h3")[0];
    let mulu = document.querySelector(".toc");
    if (h3 && ul) {
      mulu.appendChild(h3);
      mulu.appendChild(ul);
    }
  },
  beforeDestroy() {
    document.body.style.background = "";
  },
  components: {
    MavonEditor,
  },
};
</script>

<style scoped>
@import "~assets/css/markdown/mavon-editor-index.css";

.container {
  opacity: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: 幼圆;
  overflow-y: scroll;
  animation: move 0.4s 0.4s linear forwards;
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

@keyframes move {
  0% {
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
  }
}
</style>