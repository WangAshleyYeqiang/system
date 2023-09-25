<template>
  <div>

    <div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="2" style="width:25%"  @click="router_onClick('/home/my')"><i class="el-icon-user"></i><span slot="title"
            class="el-menu-item.is-active text11">Personal information</span></el-menu-item>
        <el-menu-item index="3" style="width:25%"  @click="router_onClick('/home/select')"><i class="el-icon-discount"></i><span slot="title"
            class="el-menu-item.is-active text11" >Course selection</span></el-menu-item>
        <el-menu-item index="4" style="width:25%"  @click="router_onClick('/home/schdule')"><i class="el-icon-notebook-2"></i><span slot="title"
            class="el-menu-item.is-active text11">School timetable</span></el-menu-item>
        <el-menu-item index="5" style="width:25%"  @click="router_onClick('/home/serive')"><i class="el-icon-shopping-cart-1"></i><span slot="title"
            class="el-menu-item.is-active text11">Upgrade serive</span></el-menu-item>
      </el-menu>
    </div>

    <div>
      <h1 class="text10">Schdule</h1>
      <el-row>
        <el-col :span="13" style="display: flex; justify-content: start; margin-top: 10px;">
          <el-table :data="tableData" stripe style="width: 20%;">
            <el-table-column prop="CourseID" label="Course ID">
            </el-table-column>
            <el-table-column prop="Subject" label="Subject">
            </el-table-column>
            <el-table-column prop="Date" label="Date">
            </el-table-column>
            <el-table-column prop="Teacher" label="Teacher">
            </el-table-column>
            <el-table-column prop="Type" label="Type">
            </el-table-column>
          </el-table>
        </el-col>

        <el-col :span="11" :pull="1" style="display: flex; justify-content: end;">
          <el-calendar style="width: 90%;">
            <template slot="dateCell" slot-scope="{ date,data}">
              <p :class="data.isSelected ? 'is-selected' : ''">
                {{date.getDate() }} {{ data.isSelected ? '✔️' : '' }}
              </p>
            </template>
          </el-calendar>
        </el-col>
      </el-row>
    </div>




  </div>
</template>

<script>
import axios from "axios"
const customAxios = axios.create({
  baseURL: 'http://localhost:8081'
})
export default {
  data() {
    return {
      tableData: [{
        CourseID:'001',
        Subject: 'Java',
        Date: '2004.02.02',
        Teacher: 'Jason',
        Type: 'Required',
      }],
    }
  },
  name: "Hall",
  methods: {
    get_tableData1(){
      this.tableData=[]
      var tableData = []
      var courseInfoList = ''
      var courseScheduleList = ''
      var userScheduleList = ''
      customAxios.get('/courseInfo/list').then(res=>{
        courseInfoList=res.data

        customAxios.get('/userSchedule/list').then(res=>{
          userScheduleList=res.data
        }).then(res=>{

          customAxios.get('/courseSchedule/list').then(res=>{
            courseScheduleList=res.data


            for(var i=0;i<courseInfoList.length;i++){
            var tempCourse={
              courseID:'',
              name:'',
              classType:'',
              teacher:'',
              classSchedule:'',
              num:'',
              status:'',
            }
            tempCourse.courseID=courseInfoList[i].courseID
            tempCourse.name=courseInfoList[i].courseName
            tempCourse.classType=courseInfoList[i].courseType
            tempCourse.teacher=courseInfoList[i].courseTecher
            tempCourse.num=(userScheduleList.filter(val=>val.courseID==courseInfoList[i].courseID).length).toString()+' / '+courseInfoList[i].courseNum
            
            var schedule = courseScheduleList.filter(val=>val.courseID==courseInfoList[i].courseID)
            const summarizedSchedule = this.summarizeSchedule(schedule);
            console.log("11",summarizedSchedule)
            tempCourse.classSchedule = this.displaySummarizedSchedule(summarizedSchedule);

            console.log('tempCourse.classSchedule'+tempCourse.classSchedule)
            console.log(tempCourse)

            tableData.push(tempCourse)
          }

          this.tableData=tableData
          console.log('tableData=',this.tableData)
          })
        })
      })
    },
    router_onClick(path){
    //console.log(this.$router)

    if (path==this.$route.path){
      this.$message({
                  message: "You already at this page!",
                  type: "warning",
                });

      return
    }
  console.log(path);
  this.$router.push(path)
  
  },
  },
  mounted() {
    this.get_tableData1()
    
  }, 
}
</script>

<style>
.text10 {
  margin-top: 40px;
  margin-left: -1210px;
}
.text11{
  font-size: 24px;
  font-weight:150;
}
.is-selected {
  color: #1989FA;
}
</style>