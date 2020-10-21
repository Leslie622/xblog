<template>
  <main class="main">
    <transition
      appear
      enter-active-class="animate__animated animate__swing animate__slow"
    >
      <div
        class="main-inner"
        :style="{
          columns: count == 1 ? 1 : count == 2 ? 2 : 3,
          width: count == 1 ? '600px' : count == 2 ? '1000px' : '1200px',
        }"
      >
        <div class="card">
          <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>
            这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
          </p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一</p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-eyjjrl.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一</p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-mdx789.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一</p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-oxkjgm.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一</p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-wypo96.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一</p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-xlx5mv.jpg" alt="" />
          <h2 class="date">20 / 9 /20</h2>
          <p>这是一段文字这是一段文字这是一段文字这是一段文字这是一</p>
          <div class="read-more">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>
 
<script>
export default {
  data() {
    return {
      count: 3,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 幼圆;
}

.main-inner {
  column-gap: 0;
}

.columns_1 {
  columns: 1;
}

.card {
  break-inside: avoid;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
}

.card img {
  max-width: 100%;
  vertical-align: middle;
}

.card h2 {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.card p {
  margin: 0 0 30px;
  padding: 0 60px;
  font-size: 18px;
  text-align: center;
}

.read-more {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
}

.read-more span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.read-more span:hover {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.read-more i {
  font-size: 25px;
  color: rgb(167, 165, 165);
}

@media (max-width: 1200px) {
  .main-inner {
    box-sizing: border-box;
    columns: 2 !important;
    width: calc(100% - 40px);
  }
}

@media (max-width: 768px) {
  .main-inner {
    columns: 1 !important;
  }
}
</style>