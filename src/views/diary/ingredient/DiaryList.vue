<template>
  <main class="main">
    <div class="main-inner">
      <div class="card">
        <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Omnis est quos rem
          volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Omnis est quos rem
          volupta Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Omnis est quos rem volupta Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Omnis est quos rem volupta Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Omnis est quos rem
          volupta Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Omnis est quos rem volupta Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Omnis est quos rem
          volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/avatar/cheung.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta
        </p>
      </div>
      <div class="card">
        <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Omnis est quos rem volupta Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Omnis est quos rem
          volupta
        </p>
      </div>
    </div>
  </main>
</template>
 
<script>
export default {
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-inner {
  columns: 4;
  column-gap: 0;
  width: 1200px;
}

.card {
  break-inside: avoid;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}

.card img {
  max-width: 100%;
}

.card h2 {
  padding: 0;
  font-size: 20px;
}

.card p {
  margin: 0;
}

@media (max-width: 1200px) {
  .main-inner {
    box-sizing: border-box;
    columns: 3;
    width: calc(100% - 40px);
  }
}

@media (max-width: 768px) {
  .main-inner {
    columns: 2;
  }
}

@media (max-width: 480px) {
  .main-inner {
    columns: 1;
  }
}
</style>