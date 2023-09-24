<template>
  <div>
    <h1 class="text12">Course selection</h1>

    <div style="margin-top: 30px;">
      <el-row>
        <el-col :span="8">
          <div>
            <el-row>
              <el-col :span="4">
                <h1>Type:</h1>
              </el-col>
              <el-col :span="20" :pull="3" style="margin-top: -5px;">
                <el-checkbox-group v-model="checkboxGroup1" size="small">
                  <el-checkbox-button v-for="type in types" :label="type" :key="type">{{ type
                  }}</el-checkbox-button>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="8">
          <div>
            <el-row>
              <el-col :span="4">
                <h1>Course&nbsp;&nbsp;ID:</h1>
              </el-col>
              <el-col :span="20" :pull="3" style="margin-top: -7px;">
                <el-input size="small" v-model="input" placeholder="Enter the course number"
                  style="width: 200px"></el-input>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="8">
          <div>
            <el-row>
              <el-col :span="4">
                <h1>Tearcher:</h1>
              </el-col>
              <el-col :span="20" :pull="3" style="margin-top: -7px;">
                <el-input size="small" v-model="input" placeholder="Enter the teacher's name"
                  style="width: 200px;"></el-input>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 30px;">
      <el-row>
        <el-col :span="4" :pull="1" style="margin-left: -15px;">
          <h1>Fliter:</h1>
        </el-col>
        <el-col :span="4" :pull="3" style="margin-top: -6px;">
          <el-checkbox v-model="checked1" label="Filter full courses" border size="small"></el-checkbox>
        </el-col>
        <el-col :span="4" :pull="3" style="margin-top: -6px;">
          <el-checkbox v-model="checked2" label="Filter conflict courses" border size="small"></el-checkbox>
        </el-col>
        <el-col :span="4" :pull="3" style="margin-top: -6px;">
          <el-checkbox v-model="checked3" label="Filter restricted courses" border size="small"></el-checkbox>
        </el-col>
        <el-col :span="8" style="margin-top: -8px;">
          <el-button
            style="background-color: rgba(53,87,220,1); color: white; width: 150px; height: 35px; margin-right: -45px;">Search</el-button>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 35px;">
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
        <el-table-column prop="num" label="Num" width="">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData1)" type="text" size="small" disabled>
              Select
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="90" style="margin-left: -15px;">
      </el-pagination>
    </div>

    <h1 class="text13" style="margin-top: -10px;">Selected Course</h1>

    <div style="margin-top: 20px;">
      <el-table :data="tableData2" style="width: 100%" max-height="200">

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

        <el-table-column prop="brief" label="Brief" width="" >
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData2)" type="text" size="small">
              Remove
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
        num:'30/30',
        status: 'choose'
      }],
      tableData2: [{
        courseID: '230342545',
        name: 'Web',
        classType: 'required course',
        teacher: 'Asit',
        classSchedule: 'MONDAY',
        brief: 'xxxx'
      }]
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
.pagination {
  margin-top: 10px;
  margin-left: 900px;
}

.text12 {
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  /* background-color: rgba(53, 87, 220, 1); */
  color: black;
}

.text13 {
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  /* background-color: rgba(53, 87, 220, 1); */
  color: black;
  margin-top: 30px;
}
</style>