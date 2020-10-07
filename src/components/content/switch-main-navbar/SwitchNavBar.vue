<template>
  <transition appear enter-active-class="animate__animated animate__jackInTheBox">
    <div class="SwitchNavBarBtn" :class="{active:isActive}">
      <div class="wrapper">
        <span class="Switchicon"></span>
        <span class="Switchicon"></span>
        <span class="Switchicon"></span>
      </div>
    </div>
  </transition>
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
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 50px;
  z-index: 3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.SwitchNavBarBtn .Switchicon {
  display: block;
  padding: 4px 0;
  transition: all 0.2s ease;
}

.SwitchNavBarBtn .Switchicon::before {
  content: "";
  display: block;
  width: 30px;
  height: 2px;
  background-color: #fff;
  transition: transform 0.2s ease 0.1s, background-color 0.3s ease;

  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
}

.active.SwitchNavBarBtn {
  background-color: transparent;
}

.active .Switchicon::before {
  background-color: black;
}

.active .Switchicon:nth-child(1)::before {
  transform: rotate(45deg);
}

.active .Switchicon:nth-child(3)::before {
  transform: rotate(-45deg);
}

.active .Switchicon:nth-child(1) {
  transform: translateY(10px);
}

.active .Switchicon:nth-child(2) {
  opacity: 0;
  transition: none;
}

.active .Switchicon:nth-child(3) {
  transform: translateY(-10px);
}
</style>