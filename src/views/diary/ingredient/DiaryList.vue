<template>
  <main class="main">
    <transition appear enter-active-class="animate__animated animate__fadeIn">
      <div
        class="main-inner"
        :style="{
          columns: count == 1 ? 1 : count == 2 ? 2 : 3,
          width: count == 1 ? '600px' : count == 2 ? '1000px' : '1200px',
        }"
      >
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-8o77w2.jpg" alt="" />
          <h2 class="date">20 / 11 / 1</h2>
          <p>心之所向，素履以往，生如逆旅，一苇以航。</p>
          <p>——七堇年</p>
          <div class="read-more" @click="hint">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
          <h2 class="date">20 / 11 / 2</h2>
          <p>使人疲惫的不是远方的高山，而是鞋子里的一粒沙子。</p>
          <p>——伏尔泰《格言》</p>
          <div class="read-more" @click="hint">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>

        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-eyjjrl.jpg" alt="" />
          <h2 class="date">20 / 11 / 3</h2>
          <p>生活安逸时会做出绝望的诗，生活窘迫时会不断写出生的喜悦。</p>
          <p>——太宰治《叶》</p>
          <div class="read-more" @click="hint">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-mdx789.jpg" alt="" />
          <h2 class="date">20 / 9 / 20</h2>
          <p>凡事需多听但少言；聆听他人之意见，但保留自己之判断。</p>
          <p>——莎士比亚 《哈姆雷特》</p>
          <div class="read-more" @click="hint">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-oxkjgm.jpg" alt="" />
          <h2 class="date">20 / 9 / 20</h2>
          <p>
            楼道角落里阳光每天盛开 你很久前也在 很久前的花肥肥地开在窗外
            你很久前也毛茸茸地在窗里开 它们为什么能长盛不衰 我们为什么屡战屡败
          </p>
          <p>——冯唐《记梦》</p>
          <div class="read-more" @click="hint">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-wypo96.jpg" alt="" />
          <h2 class="date">20 / 9 / 20</h2>
          <p>“每个人的生命里，都有最艰难的那一年，将人生变得美好而辽阔。”</p>
          <p>——《岛上书店》</p>
          <div class="read-more" @click="hint">
            <span> <i class="el-icon-more"></i></span>
          </div>
        </div>
        <div class="card">
          <img src="../../../assets/img/bg/wallhaven-xlx5mv.jpg" alt="" />
          <h2 class="date">20 / 9 / 20</h2>
          <p>
            我终其一生追求的，也不过就是别人在谈论我的时候眼中没有讥讽，话语中没有偏颇。还有，不要活的太久。
          </p>
          <p>——吴忠全《有声默片》</p>
          <div class="read-more" @click="hint">
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
  methods: {
    hint() {
      this.$alert(
        "因时间关系，此页面相关功能尚未完善，目前仅完成页面构思和静态文字，没有进行数据渲染，请谅解！",
        "提示",
        {
          confirmButtonText: "确定",
        }
      );
    },
  },
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
  animation: move 0.4s linear forwards;
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

@keyframes move {
  0% {
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
  }
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