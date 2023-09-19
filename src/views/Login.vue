<template>

  <div class="bg">
    <h1 class="text1">Academic Affairs System of Hainan University</h1>
    <h1 class="text2">Already Signed up?</h1>
    <h1 class="text3">Sign Up for an Account </h1>
    <h1 class="text4">Let's get you all set up so you can start creating your first admission experience</h1>
    <label class="text5">Name</label>
    <label class="text6">Student Number</label>
    <label class="text7">Password</label>
    <el-input  class="el_input_name"  v-model="input" placeholder="Please enter the name"></el-input>
    <el-input  class="el_input_number" v-model="input" placeholder="Please enter the Student Number" type="number"></el-input>
    <el-input  class="el_input_password" v-model="input" placeholder="Please enter the Password" type="password"></el-input>

  
    <el-button class="el_button_login" style="color: rgba(255, 255, 255, 1); background-color: rgba(53,87,220,1);">Log In</el-button>


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
    data() {
    return {
      input: ''
    }
  },
    name: 'Login',
    
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
.text3{
  left: 900px;
  top: 60px;
  width: 271px;
  height: 39px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(32, 40, 66, 1);
  position: absolute;
}
.text4{
  left: 855px;
  top: 100px;
  width: 363px;
  height: 55px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(32, 40, 66, 1);
  position: absolute;
}
.text5{
  left: 650px;
  top: 180px;
  width: 387px;
  height: 68px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(32, 40, 66, 1);
  position: absolute;
}
.text6{
  left: 687px;
  top: 300px;
  width: 387px;
  height: 68px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(32, 40, 66, 1);
  position: absolute;
}
.text7{
  left: 668px;
  top: 420px;
  width: 387px;
  height: 68px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(32, 40, 66, 1);
  position: absolute;
}
.el_input_name{
  left: 750px;
  top: 200px;
  max-width: 400px;
}
.el_input_number{
  left: 352px;
  top: 320px;
  max-width: 400px;
}
.el_input_password{
  left:-47px;
  top: 440px;
  max-width: 400px;
}
.el_button_login{
  left: 225px;
  top: 501px;
  width: 177px;
  height: 48px;
  position: absolute;
}
</style>