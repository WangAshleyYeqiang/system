<template>
  <div class="">

    <h1 class="text3">Sign Up for an Account </h1>
    <h1 class="text4">Let's get you all set up so you can start creating your first admission experience</h1>
  
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item class="el_input_name" label="UserID" prop="userID">
        <el-input  type="text" v-model="form.userID" ></el-input>
      </el-form-item>
      <el-form-item class="el_input_password" label="Password" prop="userPassword">
        <el-input  type="password" v-model="form.userPassword"></el-input>
      </el-form-item>
      <el-form-item class="el_input_submit">
        <el-button  type="primary" @click="submitForm('form')">Submit</el-button>
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
.el_input_name{
  left: 930px;
  top: 150px;
  position: absolute;
}
.el_input_password{
  left:930px;
  top: 300px;
  position: absolute;
}
.el_input_submit{
  left:1000px;
  top:500px;
  position: absolute;
}
</style>