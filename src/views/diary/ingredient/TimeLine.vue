<template>
  <div class="time-shaft">
    <span class="title">LESLIE & DIARY</span>
    <div class="month-describe">
      <p
        v-for="(item, index) in circlePosition"
        :class="{ describeshow: index == chooseIndex }"
      >
        {{ item.describe }}
      </p>
    </div>
    <div
      class="big-circle"
      :style="{
        transform:
          'rotate(' + circlePosition[chooseIndex].rotate + 'deg) translateZ(0)',
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
    <div class="ityped-content">
      <span class="ityped"></span>
    </div>
  </div>
</template>
 
<script>
import { ityped } from "common/ityped";
export default {
  data() {
    return {
      chooseIndex: 9,
      circlePosition: [
        {
          rotate: -15.1,
          value: "Jan",
          describe: "一月首阳，犹有寒霜，唯有梅花独绽花香",
        },
        {
          rotate: -12.4,
          value: "Feb",
          describe: "二月花潮，初露嫩草，经冬果树初发新桃",
        },
        {
          rotate: -9.4,
          value: "Mar",
          describe: " 三月莺时，盎然春意，暖风携香沁人心脾",
        },
        {
          rotate: -6.5,
          value: "Apr",
          describe: " 四月槐序，春风化雨，景色明媚使人心愉",
        },
        {
          rotate: -3.5,
          value: "May",
          describe: "五月鸣蜩，不觉聒噪，居高声远增添热闹",
        },
        {
          rotate: -0.7,
          value: "Jun",
          describe: "六月溽暑，漫游莲湖，倏尔风来炎热消除",
        },
        {
          rotate: 2.2,
          value: "Jul",
          describe: "七月兰秋，菱花娇羞，清溪波动娟好静秀",
        },
        {
          rotate: 5.1,
          value: "Aug",
          describe: " 八月桂秋，桂花落雨，满庭飘香心怡几许",
        },
        {
          rotate: 8,
          value: "Sep",
          describe: "九月菊序，微凉秋雨，芙蓉出水亭亭清毓 ",
        },
        {
          rotate: 10.95,
          value: "Oct",
          describe: "十月飞阴，木叶落影，秋风乍起片片相迎",
        },
        {
          rotate: 13.9,
          value: "Nov",
          describe: " 十一月龙潜，秋季走远，初冬新临凉意寒",
        },
        {
          rotate: 16.9,
          value: "Dec",
          describe: " 十二月清祀，深冬已至，银装素裹雪纷飞",
        },
      ],
      textPosition: [
        { rotate: -15, top: 200, left: 4.5 },
        { rotate: -12, top: 165, left: 11.5 },
        { rotate: -10, top: 135, left: 19.5 },
        { rotate: -8, top: 112, left: 27.5 },
        { rotate: -5, top: 95, left: 35.5 },
        { rotate: 0, top: 88, left: 43.5 },
        { rotate: 0, top: 88, left: 51.5 },
        { rotate: 5, top: 95, left: 59.5 },
        { rotate: 8, top: 112, left: 67.5 },
        { rotate: 10, top: 135, left: 75.5 },
        { rotate: 12, top: 165, left: 83.5 },
        { rotate: 15, top: 200, left: 91.5 },
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
    ityped(".ityped", [
      "人难免天生有自怜的情绪，唯有时刻保持清醒，才能看清真正的价值在哪里。",
    ]);
  },
};
</script>

<style scoped>
.time-shaft {
  position: relative;
  min-width: 1918px;
  height: 310px;
  font-family: Arial;
  overflow: hidden;
}

.title {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
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
  box-shadow: 0 2px 4px rgb(204, 204, 204), 0 0 6px rgb(167, 165, 165);
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
  background-color: rgba(255, 255, 255, 0.7);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.month {
  padding: 15px 20px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.month-describe {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 300px;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.month-describe p {
  position: absolute;
  opacity: 0;
  width: 100%;
  font-size: 15px;
}

.month-describe .describeshow {
  opacity: 1;
  transition: all 1.5s;
}

.ityped-content {
  position: absolute;
  top: 230px;
  right: 15px;
  width: 100%;
  font-family: 幼圆;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}
</style>