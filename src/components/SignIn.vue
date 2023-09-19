<template>
  <div class="">
  
    Sign In
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="UserID" prop="userID">
        <el-input type="text" v-model="form.userID" ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="userPassword">
        <el-input type="password" v-model="form.userPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import hashCode from "./../utils/hash"

export default {
  name: 'SignIn',
  data() {


    return {
      form: {
        userPassword: "",
        userID: "",
      },
      rules: {
        userPassword: [{ required:true, trigger: "blur" }],
        userID: [{ required:true, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.get("http://localhost:8081/userInfo/getUserInfoByUserID?userID="+this.ruleForm.userid).then(res=>{
            console.log(res)
            if(res.data.length==0){
              console.log(this.ruleForm.userid+' Not Found')
              alert(this.ruleForm.userid+' Not Found');
            }else{
              if(hashCode(this.ruleForm.pass)==res.data.userPassword){
                console.log('Log In Success')
                alert(`${res.data.userName}(${res.data.userID}) Log In Success`);
                var userInfo = res.data
                userInfo.userLastLoginTime = new Date()
                userInfo.token=(new Date().getTime()).toString()
                axios.put("http://localhost:8081/userInfo/updateUserInfoByUserID?userID="+this.ruleForm.userid,userInfo).then(ress=>{
                  this.$router.push('/home');
                  console.log(ress)
                })
              }else{
                console.log("Password Error")
                alert("Password Error")
              }
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
}
</script>

<style>

</style>