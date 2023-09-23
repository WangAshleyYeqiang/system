<template>
  <div>
    <div>Personal information</div>
    <br />
    <el-form ref="form" :model="form" :rules="rules">
<!--   
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item> -->

    <!-- <el-form-item label="活动区域">
    <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col> 
  </el-form-item> -->

 
  <el-descriptions title="Personal information" column="2" label-class-name="my-label" content-class-name="my-content">
   
    <el-descriptions-item  label="Name" >Catherine</el-descriptions-item>
    
   
    <el-descriptions-item label="Age">21</el-descriptions-item>
    
    <el-descriptions-item label="Student Number">20213003451</el-descriptions-item>
    <el-descriptions-item label="Gender">Female</el-descriptions-item>
    <el-descriptions-item label="Native place">Hainan</el-descriptions-item>
    <el-descriptions-item label="Nationality">Han</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag> </el-descriptions-item>
    <el-descriptions-item label="联系地址"> </el-descriptions-item>
</el-descriptions>
<el-descriptions column="1" label-class-name="my-label" content-class-name="my-content">
  <el-descriptions-item label="Telephone Number">15394587256</el-descriptions-item>
  <el-descriptions-item label="E-mail">15394587256@.163.com</el-descriptions-item>
</el-descriptions>



      <!-- <el-form-item label="Name" prop="yourname">
        <el-input v-model="form.yourname" clearable
          @blur="validateField('yourname')"><h1> Catherine</h1> </el-input>
      </el-form-item>

      <el-form-item label="Major" prop="major">
        <el-input
          v-model="form.major"
          placeholder="Enter your college major"
          clearable
          @blur="validateField('major')"
        ></el-input>
      </el-form-item>

      <el-form-item label="StudentNumber" prop="studentnumber">
        <el-input
          v-model="form.studentnumber"
          placeholder="Enter your student number"
          clearable
          @blur="validateField('studentname')"
        ></el-input>
      </el-form-item>

      <el-form-item label="Class" prop="class">
        <el-input
          v-model="form.classr"
          placeholder="Enter your class"
          clearable
          @blur="validateField('class')"
        ></el-input>
      </el-form-item>

      <el-form-item label="Age" prop="age">
        <el-input
          v-model="form.age"
          placeholder="Enter your age"
          clearable
          @blur="validateField('age')"
        ></el-input>
      </el-form-item>

      <el-form-item label="Contactway" prop="contactway">
        <el-input
          v-model="form.contactway"
          placeholder="Enter your contact way"
          clearable
          @blur="validateField('contactway')"
        ></el-input>
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>

      <el-form-item>
        <el-cascader :options="options" clearable></el-cascader>
      </el-form-item>
    </el-form>
My

    <el-button type="danger" plain @click="signout_onClick">Sign out</el-button>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      form: {
        yourname: "",
        major: "",
        studentnumber: "",
        class: "",
        age: "",
        contactway: ""
      },
      rules: {
        yourname: [
          { required: true, message: "Enter your name", trigger: "blur" }
        ],
        major: [
          { required: true, message: "Enter your major", trigger: "blur" }
        ],
        studentnumber: [
          {
            required: true,
            message: "Enter your student number",
            trigger: "blur"
          }
        ],
        class: [
          { required: true, message: "Enter your class", trigger: "blur" }
        ],
        age: [{ required: true, message: "Enter your age", trigger: "blur" }],
        contactway: [
          { required: true, message: "Enter your contact way", trigger: "blur" }
        ]
      },
      methods: {
        validateField(field) {
          console.log("chufa");
          this.$refs.form.validateField(field);
        },
        submitForm() {
          this.$refs.form.validate(valid => {});
        },
        signout_onClick() {
          this.$cookies.remove("userInfo");
          this.$store.state.userInfo = {
            userID: "",
            userName: "",
            userGender: "",
            userPhone: "",
            userSchool: "",
            userLastLoginTime: "",
            userCreateTime: "",
            userPassword: "",
            userPrivilege: "",
            userType: "",
            token: ""
          };
          this.$message({
            message: "Log out success",
            type: "success"
          });
          this.$router.push("/login/signin");
        }
      }
    };
  }
};
</script>

<style>

  .my-label {
    color:rgb(11, 117, 237)
  }

  .my-content {
    border: 1px solid rgba(12, 122, 247, 1);
    border-radius: 9px;
    border-width: 1px; 
    padding: 3px;  
  }
</style>