<template>
  <div>
    My

    <el-button type="danger" plain @click="signout_onClick">Sign out</el-button>
  </div>
</template>

<script>
export default {
    name:"My",
    
    methods: {
      signout_onClick(){
        this.$cookies.remove('userInfo')
        this.$store.state.userInfo={userID:'',userName:'',userGender:'',userPhone:'',userSchool:'',userLastLoginTime:'',userCreateTime:'',userPassword:'',userPrivilege:'',userType:'',token:'',}
        this.$message({
          message:'Log out success',
          type:'success'
        })
        this.$router.push('/login/signin')
      },
    }
}

</script>

<style>

</style>