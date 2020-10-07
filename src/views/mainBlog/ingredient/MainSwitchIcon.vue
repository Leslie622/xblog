<template>
  <div class="SwitchNavBarBtn" :class="{ active: isActive }">
    <div class="wrapper">
      <span class="Switchicon"></span>
      <span class="Switchicon"></span>
      <span class="Switchicon"></span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.SwitchNavBarBtn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 20px;
  z-index: 3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.SwitchNavBarBtn .Switchicon {
  display: block;
  padding: 3px 0;
  transition: all .2s ease;
}

.SwitchNavBarBtn .Switchicon::before {
  content: "";
  display: block;
  width: 28px;
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
  transition: transform .2s ease .1s, background-color .3s ease;
}

.active .Switchicon:nth-child(1)::before {
  transform: rotate(45deg);
}

.active .Switchicon:nth-child(3)::before {
  transform: rotate(-45deg);
}

.active .Switchicon:nth-child(1) {
  transform: translateY(8px);
}

.active .Switchicon:nth-child(2) {
  opacity: 0;
  transition: none;
}

.active .Switchicon:nth-child(3) {
  transform: translateY(-8px);
}

@media (min-width: 990px) {
  .SwitchNavBarBtn {
    display: none;
  }
}

</style>