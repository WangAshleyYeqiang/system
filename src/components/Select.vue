<template>
<div>
  <div>
    Course selection
  </div>
  
  <div class="">
    <el-checkbox-group v-model="checkboxGroup" size="small" disabled>
      <el-checkbox-button v-for="CourseType in category" :label="CourseType" :key="CourseType">{{CourseType}}</el-checkbox-button>
    </el-checkbox-group>
  </div>

  <div class="">
    Course number:
    <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
  </div>



</div>
</template>

<script>
 const courseOptions = ['Required course', 'Selective course']
 export default {
    name:"Select",
    data(){
      return{
        checkboxGroup: ['Required course'],
        category: courseOptions,
        
      }
    }
};
</script>

<style>

</style>