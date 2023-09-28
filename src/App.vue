<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState(["userInfo"]),
  },
  mounted() {
    const userInfo = this.$cookies.get("userInfo");
    console.log(userInfo, "app.vue");
    // if (userInfo.userID==null||userInfo.userID==undefined||userInfo.userID==''){
    //   return
    // }
    axios
      .get(
        "http://localhost:8081/userInfo/getUserInfoByUserID?userID=" +
          userInfo.userID
      )
      .then((res) => {
        console.log(res.data.token == userInfo.token);
        if (res.data.token == userInfo.token) {
          this.$store.commit("setUserInfo", userInfo);
        }
      });
    console.log(this.$store.state, "app.vue");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
