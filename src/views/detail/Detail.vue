<template>
  <div class="detail">
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

export default {
  components: {
    MavonEditor,
  },
  data() {
    return {
      blogContent: "",
    };
  },
  beforeCreate() {
    // 获取数据;
    this.$request({
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
};
</script>

<style scoped>
@import "~assets/css/markdown/mavon-editor-index.css";

.detail {
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
  background-color: #eee;
  overflow-y: scroll;
}

.toc-wrapper {
  position: sticky;
  opacity: 0;
  top: 10px;
  margin-right: 15px;
  overflow: hidden;
  overflow-y: scroll;
  animation: move .4s .4s linear forwards;
}

.toc {
  box-sizing: border-box;
  padding: 10px 10px 20px;
  font-family: Futura, "futura-pt", Arial, sans-serif;
  width: 300px;
  border-right: 1px solid rgb(204, 204, 204);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12),
  0 3px 1px -2px rgba(0, 0, 0, .06), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

.content {
  opacity: 0;
  width: 50%;
  animation: move .4s .4s linear forwards;
}

.articleContent {
  z-index: 0;
  font-family: sans-serif;
  font-size: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12),
  0 3px 1px -2px rgba(0, 0, 0, .06), 0 1px 5px 0 rgba(0, 0, 0, .12);
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
    transform: translateY(-30px) translateZ(0);
  }
  100% {
    opacity: 1;
  }
}

</style>