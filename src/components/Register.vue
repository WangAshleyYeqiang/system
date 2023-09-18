<template>
  <div>
    <div class="">Register</div>
    
    <br>

    <el-form ref="form" :model="form" :rules="rules">
      
      <el-form-item label="UserID" prop="userID">
        <el-input v-model="form.userID" placeholder="Please enter your ID"></el-input>
      </el-form-item>

      <el-form-item label="Name" prop="userName">
        <el-input v-model="form.userName" placeholder="Please enter your Name"></el-input>
      </el-form-item>

      <el-form-item label="Gender" prop="userGender">
        <el-select v-model.lazy="form.userGender" placeholder="Select your Gender" @blur="validateField('userGender')">
          <el-option label="Male" value="Male"></el-option>
          <el-option label="Female" value="Female"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Phone" prop="userPhone">
        <el-input v-model="form.userPhone" placeholder="Please enter your Phone Number"></el-input>
      </el-form-item>

      <el-form-item label="School" prop="userSchool">
        <el-select v-model.lazy="form.userSchool" filterable  placeholder="Select your School" @blur="validateField('userSchool')">
          <el-option
            v-for="item in selectSchoolList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Type" prop="userType">
        <el-select v-model.lazy="form.userType" placeholder="Select your Type" @blur="validateField('userType')">
          <el-option label="Student" value="Student"></el-option>
          <el-option label="Teacher" value="Teacher"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Password" prop="userPassword">
        <el-input v-model="form.userPassword" placeholder="Please set your Password" @blur="validateField('userRePassword')"></el-input>
      </el-form-item>

      <el-form-item label="RepeatPassword" prop="userRePassword">
        <el-input v-model="form.userRePassword" placeholder="Please repeat enter your Password" @blur="validateField('userPassword')"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>

    </el-form>
  </div>
  
</template>

<script>
import axios from 'axios'
import hashCode from '@/utils/hash'
export default {
  name:'Register',
  data(){
    return{
      selectSchoolList:[
        { value:'Humanities'},
        { value:'International Business'},
        { value:'Marxism'},
        { value:'Sport'},
        { value:'International Studies'},
        { value:'International Communication'},
        { value:'Mathematics and Statistics'},
        { value:'Physical and Optoelectronic engineering'},
        { value:'Chemistry and Chemical enginnering'},
        { value:'Tourism'},
        { value:'HNU-ASU Joint International Tourism'},
        { value:'Computer science and Technology'},
        { value:'Art and Design'},
        { value:'Music and Dance'},
      ],

      form: {
        userID:'',
        userName:'',
        userGender:'',
        userPhone:'',
        userSchool:'',
        userType:'',
        userPassword:'',
        userRePassword:''
      },

      rules:{
        userID: [{ required: true, message: 'Please enter your UserID', trigger: 'blur' },],
        userName: [{ required: true, message: 'Please enter your Name', trigger: 'blur' },],
        userGender: [{ required: true, message: 'Please select your Gender', trigger: 'change' },],
        userPhone: [{ required: true, message: 'Please enter your Phone', trigger: 'blur' },],
        userSchool: [{ required: true, message: 'Please select your School', trigger: 'change' },],
        userType: [{ required: true, message: 'Please select your Type', trigger: 'change' },],
        userPassword: [
          { required: true, message: 'Please set your Password', trigger: 'blur' },
          { min: 6, max: 20, message: 'The password must be between 6 and 20 characters', trigger: 'blur' }
          ],
        userRePassword: [
          { required: true, message: 'Please repeat enter your Password', trigger: 'blur' },
          { validator: this.validateConfirmPassword, trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    validateField(field) {
      console.log('chufa')
      this.$refs.form.validateField(field);
    },

    validateConfirmPassword(rule, value, callback){
      if(this.form.userPassword==''){
        callback(new Error('You have not entered a password'));
      }else{
        if (value !== this.form.userPassword) {
          callback(new Error('The two entered passwords do not match'));
        } else {
          callback();
        }
      }
    },

    submitForm(){
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('表单校验通过');
          
          var userInfo = {
            userID:this.form.userID,
            userName:this.form.userName,
            userGender:this.form.userGender,
            userPhone:this.form.userPhone,
            userSchool:this.form.userSchool,
            userType:this.form.userType,
            userPassword:hashCode(this.form.userPassword),
            userCreateTime:new Date(),
            userLastLoginTime:'',
            token:''
          }

          //
          console.log(userInfo)
        }else{
          alert("error")
        }
      })
    },

    get(){
      axios.get("http://localhost:8081/userInfo/list").then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>