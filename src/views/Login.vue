<template>

  <div class="">

    <h1>Academic Affairs System of Hainan University</h1>

    <router-link to='/login/register'>Register</router-link>  <br>
    <router-link to='/login/signin'>Sign In</router-link>

    <div class="">
      ?????
      <router-view></router-view>
    </div>
    
  </div>

</template>

<script>
  export default {
    name: 'Login'
  };
</script>

<style>
</style>