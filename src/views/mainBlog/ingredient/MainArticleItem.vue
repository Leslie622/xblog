<template>
  <div class="articleItem">
    <div class="title">这是我的第一篇博客</div>
    <div class="bar">
      <span>
        <i class="iconfont icon-fabu1"></i>
        <span class="create-time time"
          ><span class="describe">发布于</span> 2020-09-12</span
        >
      </span>
      <span>
        <i class="iconfont icon-gengxin"></i
        ><span class="updata-time time"
          ><span class="describe">更新于</span> 2020-10-1</span
        >
      </span>
      <span>
        <i class="iconfont icon-biaoqian"></i>
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
      </span>
    </div>
    <div class="digest">
      如图，真空中均匀带电且单位面积带电量为 的圆面垂直穿过直线 l，其半径为
      R，圆面与直线恰为圆心。直线 l 上距离圆心 x 距离处有一点 P。试求 P
      点处的场强大小。
    </div>
    <div class="read-more-wrapper">
      <div class="read-more">
        <span class="read-more-text">阅读全文 »</span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
.articleItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  font-family: serif;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
}

.title {
  padding: 0 50px;
  margin: 40px 0;
  font-weight: 600;
  font-size: 2rem;
}

.bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  height: 15px;
  font-size: 1rem;
  text-align: center;
  line-height: 15px;
  color: #777;
}

.bar > span:not(:first-child)::before {
  content: "|";
  margin: 0 10px;
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

.tag {
  margin-right: 6px;
  padding: 3px 0;
  border-bottom: 1px solid #999;
}

.digest {
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  font-size: 1.4rem;
}

.read-more-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
}

.read-more {
  position: relative;
  padding: 0 20px;
  border: 2px solid #555;
  border-radius: 3px;
  font-size: 1.2rem;
  line-height: 2;
  color: #555;
  cursor: pointer;
  transition: all 0.6s;
}

.read-more::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #222;
  transition: all 0.4s;
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
  box-shadow: 0 2px 5px 0 rgba(148, 148, 148, 0.7);
  color: white;
  transform: translateY(-5px);
}

@media (max-width: 990px) {
  .articleItem {
    width: calc(100vw - 6px);
  }
}

@media (max-width: 700px) {
  .describe {
    display: none;
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