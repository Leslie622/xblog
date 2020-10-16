<template>
  <main class="main">
    <div class="main-inner">
      <div class="card"></div>
    </div>
  </main>
</template>
 
<script>
export default {
  name: "",
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-inner {
  width: 70%;
  height: 1000px;
  background-color: tomato;
}

.card {
  width: 200px;
  height: 100px;
  background-color: white;
  border: 10px solid transparent;
}
</style>