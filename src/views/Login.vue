<template>

  <div  class="bg">
    <!-- <img class="bg" src="./../assets/Login_bg.jpg" alt=""> -->
    <h1 class="text1">Academic Affairs System<br> of Hainan University</h1>

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
  };
</script>

<style>
.bg{
  background-image: url('./../assets/Login_bg.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  position: fixed;
  top: -0%;
  z-index: -1;
  border: 1px solid black;
  background-attachment: fixed;
}
.text1{
font-size: 36px;
font-weight: 400;
color: rgba(255, 255, 255, 1);
text-align: left;
position: relative;
top: 150px;
left: 100px;
}
</style>