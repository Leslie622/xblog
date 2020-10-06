<template>
  <div class="articleItem">
    <div class="title">这是我的第一篇博客</div>
    <div class="bar">
      <div>
        <i class="iconfont icon-rili"></i>
        <span class="create-time time">发布于 2020-09-12</span>
      </div>
      <div>
        <i class="iconfont icon-rili1"></i>
        <span class="updata-time time">更新于 2020-10-1</span>
      </div>
      <div>
        <i class="iconfont icon-biaoqing"></i>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>
    <div class="digest">
      如图，真空中均匀带电且单位面积带电量为 的圆面垂直穿过直线 l，其半径为
      R，圆面与直线恰为圆心。直线 l 上距离圆心 x 距离处有一点 P。试求 P
      点处的场强大小。
    </div>
    <div class="read-more">阅读全文</div>
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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
}

.title {
  margin: 20px 0;
  font-size: 25px;
}

.bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  height: 15px;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
  color: #999;
}

.bar > div {
  padding: 0 10px;
  width: 150px;
}

.bar > div:not(:first-child) {
  border-left: 1px solid #999;
}

.bar > div:nth(:last-child) {
  width: 100px;
}

.time {
  padding: 2px 0;
  border-bottom: 1px dashed #999;
}

.bar i {
  margin: 0 5px;
  vertical-align: bottom;
  color: #999;
}

@media (max-width: 990px) {
  .articleItem {
    width: calc(100vw - 12px);
  }
}
</style>