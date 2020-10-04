<template>
  <div id="Blog">
    <router-view />
  </div>
</template>

<script>


export default {
  name: "Blog",

};
</script>

<style>
@import "~assets/css/base.css";

#Blog {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
