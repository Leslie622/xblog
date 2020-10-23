<template>
  <div class="mark">
    <div class="envelope-content">
      <div class="envelope envelopetop"></div>
      <div class="envelope envelope-inner"></div>
      <div class="envelope envelopebottom"></div>
    </div>
  </div>
</template>
 
<script>
export default {};
</script>
 
<style scoped>
.mark {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("../../assets/img/bg/wallhaven-r2v99w.jpg");
  background-size: cover;
}

.envelope {
  position: absolute;
  bottom: 0;
  width: 530px;
}

.envelope img {
  vertical-align: middle;
}

.envelopetop {
  top: 0;
  height: 316px;
  background-image: url("../../assets/img/contact/envelopetop.png");
}

.envelopebottom {
  height: 260px;
  background-image: url("../../assets/img/contact/envelopebottom.png");
}

.envelope-inner {
  bottom: 130px;
  width: 500px;
  height: 120px;
  background-color: white;
  transition: all 0.6s ease;
}

.envelope-content:hover .envelope-inner {
  height: 400px;
}

.envelope-content:hover {
  transform: translateY(40px);
}

.envelope-content {
  position: relative;
  display: flex;
  justify-content: center;
  width: 530px;
  height: 440px;
  transition: all 0.6s ease;
}
</style>