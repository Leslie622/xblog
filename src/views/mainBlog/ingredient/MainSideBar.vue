<template>
  <div class="sidebar">
    <div class="sidebar-inner">
      <div class="avatar">
        <img src="~assets/img/avatar/cheung.jpg"/>
      </div>
      <div class="description">何时眼前突兀见此屋</div>
      <div class="statistics">
        <div class="article">
          <span>888</span>
          <p>文章</p>
        </div>
        <div class="visit">
          <span>666</span>
          <p>观看</p>
        </div>
        <div class="diary">
          <span>222</span>
          <p>日记</p>
        </div>
        <div class="mark">
          <span>333</span>
          <p>留言</p>
        </div>
      </div>
      <div class="links-of-author">
        <div>
          <a href="https://github.com/Leslie622" target="_blank">
            <i class="iconfont icon-github1"></i
          ></a>
        </div>
        <div>
          <el-popover placement="top-start" trigger="hover">
            <img src="../../../assets/img/contact/weChatQR.png" class="weChatQR" />
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
export default {};
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

.weChatQR{
  width: 150px;
}

@media (max-width: 990px) {
  .sidebar {
    display: none;
  }
}
</style>