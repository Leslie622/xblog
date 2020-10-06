<template>
  <header class="header">
    <div class="header-inner">
      <div class="brand-container">
        <div class="brand">Leslie</div>
        <div class="brand-sub">Leslie's Blog</div>
      </div>
      <div class="select-wrapper">
        <el-select
          v-model="articleCategory"
          placeholder="选择您想要看的文章类型"
          class="articleSelect"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <ul class="menu">
        <li v-for="(item, index) in linkList" :key="index">
          <router-link :to="item.path" class="menuItem">
            <i :class="item.iconClass"></i>{{ item.value }}</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      linkList: [
        { path: "/", value: "主页", iconClass: "iconfont icon-icon" },
        { path: "/Diary", value: "日记", iconClass: "el-icon-notebook-2" },
        { path: "/Mark", value: "留言", iconClass: "el-icon-edit-outline" },
        { path: "/About", value: "关于", iconClass: "iconfont icon-guanyu" },
        { path: "/Friends", value: "友链", iconClass: "iconfont icon-pengyou" },
        { path: "/Friends", value: "搜索", iconClass: "el-icon-search" },
      ],
      selectOptions: [
        {
          value: "选项1",
          label: "Html",
        },
        {
          value: "选项2",
          label: "Css",
        },
        {
          value: "选项3",
          label: "Javascript",
        },
        {
          value: "选项4",
          label: "Vue",
        },
      ],
      articleCategory: "",
    };
  },
};
</script>

<style scoped>
@import "~assets/css/element-ui/mainblog-select.css";

.header {
  width: 1200px;
  height: 0;
  margin: 0 auto;
  transition: height 0.8s;
}

.header-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 10px;
  width: 240px;
  height: 440px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}

.brand-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 130px;
  color: white;
  background-color: #222;
}

.brand {
  margin-bottom: 20px;
  font-family: YatraOne-Regular;
  font-size: 45px;
}

.brand-sub {
  font-family: Arial;
  font-size: 10px;
}

.menu {
  margin-top: 10px;
}

.menu i {
  padding: 0 20px;
  vertical-align: bottom;
  font-size: 17px;
  line-height: 40px;
}

.menuItem {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 11px;
  line-height: 40px;
  transition: all 0.2s;
}

.menuItem:hover {
  background-color: #f5f5f5;
}

@media (max-width: 990px) {
  .header-inner {
    position: static;
    width: 100%;
  }
  .header {
    width: auto;
    height: 130px;
    overflow: hidden;
  }
}

@media (min-width: 990px) {
  .header {
    transition: none;
  }
}

@media (min-width: 1600px) {
  .header {
    width: 73%;
  }
}
</style>