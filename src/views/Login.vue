<template>

  <div class="bg">
    <h1 class="text1">Academic Affairs System of Hainan University</h1>
    <h1 class="text2">Already Signed up?</h1>
    <img class="bg_HN" src="./../assets/HN.png">
    <img class="bg_tr" src="./../assets/topright.png">

    <el-button @click="register_onClick" class="el_button_login" style="color: rgba(255, 255, 255, 1); background-color: rgba(53,87,220,1);">Register</el-button>


    <router-link to='/login/register'>Register</router-link>  <br>
    <router-link to='/login/signin'>Sign In</router-link>

    <div class="">
      <router-view></router-view>
    </div>
    
  </div>

</template>

<script>
  import SignIn from '@/components/SignIn.vue';
  export default {
  
    name: 'Login',
      data() {
    return {
      input: ''
    }
  },
  methods:{
    register_onClick(){
      this.$router.push('/login/register');
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
.bg_HN{
  top:650px;
  left:60px;
  width:250px;
  position: absolute;
}
.bg_tr{
  top: 500px;
  left: 1150px;
  width: 350px;
  position: absolute;
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
  top: 450px;
  width: 177px;
  height: 48px;
  position: absolute;
}
</style>