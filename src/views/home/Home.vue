<template>
  <div class="wrapper">
    <div class="indexPage">
      <div class="logo-content">
        <div class="siteLogo blackLogo">Leslie</div>
        <div class="siteLogo whiteLogo">Leslie</div>
      </div>
      <div class="homeMenu">
        <router-link
          v-for="(item, index) in this.linkList"
          :to="item.path"
          class="linkItem"
          :key="index"
          >{{ item.value }}</router-link
        >
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      linkList: [
        { path: "/MainBlog", value: "BLOG" },
        { path: "/Diary", value: "DIARY" },
        { path: "/Mark", value: "MARK" },
        { path: "/About", value: "ABOUT" },
        { path: "/Friends", value: "FRIENDS" },
      ],
      theme: 1,
    };
  },
};
</script>

<style scoped>
.dark .wrapper {
  background-image: linear-gradient(
      12deg,
      rgba(193, 193, 193, 0.08) 0%,
      rgba(193, 193, 193, 0.08) 2%,
      rgba(129, 129, 129, 0.08) 2%,
      rgba(129, 129, 129, 0.08) 27%,
      rgba(185, 185, 185, 0.08) 27%,
      rgba(185, 185, 185, 0.08) 66%,
      rgba(83, 83, 83, 0.08) 66%,
      rgba(83, 83, 83, 0.08) 100%
    ),
    linear-gradient(
      321deg,
      rgba(240, 240, 240, 0.08) 0%,
      rgba(240, 240, 240, 0.08) 13%,
      rgba(231, 231, 231, 0.08) 13%,
      rgba(231, 231, 231, 0.08) 34%,
      rgba(139, 139, 139, 0.08) 34%,
      rgba(139, 139, 139, 0.08) 71%,
      rgba(112, 112, 112, 0.08) 71%,
      rgba(112, 112, 112, 0.08) 100%
    ),
    linear-gradient(
      236deg,
      rgba(189, 189, 189, 0.08) 0%,
      rgba(189, 189, 189, 0.08) 47%,
      rgba(138, 138, 138, 0.08) 47%,
      rgba(138, 138, 138, 0.08) 58%,
      rgba(108, 108, 108, 0.08) 58%,
      rgba(108, 108, 108, 0.08) 85%,
      rgba(143, 143, 143, 0.08) 85%,
      rgba(143, 143, 143, 0.08) 100%
    ),
    linear-gradient(
      96deg,
      rgba(53, 53, 53, 0.08) 0%,
      rgba(53, 53, 53, 0.08) 53%,
      rgba(44, 44, 44, 0.08) 53%,
      rgba(44, 44, 44, 0.08) 82%,
      rgba(77, 77, 77, 0.08) 82%,
      rgba(77, 77, 77, 0.08) 98%,
      rgba(8, 8, 8, 0.08) 98%,
      rgba(8, 8, 8, 0.08) 100%
    ),
    linear-gradient(334deg, rgb(5, 5, 5), rgb(5, 5, 5));
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  transition: all 2s;
  background-image: linear-gradient(
      339deg,
      rgba(47, 47, 47, 0.02) 0%,
      rgba(47, 47, 47, 0.02) 42%,
      transparent 42%,
      transparent 99%,
      rgba(17, 17, 17, 0.02) 99%,
      rgba(17, 17, 17, 0.02) 100%
    ),
    linear-gradient(
      257deg,
      rgba(65, 65, 65, 0.02) 0%,
      rgba(65, 65, 65, 0.02) 11%,
      transparent 11%,
      transparent 92%,
      rgba(53, 53, 53, 0.02) 92%,
      rgba(53, 53, 53, 0.02) 100%
    ),
    linear-gradient(
      191deg,
      rgba(5, 5, 5, 0.02) 0%,
      rgba(5, 5, 5, 0.02) 1%,
      transparent 1%,
      transparent 45%,
      rgba(19, 19, 19, 0.02) 45%,
      rgba(19, 19, 19, 0.02) 100%
    ),
    linear-gradient(
      29deg,
      rgba(28, 28, 28, 0.02) 0%,
      rgba(28, 28, 28, 0.02) 33%,
      transparent 33%,
      transparent 40%,
      rgba(220, 220, 220, 0.02) 40%,
      rgba(220, 220, 220, 0.02) 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}

.indexPage {
  display: flex;
  flex-direction: column;
  font-family: Arial;
}

.logo-content {
  position: relative;
  flex: 1;
  margin: 0 auto;
  font-family: Monoton-Regular;
  font-size: 7rem;
  text-align: center;
}

.whiteLogo {
  position: absolute;
  top: 0;
  color: #fff;
  overflow: hidden;
}

.dark .whiteLogo,
.light .blackLogo {
  animation: logoAnimate 1s forwards;
}

.blackLogo {
  position: relative;
  color: black;
  overflow: hidden;
}

.homeMenu {
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
}

.linkItem {
  flex: 1;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: #249ffd;
}

.linkItem:hover {
  opacity: 0.5;
}

@keyframes logoAnimate {
  0% {
    z-index: 1;
    width: 0;
  }
  100% {
    z-index: 1;
    width: 100%;
  }
}
</style>