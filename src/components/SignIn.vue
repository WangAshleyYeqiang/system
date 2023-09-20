<template>
  <div class="HN">
  <H1 class="text_welcome">WELCOME</H1>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item class="el_input_name" label="UserID" prop="userID">
        <el-input  type="text" v-model="form.userID" placeholder="Please enter the UserID" required></el-input>
      </el-form-item>

      <el-form-item class="el_input_password" label="Password" prop="userPassword">
        <el-input  type="password" v-model="form.userPassword" placeholder="Please enter the password" required show-password></el-input>
      </el-form-item>
      <el-form-item class="el_input_submit">
        <el-button  type="primary" @click="submitForm('form')" style="width: 400px;">LOG IN</el-button>
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
.text_welcome{
  left: 910px;
  top: 200px;
  width: 271px;
  height: 44px;
  font-size: 36px;
  font-weight: 700;
  color: rgba(32, 40, 66, 1);
  position: absolute;
}
.el_input_name{
  left: 850px;
  width:400px;
  top: 250px;
  position: absolute;
}
.el_input_password{
  left:850px;
  width:400px;
  top: 340px;
  position: absolute;
}
.el_input_submit{
  left:850px;
  top:460px;
  position: absolute;
}
</style>