<template>
  <div class="articleItem">
    <div class="title">{{ articleData.title }}</div>
    <div class="bar">
      <span>
        <i class="iconfont icon-fabu1"></i>
        <span class="create-time time"
          ><span class="describe">发布于</span
          >{{ articleData.create_time.substring(0, 10) }}</span
        >
      </span>
      <span v-if="articleData.update_time != articleData.create_time">
        <i class="iconfont icon-gengxin"></i
        ><span class="updata-time time"
          ><span class="describe">更改于</span
          >{{ articleData.update_time.substring(0, 10) }}</span
        >
      </span>
      <span v-if="articleData.tag.length">
        <i class="iconfont icon-biaoqian"></i>
        <span class="tag" v-for="item in articleData.tag">{{ item }}</span>
      </span>
    </div>
    <div class="digest">
      {{ articleData.abs }}
    </div>
    <div class="cover" v-if="articleData.cover">
      <img :src="$imgPrefix + articleData.cover" />
    </div>
    <div class="read-more-wrapper">
      <div class="read-more" @click="gotoDetail">
        <span class="read-more-text">阅读全文 »</span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    articleData: {
      type: Object,
    },
  },
  methods: {
    gotoDetail() {
      let Detail = this.$router.resolve({
        path: "/Detail",
        query: { id: this.articleData.id },
      });
      window.open(Detail.href, "_blank");
    },
  },
};
</script>

<style scoped>
.articleItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  font-family: 幼圆;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
}

img {
  width: 1200px;
}

.title {
  margin: 2.5rem 0;
  padding: 0 2rem;
  font-size: 2.2rem;
}

.bar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  height: 15px;
  font-size: 1rem;
  text-align: center;
  line-height: 15px;
  color: #777;
}

.bar > span:not(:first-child)::before {
  content: "|";
  margin: 0 0.7rem;
  text-align: center;
}

.time {
  padding: 3px 0;
  border-bottom: 1px dashed #999;
}

.bar i {
  margin-right: 8px;
  vertical-align: bottom;
  color: #999;
}

.describe {
  margin-right: 5px;
}

.tag {
  margin-right: 6px;
  padding: 3px 0;
  border-bottom: 1px solid #999;
}

.digest {
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  font-family: sans-serif;
  font-size: 1.4rem;
  transform: translate3d(0, 0, 0);
}

.cover {
  width: 95%;
}

.cover img {
  width: 100%;
}

.read-more-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
}

.read-more {
  position: relative;
  padding: 0 20px;
  border: 2px solid #555;
  border-radius: 3px;
  font-size: 1rem;
  line-height: 2;
  color: #555;
  cursor: pointer;
  transition: all 0.3s linear;
}

.read-more::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #222;
  transition: all 0.1s linear;
}

.read-more-text {
  position: relative;
  z-index: 1;
}

.read-more:hover::after {
  width: 100%;
}

.read-more:hover {
  border-color: #222;
  box-shadow: 0 2px 4px 0 rgba(148, 148, 148, 0.7);
  color: white;
  transform: translateY(-5px);
}

@media (max-width: 990px) {
  .articleItem {
    width: calc(100vw - 6px);
  }
  .digest {
    font-family: 幼圆;
  }
}

@media (max-width: 768px) {
  .describe {
    display: none;
  }
  .digest {
    font-size: 1.6rem;
  }
  .bar {
    font-size: 1.4rem;
  }
}

@media (max-width: 414px) {
  .bar i {
    margin: 0 2px;
  }
  .bar > span:not(:first-child)::before {
    margin: 4px;
  }
}

@media (max-width: 320px) {
  .bar {
    font-size: 10px;
  }
  .bar i {
    margin: 0 2px;
  }
  .bar > span:not(:first-child)::before {
    margin: 4px;
  }
}
</style>