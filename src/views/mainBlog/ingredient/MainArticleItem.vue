<template>
      <div class="articleItem"></div> 
</template>
 
<script>
export default {
  name:'',
}
</script>

<style scoped>
.articleItem {
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  background-color: black;
}

@media (max-width: 990px) {
  .articleItem {
    width: calc(100vw - 12px);
  }
}
</style>