<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';


export default {
  name: 'app',
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    const userInfo = this.$cookies.get('userInfo');
    
    axios.get("http://localhost:8081/userInfo/getUserInfoByUserID?userID="+userInfo.userID).then(res=>{
      if(res.data.token==userInfo.token){
        this.$store.commit('setUserInfo', userInfo);
      }
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
