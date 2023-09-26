<template>
  <div style="height: 100%; width: 100%; overflow: hidden" class="bg5">
    <div>
      <h1 class="payText1">Congratulation!</h1>
      <h2 class="payText2">Being part of the VIP</h2>
      <p>The page will be redirect after {{ countdown }} seconds</p>
    </div>

    <div style="width: 100%; height: 100%; overflow: hidden">
      <img
        class="lh"
        src="./../assets/10001.2f2054c92b1b344deb29842ccb16ad7f.webp"
        alt=""
      />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      countdown: 5, // 初始倒计时秒数
    };
  },
  name: "Pay",
  mounted() {
    // 使用 setInterval 每秒更新倒计时
    this.countdownTimer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        // 倒计时结束后执行页面跳转
        this.$router.push("/Home");
        clearInterval(this.countdownTimer); // 清除定时器
      }
    }, 1000); // 1000 毫秒（1 秒）
  },
  beforeDestroy() {
    // 在组件销毁之前清除定时器，以防止内存泄漏
    clearInterval(this.countdownTimer);
  },
};
</script>


<style>
.lh {
  overflow: hidden;
  width: 120%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: -200px;
  z-index: 10;

  animation-duration: 1000ms;
}
.payText1 {
  font-size: 48px;
  font-weight: 1000;
  margin-top: 260px;
}

.payText2 {
  font-size: 36px;
  font-weight: 800;
  margin-top: 50px;
  line-height: 100px;
}
.bg5 {
  background-image: url(./../assets/bg7.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
}
</style>