<template>
  <div>
    <h1 class="text12">Course selection</h1>

    <div style="">
      <el-row>
        <el-col :span="10">
          <div class="innerbox">
            <h1 class="textbox">Type:</h1>
            <el-checkbox-group class="checkgroup" v-model="checkboxGroup1" size="small">
              <el-checkbox-button style="" v-for="type in types" :label="type" :key="type">{{ type }}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="innerbox1">
            <h1 class="textbox1">Course ID:</h1>
            <el-input style="width: 200px;position: relative; left: -45px;top: -25px;" v-model="input"
              placeholder="Enter the course number"></el-input>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="innerbox1">
            <h1 class="textbox1">Tearcher:</h1>
            <el-input style="width: 200px;position: relative; left: -50px;top: -28px;" v-model="input"
              placeholder="Enter the teacher's name"></el-input>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 40px;">
      <el-row>
        <el-col :span="6" :pull="1">
        <el-checkbox v-model="checked1" label="Filter full courses" border size="small"></el-checkbox>
        </el-col>
        <el-col :span="6" :pull="2">
          <el-checkbox  v-model="checked2" label="Filter conflict courses" border size="small"></el-checkbox>
        </el-col>
        <el-col :span="6" :pull="2">
          <el-checkbox v-model="checked3" label="Filter restricted courses" border size="small"></el-checkbox>
        </el-col>
        <el-col :span="3" :pull="1">
          <el-button style="background-color: rgba(53,87,220,1); color: white; width: 150px;">Search</el-button>
        </el-col>
        <el-col :span="3" :pull="1">
          <el-button style="background-color: rgba(53,87,220,1); color:white; width:150px;">Select</el-button>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 40px;">
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="courseID" label="Course ID" width="">
        </el-table-column>
        <el-table-column prop="name" label="Course Name" width="">
        </el-table-column>
        <el-table-column prop="classType" label="Class Type" width="">
        </el-table-column>
        <el-table-column prop="teacher" label="Teacher" width="">
        </el-table-column>
        <el-table-column prop="classSchedule " label="Class Schedule" width="">
        </el-table-column>
        <el-table-column prop="status" label="Status" width="">
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="90">
      </el-pagination>
    </div>

    <h1 class="text13">Selected Course</h1>

    <div style="margin-top: 30px;">
      <el-table :data="tableData2" style="width: 100%" max-height="250">

        <el-table-column fixed prop="courseID" label="Course ID" width="">
        </el-table-column>

        <el-table-column prop="name" label="Course Name" width="">
        </el-table-column>

        <el-table-column prop="classType" label="Class Type" width="">
        </el-table-column>

        <el-table-column prop="teacher" label="Teacher" width="">
        </el-table-column>

        <el-table-column prop="classSchedule" label="Class Schedule" width="">
        </el-table-column>

        <el-table-column prop="status" label="Status" width="">
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData2)" type="text" size="small">
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
  name: "Select",
  data() {
    return {
      checkboxGroup1: ['Required Course'],
      types: courseOptions,
      checked1: true,
      checked2: false,
      checked3: false,
      tableData: [{
        courseID: '230342545',
        name: 'Web',
        classType: 'required course',
        teacher: 'Asit',
        classSchedule: 'MONDAY',
        status: 'choose'
      }],
      tableData2: [{
        courseID: '230342545',
        name: 'Web',
        classType: 'required course',
        teacher: 'Asit',
        classSchedule: 'MONDAY',
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
.pagination{
  margin-top: 10px;
  margin-left:900px;
}
.text12 {
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  background-color: rgba(53, 87, 220, 1);
  color: black;
}
.text13{
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  background-color: rgba(53, 87, 220, 1);
  color: black;
  margin-top: 30px;
}
.checkgroup {
  position: relative;
  top: -22px;
  left: 10px;
}

.innerbox {

  width: 400px;
  height: 30px;
  position: relative;
  top: 30px;
}

.textbox {

  position: relative;
  left: -140px;
}

.innerbox1 {

  width: 400px;
  height: 30px;
  position: relative;
  top: 30px;
}

.textbox1 {

  position: relative;
  left: -200px;
}
</style>