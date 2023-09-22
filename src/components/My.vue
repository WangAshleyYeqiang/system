<template>
  <div>
    <div>Personal information</div>
    <br>
    <el-form ref="form" :model="form" :rules="rules">

      <el-form-item label="Name" prop="yourname">
        <el-input v-model="form.yourname" placeholder="Enter your name" clearable @blur="validateField('yourname')"></el-input>
      </el-form-item>

      <el-form-item label="Major" prop="major">
        <el-input v-model="form.major" placeholder="Enter your college major" clearable @blur="validateField('major')"></el-input>
      </el-form-item>

      <el-form-item label="StudentNumber" prop="studentnumber">
        <el-input v-model="form.studentnumber" placeholder="Enter your student number" clearable @blur="validateField('studentname')"></el-input>
      </el-form-item>
      
      <el-form-item label="Class" prop="class">
        <el-input v-model="form.classr" placeholder="Enter your class" clearable @blur="validateField('class')"></el-input>
      </el-form-item>

      <el-form-item label="Age" prop="age">
        <el-input v-model="form.age" placeholder="Enter your age" clearable @blur="validateField('age')"></el-input>
      </el-form-item>

      <el-form-item label="Contactway" prop="contactway">
        <el-input v-model="form.contactway" placeholder="Enter your contact way" clearable @blur="validateField('contactway')"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>

      <el-form-item>
        <el-cascader :options="options" clearable></el-cascader>
      </el-form-item>

  </div>
</template>

<script>
export default {
    name:"My",
    data(){
      return{
        form:{
          yourname:'',
          major:'',
          studentnumber:'',
          class:'',
          age:'',
          contactway:''

        },
        rules:{
        yourname: [{ required: true, message: 'Enter your name', trigger: 'blur' },],
        major: [{ required: true, message: 'Enter your major', trigger: 'blur' },],
        studentnumber: [{ required: true, message: 'Enter your student number', trigger: 'blur' },],
        class: [{ required: true, message: 'Enter your class', trigger: 'blur' },],
        age: [{ required: true, message: 'Enter your age', trigger: 'blur' },],
        contactway: [{ required: true, message: 'Enter your contact way', trigger: 'blur' },],
      },
       methods:{
      validateField(field) {
      console.log('chufa')
      this.$refs.form.validateField(field);
      },
      submitForm(){
        this.$refs.form.validate(valid=>{
          
        })
      }

    
    
       }
    }
}
}
</script>

<style>

</style>