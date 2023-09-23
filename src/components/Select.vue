<template>
<div>
    <div style="">
      General elective category:
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox-button v-for="type in types" :label="type" :key="type">{{type}}</el-checkbox-button>
    </el-checkbox-group>
  </div>

  <div>
    Course Number:
    <el-input v-model="input" placeholder="Enter the course number"></el-input>
  </div>

  <div>
    Tearcher:
    <el-input v-model="input" placeholder="Enter the teacher's name"></el-input>
  </div>

  <div>
    
      <el-checkbox v-model="checked1" label="Filter full courses" border size="small"></el-checkbox>
      <el-checkbox v-model="checked2" label="Filter conflict courses" border size="small"></el-checkbox>
      <el-checkbox v-model="checked3" label="Filter restricted courses" border size="small"></el-checkbox>
   
  </div>


  <div>
    <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250">

    <el-table-column
      fixed
      prop="courseID"
      label="Course ID"
      width="">
    </el-table-column>

    <el-table-column
      prop="name"
      label="Course Name"
      width="">
    </el-table-column>

    <el-table-column
      prop="classType"
      label="Class Type"
      width="">
    </el-table-column>

    <el-table-column
      prop="teacher"
      label="Teacher"
      width="">
    </el-table-column>

    <el-table-column
      prop="classSchedule "
      label="Class Schedule"
      width="">
    </el-table-column>
  
    <el-table-column
      prop="status"
      label="Status"
      width="">
    </el-table-column>
     
  </el-table>
  </div>

  <div>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="90">
</el-pagination>
  </div>

  <div>Selected Course</div>

  <div>
    <el-table
    :data="tableData2"
    style="width: 100%"
    max-height="250">

    <el-table-column
      fixed
      prop="courseID"
      label="Course ID"
      width="">
    </el-table-column>

    <el-table-column
      prop="name"
      label="Course Name"
      width="">
    </el-table-column>

    <el-table-column
      prop="classType"
      label="Class Type"
      width="">
    </el-table-column>

    <el-table-column
      prop="teacher"
      label="Teacher"
      width="">
    </el-table-column>

    <el-table-column
      prop="classSchedule"
      label="Class Schedule"
      width="">
    </el-table-column>
    
    <el-table-column
      prop="status"
      label="Status"
      width="">
    </el-table-column>

     <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData2)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>



</div>
  
</template>

<script>
 const courseOptions = ['Required Course', 'Selective Course'];
 export default {
    name:"Select",
    data(){
      return{
        checkboxGroup1: ['Required Course'],
        types:courseOptions,
        checked1:true,
        checked2:false,
        checked3:false,
        tableData: [{
          courseID: '230342545',
          name: 'Web',
          classType:'required course',
          teacher: 'Asit',
          classSchedule: 'MONDAY',
          status: 'choose'
        },],
        tableData2: [{
          courseID: '230342545',
          name: 'Web',
          classType:'required course',
          teacher: 'Asit',
          classSchedule : 'MONDAY',
          status: 'choose'
        },]
      };
    },
     methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    
    
}
</script>

<style>

</style>