<template>
  <div class="time-select">
    <el-date-picker
      v-model="value"
      type="month"
      placeholder="选择年月"
      class="time-picker"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "2020-10",
    };
  },
};
</script>

<style scoped>
@import "~assets/css/element-ui/Diary-timePicker.css";
.time-select {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 10px;
}

.time-picker {
  width: 100%;
}
</style>