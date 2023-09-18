<template>
  <div class="">
    Sign In
    <el-form :model="ruleForm" status-icon:rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="UserID" prop="userid">
        <el-input type="text" v-model="ruleForm.userid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validateUserid = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("The user id cannot be empty"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        userid: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userid: [{ validator: validateUserid, trigger: "blur" }],
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