<template>
  <div>
   
    <el-row type="flex" justify="center">
      <div v-on:keydown.enter="submitForm('form')">
      <el-col push="3">
      <h1 class="text_1">Sign up for an Account</h1>
        </el-col>
      <el-col push="3">
      <h2 class="text_2">Let's get you all set up so you can start creating your first admission experience</h2>
        </el-col>

      <el-form :model="form" :rules="rules" ref="form">
        
         <el-form-item class="el_input_name custom-label" label="Name"  prop="Name"   >
        <el-input type="text" v-model="form.userID" placeholder="Please enter your ID" clearable required>
        </el-input>
      </el-form-item> 

      <el-form-item class="el_input_name custom-label" label="Student Number" prop="userName">
        <el-input type="text" v-model="form.userName" placeholder="Enter your Student Number" clearable required>
        </el-input>
      </el-form-item>
    
      <el-form-item class="el_input_name custom-label" label="Gender" prop="userGender" push="8">
        <el-select v-model.lazy="form.userGender" placeholder="Select your Gender"  @blur="validateField('userGender')" push="8">
          <el-option label="Male" value="Male"></el-option>
          <el-option label="Female" value="Female"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="el_input_name custom-label" label="Phone" prop="userPhone">
        <el-input v-model="form.userPhone" placeholder="Please enter your Phone Number"></el-input>
      </el-form-item>

      <el-form-item class="el_input_name custom-label" label="Faculty" prop="userSchool">
        <el-select v-model.lazy="form.userSchool" filterable  placeholder="Select your Faculty" @blur="validateField('userSchool')">
          <el-option
            v-for="item in selectSchoolList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="el_input_name custom-label" label="Y_Type" prop="userType">
        <el-select v-model.lazy="form.userType" placeholder="Select your Type" @blur="validateField('userType')">
          <el-option label="Student" value="Student"></el-option>
          <el-option label="Teacher" value="Teacher"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="el_input_name custom-label" label="Password" prop="userPassword">
        <el-input v-model="form.userPassword" placeholder="Please set your Password" @blur="validateField('userRePassword')" show-password></el-input>
      </el-form-item>

      <el-form-item class="el_input_name custom-label" label="RepeatPassword" prop="userRePassword">
        <el-input v-model="form.userRePassword" placeholder="Please repeat enter your Password" @blur="validateField('userPassword')" show-password></el-input>
      </el-form-item>
        
      <el-form-item class="el_input_name custom-label">
        <el-button type="primary"  @click="submitForm" style="width: 400px; margin-top: 60px">Submit</el-button>
      </el-form-item>

      
    </el-form>
      </div>
  </el-row>
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
            userID:parseInt(this.form.userID),
            userName:this.form.userName,
            userGender:this.form.userGender,
            userPhone:this.form.userPhone,
            userSchool:this.form.userSchool,
            userType:this.form.userType,
            userPrivilege:1,
            userPassword:hashCode(this.form.userPassword),
            userCreateTime:new Date(),
            userLastLoginTime:'',
            token:''
          }

          axios.post('http://localhost:8081/userInfo/add',userInfo).then(res=>{
            console.log(res)
            
            if(res.data){
              alert("Register Success")
              this.$router.push('/login/signin');
            }else{
              alert("Register Fail")
            }
          }).catch(err=>{
            if(err=='Error: Request failed with status code 500'){
              alert(`${this.form.userID} already exist`)
            }
            console.log(err)
          })
          
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
  .text_1 {
  width: 271px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(32, 40, 66, 1);
  margin-top: 10px;
}
.text_2 {
  width: 271px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(32, 40, 66, 1);
  margin-top: 10px;
}
  
  
  .custom-label .el-form-item__label {
  font-family: 'Your Font', sans-serif;
  font-size: 10px;
  font-weight: bold;
  color: #333;
}

.el_input_name {
  width: 250px;
}

  
</style>