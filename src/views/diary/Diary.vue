<template>
  <div>
    <div class="time-shaft">
      <div
        class="big-circle"
        :style="{
          transform:
            'rotate(' +
            circlePosition[chooseIndex].rotate +
            'deg) translateZ(0)',
        }"
      >
        <div class="bear"></div>
      </div>
      <span
        v-for="(item, index) in circlePosition"
        @click="chooseIndex = index"
        class="month"
        >{{ item.value }}</span
      >
    </div>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      chooseIndex: 9,
      circlePosition: [
        { rotate: -10, value: "Jan" },
        { rotate: -8.3, value: "Feb" },
        { rotate: -6.3, value: "Mar" },
        { rotate: -4.4, value: "Apr" },
        { rotate: -2.45, value: "May" },
        { rotate: -0.5, value: "Jun" },
        { rotate: 1.4, value: "Jul" },
        { rotate: 3.4, value: "Aug" },
        { rotate: 5.3, value: "Sep" },
        { rotate: 7.3, value: "Oct" },
        { rotate: 9.3, value: "Nov" },
        { rotate: 11.25, value: "Dec" },
      ],
      textPosition: [
        { rotate: -10, top: 170, left: 4.5 },
        { rotate: -7, top: 145, left: 11.5 },
        { rotate: -5, top: 125, left: 19.5 },
        { rotate: -3, top: 108, left: 27.5 },
        { rotate: -2, top: 100, left: 35.5 },
        { rotate: 0, top: 95, left: 43.5 },
        { rotate: 0, top: 95, left: 51.5 },
        { rotate: 2, top: 100, left: 59.5 },
        { rotate: 3, top: 108, left: 67.5 },
        { rotate: 5, top: 125, left: 75.5 },
        { rotate: 7, top: 145, left: 83.5 },
        { rotate: 10, top: 170, left: 91.5 },
      ],
    };
  },
  mounted() {
    let month = document.querySelectorAll(".month");
    for (let i = 0; i < month.length; i++) {
      month[i].style.position = "absolute";
      month[i].style.top = this.textPosition[i].top + "px";
      month[i].style.left = this.textPosition[i].left + "%";
      month[i].style.transform = `rotate(${this.textPosition[i].rotate}deg)`;
    }
  },
  beforeRouteEnter(to, from, next) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#fff";
    next();
  },
};
</script>

<style scoped>
.time-shaft {
  position: relative;
  width: 100vw;
  min-width: 1920px;
  height: 100vh;
  background-image: url("../../assets/img/bg/wallhaven-vg7xml.png");
  background-repeat: no-repeat;
  overflow: hidden;
}

.big-circle {
  position: relative;
  top: 150px;
  left: 50%;
  z-index: 10;
  margin-left: -3000px;
  width: 6000px;
  min-width: 1920px;
  height: 6000px;
  border: 0 solid #b9b9b9;
  border-radius: 50%;
  box-shadow: 0 0 6px 1px rgba(231, 231, 231, 0.7);
  background-color: transparent;
  transition: all 0.5s linear;
}

.bear {
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -60px;
  width: 15px;
  height: 15px;
  background-color: white;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.month {
  padding: 15px 20px;
  color: white;
  cursor: pointer;
}
</style>