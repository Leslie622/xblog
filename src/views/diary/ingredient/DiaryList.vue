<template>
  <main class="main">
    <div
      class="main-inner"
      :style="{
        columns: count == 1 ? 1 : count == 2 ? 2 : 3,
        width: count == 1 ? '600px' : count == 2 ? '800px' : '1000px',
      }"
    >
      <div class="card" v-for="i in 10">
        <img src="../../../assets/img/bg/diaryBG.jpg" alt="" />
        <h2>fawfawfaf</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est
          quos rem volupta Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Omnis est quos rem volupta
        </p>
      </div>
    </div>
  </main>
</template>
 
<script>
export default {
  data() {
    return {
      columns: 1,
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