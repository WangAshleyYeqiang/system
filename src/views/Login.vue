<template>

  <div class="bg">
    <h1 class="text1">Academic Affairs System of Hainan University</h1>

    <div v-if="$route.path === '/login/signin'">
      <h1 class="text2">No account</h1>

      <el-button @click="register_onClick('/login/register')" class="el_button_login" style="color: rgba(255, 255, 255, 1); background-color: rgba(53,87,220,1);">Register</el-button>

    </div>
    <div v-else>
      <h1 class="text2">Have account</h1>

      <el-button @click="register_onClick('/login/signin')" class="el_button_login" style="color: rgba(255, 255, 255, 1); background-color: rgba(53,87,220,1);">Sign In</el-button>

    </div>

    <div class="">
      <router-view></router-view>
    </div>
    
  </div>

</template>

<script>
  export default {
  
    name: 'Login',
      data() {
    return {
      input: ''
    }
  },
    methods:{
      register_onClick(path){
        this.$router.push(path);
      }
    }
  };
  
</script>

<style>
.bg{
  background-image:url('./../assets/Login_bg.jpg') ;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: fixed;
  top: 0%;
  width:100%;
  height: 100%;
}
.text1{
  left: 117px;
  top: 50px;
  width: 410px;
  height: 67px;
  font-size: 36px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  position:absolute;
}
.text2{
  left: 230px;
  top: 300px;
  width: 177px;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  position: absolute;
}
.el_button_login{
  left: 225px;
  top: 501px;
  width: 177px;
  height: 48px;
  position: absolute;
}
</style>