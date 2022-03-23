<template>
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand"></div>
      <div class="hand min-hand"></div>
      <div class="hand second-hand"></div>
    </div>
  </div>
</template>
<script>
// 通过js和css绘制一个时钟，可以通过动态绑定style来改变元素的角度值从而实现效果，但是这里我还是想要通过js获取元素改变样式
export default {
  data() {
    return {
      hourHand: null,
      minHand: null,
      secondHand: null,
    };
  },
  mounted() {
    this.hourHand = document.querySelector('.hour-hand');
    this.minHand = document.querySelector('.min-hand');
    this.secondHand = document.querySelector('.second-hand');
    this.setDate();
    setInterval(this.setDate, 1000);
  },
  methods: {
    setDate() {
      const now = new Date();
      console.log(now);

      const seconds = now.getSeconds();
      console.log('秒', seconds);
      const secondDegrees = seconds * (360 / 60) + 90;
      this.secondHand.style.transform = `rotate(${secondDegrees}deg)`;

      const mins = now.getMinutes();
      console.log('分钟', mins);
      const minsDegrees = (mins + seconds / 60) * (360 / 60) + 90;
      this.minHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hours = now.getHours();
      console.log('小时', hours);
      const hourDegrees = (hours + mins / 60) * (360 / 12) + 90;
      this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    },
  },
};
</script>
<style lang="less">
html {
  background: #018ded url('https://unsplash.it/1500/1000?image=881&blur=5');
  background-size: cover;
  font-family: 'helvetica neue';
  text-align: center;
  font-size: 10px;
}

body {
  margin: 0;
  font-size: 2rem;
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
}
</style>
<style lang="less" scoped>
.clock {
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /* account for the height of the clock hands */
}

.hand {
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
}
.hour-hand {
  right: 50%;
  width: 35%;
}
.min-hand {
  right: 50%;
  width: 43%;
}
.second-hand {
  width: 50%;
  background-color: #e46464;
}
</style>
