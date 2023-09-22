<template>
  <el-row type="flex" justify="center">
    <div v-on:keydown.enter="submitForm('form')">

      <el-col push="4">
        <H1 class="text_welcome">WELCOME</H1>
      </el-col>

      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item class="el_input_name custom-label"   label="UserID" prop="userID">
          <el-input type="text" v-model="form.userID" 
          placeholder="Please enter the UserID"  
          required>
          </el-input>
        </el-form-item>

        <el-form-item class="el_input_password custom-label"  style="margin-top: 40px;" label="Password" prop="userPassword">
          <el-input type="password" v-model="form.userPassword"
          placeholder="Please enter the password" 
          required
            show-password>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="submitForm('form')" style="width: 400px; margin-top: 40px">LOG IN</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-row>
</template>

<script>
import axios from "axios";
import hashCode from "./../utils/hash";

export default {
  name: "SignIn",
  data() {
    return {
      form: {
        userPassword: "",
        userID: "",
      },
      rules: {
        userPassword: [{ required: true, trigger: "blur" }],
        userID: [{ required: true, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(form) {

      this.$refs[form].validate((valid) => {
        if (valid) {

          
          if (isNaN(parseInt(this.form.userID))){
            this.$message({
                      message: `${this.form.userID} Not Found`,
                      type: "error",
                    });
            return
          }

          axios
            .get(
              "http://localhost:8081/userInfo/getUserInfoByUserID?userID=" +
                this.form.userID
            )
            .then((res) => {
              if (res.data.length == 0) {
                console.log(this.form.userID + " Not Found");
                /////////////////////
                this.$message({
                  message: `${this.form.userID} Not Found`,
                  type: "error",
                });

                //alert(this.form.userID+' Not Found');
              } else {
                if (hashCode(this.form.userPassword) == res.data.userPassword) {
                  console.log("Log In Success");
                  ///////////////////////////
                  this.$message({
                    message: `${res.data.userName}(${res.data.userID}) Log In Success`,
                    type: "success",
                  });
                  ////////////////////////////
                  // alert(`${res.data.userName}(${res.data.userID}) Log In Success`);
                  var userInfo = res.data;
                  userInfo.userLastLoginTime = new Date();
                  userInfo.token = new Date().getTime().toString();
                  // set global data
                  this.$store.commit("setUserInfo", userInfo);
                  // set cookie
                  this.$cookies.set("userInfo", userInfo, { expires: 7 });
                  // update token
                  axios
                    .put(
                      "http://localhost:8081/userInfo/updateUserInfoByUserID?userID=" +
                        this.form.userID,
                      userInfo
                    )
                    .then((ress) => {
                      this.$router.push("/home");
                      console.log(ress);
                    });
                } else {
                  console.log("Password Error");
                  //////////////

                  this.$message.error("Password Error");
                  /////////////
                  //alert("Password Error")
                }
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.custom-label .el-form-item__label {
  font-family: 'Your Font', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
.text_welcome {
  width: 271px;
  height: 44px;
  font-size: 36px;
  font-weight: 700;
  color: rgba(32, 40, 66, 1);
  margin-top: 100px;
}

.el_input_name {
  width: 400px;
}

.el_input_password {
  width: 400px;
}
</style>