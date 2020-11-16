<template>
  <header class="header">
    <div class="header-inner">
      <div class="brand-container">
        <main-switch-icon @click.native="SwitchHeader" ref="SwitchIcon" />
        <div class="brand">Leslie</div>
      </div>
      <div class="select-wrapper">
        <el-select
          :value="articleCategory"
          class="articleSelect"
          @change="switchCategory"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            class="a"
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
import MainSwitchIcon from "./MainSwitchIcon";

export default {
  components: {
    MainSwitchIcon,
  },
  data() {
    return {
      linkList: [
        { path: "/", value: "主页", iconClass: "iconfont icon-icon" },
        { path: "/MainBlog", value: "文章", iconClass: "iconfont icon-wenzhang" },
        { path: "/Filing", value: "归档", iconClass: "iconfont icon-guidang" },
        { path: "/Diary", value: "日记", iconClass: "el-icon-notebook-2" },
        { path: "/Friends", value: "友链", iconClass: "iconfont icon-pengyou" },
        { path: "/About", value: "关于", iconClass: "iconfont icon-guanyu" },
      ],
      selectOptions: [],
      articleCategory: "",
    };
  },
  created() {
    this.$request({
      method: "get",
      url: "/blog/category/query?user_id=8",
    }).then((res) => {
      this.selectOptions = res.data.data;
      //没有本地数据的情况下，默认第一个id
      this.articleCategory = this.selectOptions[0].id;
      //有本地数据的情况下，切换id
      if (window.localStorage.getItem("articleCategory")) {
        this.articleCategory = +window.localStorage.getItem("articleCategory");
      }
    });
  },

  mounted() {
    this.listenerResize();
  },
  methods: {
    switchCategory(res) {
      console.log(res);
      //切换分类id
      window.localStorage.setItem("articleCategory", res);
      //切换pageCount
      window.localStorage.setItem("pageCount", res);
      //初始化pageNum
      window.localStorage.setItem("pageNum", 1);
      //刷新页面
      location.reload();
    },
    SwitchHeader() {
      this.$refs.SwitchIcon.isActive = !this.$refs.SwitchIcon.isActive;
      if (this.$refs.SwitchIcon.isActive === true) {
        document.querySelector(".header").style.height = "440px";
      } else {
        var result = window.matchMedia("(max-width: 990px)");
        if (result.matches) {
          document.querySelector(".header").style.height = "130px";
        }
      }
    },
    listenerResize() {
      let that = this;
      window.addEventListener("resize", function (res) {
        if (res.currentTarget.innerWidth > 990) {
          document.querySelector(".header").style.height = "0px";
        }
        if (res.currentTarget.innerWidth < 990) {
          document.querySelector(".header").style.height = "130px";
          that.$refs.SwitchIcon.isActive = false;
        }
      });
    },
  },
};
</script>

<style scoped>
@import "~assets/css/element-ui/mainblog-select.css";

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0 auto;
  width: 1200px;
  height: 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: height 0.5s;
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
  height: 130px;
  color: white;
  background-color: #222;
}

.brand {
  font-family: YatraOne-Regular;
  font-size: 45px;
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
  font-size: 12px;
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
    position: static;
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