<template>
  <div v-loading="loading">
    <h1 class="text12">Course selection</h1>

    <div style="margin-top: 30px">
      <el-row>
        <el-col :span="8">
          <div>
            <el-row>
              <el-col :span="4">
                <h1>Type:</h1>
              </el-col>
              <el-col :span="20" :pull="3" style="margin-top: -5px">
                <el-checkbox-group v-model="checkboxGroup1" size="small">
                  <el-checkbox-button
                    v-for="type in types"
                    :label="type"
                    :key="type"
                    >{{ type }}</el-checkbox-button
                  >
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
              <el-col :span="20" :pull="3" style="margin-top: -7px">
                <el-input
                  size="small"
                  v-model="input1"
                  placeholder="Enter the course number"
                  style="width: 200px"
                ></el-input>
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
              <el-col :span="20" :pull="3" style="margin-top: -7px">
                <el-input
                  size="small"
                  v-model="input2"
                  placeholder="Enter the teacher's name"
                  style="width: 200px"
                ></el-input>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 30px">
      <el-row>
        <el-col :span="4" :pull="1" style="margin-left: -15px">
          <h1>Filter:</h1>
        </el-col>
        <el-col :span="4" :pull="3" style="margin-top: -6px">
          <el-checkbox
            v-model="checked1"
            label="Filter full courses"
            border
            size="small"
          ></el-checkbox>
        </el-col>
        <el-col :span="4" :pull="3" style="margin-top: -6px">
          <el-checkbox
            v-model="checked2"
            label="Filter conflict courses"
            border
            size="small"
          ></el-checkbox>
        </el-col>
        <el-col :span="4" :pull="3" style="margin-top: -6px">
          <el-checkbox
            v-model="checked3"
            label="Filter restricted courses"
            border
            size="small"
          ></el-checkbox>
        </el-col>
        <el-col :span="8" style="margin-top: -8px">
          <el-button
            @click="filter"
            style="
              background-color: rgba(53, 87, 220, 1);
              color: white;
              width: 150px;
              height: 35px;
              margin-right: -45px;
            "
            >Search</el-button
          >
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 35px">
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="courseID" label="Course ID" width="">
        </el-table-column>
        <el-table-column prop="name" label="Course Name" width="">
        </el-table-column>
        <el-table-column prop="classType" label="Class Type" width="">
        </el-table-column>
        <el-table-column prop="teacher" label="Teacher" width="">
        </el-table-column>
        <el-table-column prop="classSchedule" label="Class Schedule" width="">
          <template slot-scope="scope">
            <div v-html="scope.row.classSchedule.replace(/\n/g, '<br>')"></div>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="Num" width=""> </el-table-column>
        <el-table-column fixed="right" label="Operation" width="">
          <template slot-scope="scope">
            <el-button
              @click="select_onClick(scope.row.courseID)"
              type="text"
              size="small"
            >
              Select
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <!-- <el-pagination background layout="prev, pager, next" :total="90" style="margin-left: -15px;">
      </el-pagination> -->
    </div>

    <h1 class="text13" style="margin-top: -10px">Selected Course</h1>

    <div style="margin-top: 20px">
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
          <template slot-scope="scope">
            <div v-html="scope.row.classSchedule.replace(/\n/g, '<br>')"></div>
          </template>
        </el-table-column>

        <el-table-column prop="brief" label="Brief" width=""> </el-table-column>

        <el-table-column fixed="right" label="Operation" width="">
          <template slot-scope="scope">
            <el-button
              @click="remove_onClick(scope.row.courseID)"
              type="text"
              size="small"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import axios from "axios";
const customAxios = axios.create({
  baseURL: "http://localhost:8081",
});

const courseOptions = ["Required Course", "Selective Course"];
export default {
  name: "Select",
  data() {
    return {
      loading: null,
      checkboxGroup1: [],
      types: courseOptions,
      input1: "",
      input2: "",
      checked1: true,
      checked2: false,
      checked3: false,
      tableData: [],
      tableData2: [],
    };
  },
  methods: {
    filter() {
      this.get_tableData1();
      this.get_tableData2();
      console.log();
      setTimeout(() => {
        var tabledataf1 = this.tableData;
        if (this.checkboxGroup1.length == 1) {
          if (this.checkboxGroup1[0] == "Required Course") {
            tabledataf1 = this.tableData.filter(
              (val) => val.classType == "Required"
            );
          }
          if (this.checkboxGroup1[0] == "Selective Course") {
            tabledataf1 = this.tableData.filter(
              (val) => val.classType == "Selective"
            );
          }
        }
        if (this.input1 != "") {
          tabledataf1 = this.tableData.filter(
            (val) => val.courseID == this.input1
          );
        }
        if (this.input2 != "") {
          tabledataf1 = this.tableData.filter(
            (val) => val.teacher == this.input2
          );
        }
        this.tableData = tabledataf1;
      }, 200);
    },

    deleteRow(index, rows) {
      rows.splice(index, 1);
    },

    getWeekdayName(day) {
      const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      return weekdays[day - 1];
    },

    summarizeSchedule(schedule) {
      let summarizedSchedule = [];
      let currentSchedule = schedule[0];
      for (let i = 1; i < schedule.length; i++) {
        console.log(currentSchedule, schedule[i]);
        if (
          // currentSchedule.courseWeek === schedule[i].courseWeek &&
          currentSchedule.courseDay === schedule[i].courseDay &&
          currentSchedule.courseStartTime === schedule[i].courseStartTime &&
          currentSchedule.courseEndTime === schedule[i].courseEndTime
        ) {
          continue;
        } else {
          const mergedSchedule = {
            week: currentSchedule.courseWeek,
            day: this.getWeekdayName(currentSchedule.courseDay),
            start: currentSchedule.courseStartTime,
            end: currentSchedule.courseEndTime,
            lastWeek: schedule[i - 1].courseWeek, // 上次出现的周数
          };
          summarizedSchedule.push(mergedSchedule);
          currentSchedule = schedule[i];
        }
      }

      if (currentSchedule) {
        const mergedSchedule = {
          week: currentSchedule.courseWeek,
          day: this.getWeekdayName(currentSchedule.courseDay),
          start: currentSchedule.courseStartTime,
          end: currentSchedule.courseEndTime,
          lastWeek: schedule[schedule.length - 1].courseWeek, // 上次出现的周数
        };
        summarizedSchedule.push(mergedSchedule);
      }
      return summarizedSchedule;
    },

    displaySummarizedSchedule(summarizedSchedule) {
      let displayString = "";
      for (let i = 0; i < summarizedSchedule.length; i++) {
        let entry = summarizedSchedule[i];
        if (entry.week === entry.lastWeek) {
          displayString += `Week ${entry.week} ${entry.day} ${entry.start}-${entry.end}`;
        } else {
          displayString += `Week ${entry.week}-${entry.lastWeek} ${entry.day} ${entry.start}-${entry.end}`;
        }
        if (i < summarizedSchedule.length - 1) {
          displayString += "\n";
        }
      }
      return displayString;
    },

    get_tableData1() {
      this.tableData = [];
      var tableData = [];
      var courseInfoList = "";
      var courseScheduleList = "";
      var userScheduleList = "";
      customAxios.get("/courseInfo/list").then((res) => {
        courseInfoList = res.data;

        customAxios
          .get("/userSchedule/list")
          .then((res) => {
            userScheduleList = res.data;
          })
          .then((res) => {
            customAxios.get("/courseSchedule/list").then((res) => {
              courseScheduleList = res.data;

              for (var i = 0; i < courseInfoList.length; i++) {
                var tempCourse = {
                  courseID: "",
                  name: "",
                  classType: "",
                  teacher: "",
                  classSchedule: "",
                  num: "",
                  status: "",
                };
                tempCourse.courseID = courseInfoList[i].courseID;
                tempCourse.name = courseInfoList[i].courseName;
                tempCourse.classType = courseInfoList[i].courseType;
                tempCourse.teacher = courseInfoList[i].courseTecher;
                tempCourse.num =
                  userScheduleList
                    .filter((val) => val.courseID == courseInfoList[i].courseID)
                    .length.toString() +
                  " / " +
                  courseInfoList[i].courseNum;

                var schedule = courseScheduleList.filter(
                  (val) => val.courseID == courseInfoList[i].courseID
                );
                const summarizedSchedule = this.summarizeSchedule(schedule);
                console.log("11", summarizedSchedule);
                tempCourse.classSchedule =
                  this.displaySummarizedSchedule(summarizedSchedule);

                console.log(
                  "tempCourse.classSchedule" + tempCourse.classSchedule
                );
                console.log(tempCourse);

                tableData.push(tempCourse);
              }

              this.tableData = tableData;
              console.log("tableData=", this.tableData);
            });
          });
      });
    },

    get_tableData2() {
      this.tableData2 = [];
      var tableData = [];
      var courseInfoList = "";
      var courseScheduleList = "";
      var userScheduleList = "";
      customAxios.get("/courseInfo/list").then((res) => {
        courseInfoList = res.data;

        customAxios
          .get("/userSchedule/list")
          .then((res) => {
            userScheduleList = res.data;
          })
          .then((res) => {
            customAxios.get("/courseSchedule/list").then((res) => {
              courseScheduleList = res.data;

              for (var i = 0; i < userScheduleList.length; i++) {
                var tempCourse = {
                  courseID: "",
                  name: "",
                  classType: "",
                  teacher: "",
                  classSchedule: "",
                  brief: "",
                  status: "",
                };
                var tempCourseInfo = courseInfoList.filter(
                  (val) => val.courseID == userScheduleList[i].courseID
                )[0];

                tempCourse.courseID = tempCourseInfo.courseID;
                tempCourse.name = tempCourseInfo.courseName;
                tempCourse.classType = tempCourseInfo.courseType;
                tempCourse.teacher = tempCourseInfo.courseTecher;
                tempCourse.brief = tempCourseInfo.courseBrief;

                var schedule = courseScheduleList.filter(
                  (val) => val.courseID == tempCourseInfo.courseID
                );
                const summarizedSchedule = this.summarizeSchedule(schedule);
                console.log("11", summarizedSchedule);
                tempCourse.classSchedule =
                  this.displaySummarizedSchedule(summarizedSchedule);

                console.log(
                  "tempCourse.classSchedule" + tempCourse.classSchedule
                );
                console.log(tempCourse);

                tableData.push(tempCourse);
              }

              this.tableData2 = tableData;
              console.log("tableData=", this.tableData);
            });
          });
      });
    },

    checkTimeConflict(timeSlotA, timeSlotB) {
      console.log(timeSlotA, timeSlotB);
      // 判断两个时间段是否存在重叠
      if (
        timeSlotA.courseWeek === timeSlotB.courseWeek &&
        timeSlotA.courseDay === timeSlotB.courseDay &&
        ((timeSlotA.courseStartTime >= timeSlotB.courseStartTime &&
          timeSlotA.courseStartTime < timeSlotB.courseEndTime) ||
          (timeSlotA.courseEndTime > timeSlotB.courseStartTime &&
            timeSlotA.courseEndTime <= timeSlotB.courseEndTime) ||
          (timeSlotB.courseStartTime >= timeSlotA.courseStartTime &&
            timeSlotB.courseStartTime < timeSlotA.courseEndTime) ||
          (timeSlotB.courseEndTime > timeSlotA.courseStartTime &&
            timeSlotB.courseEndTime <= timeSlotA.courseEndTime))
      ) {
        return true; // 存在时间上的重叠，返回 true
      }

      return false; // 不存在重叠，返回 false
    },

    checkScheduleConflict(schedule1, schedule2) {
      for (const timeSlotA of schedule1) {
        for (const timeSlotB of schedule2) {
          if (this.checkTimeConflict(timeSlotA, timeSlotB)) {
            return true; // 存在时间上的冲突，返回 true
          }
        }
      }

      return false; // 没有冲突，返回 false
    },

    select_onClick1(courseID) {
      console.log(courseID);
      var selectSchedule = [];
      var selectCourseInfo = [];

      var courseInfoList = "";
      var courseScheduleList = "";
      var userScheduleList = "";

      customAxios.get("/userSchedule/list").then((res) => {
        userScheduleList = res.data.filter(
          (val) => val.userID == this.$store.state.userInfo.userID
        );
        customAxios.get("courseSchedule/list").then((res) => {
          courseScheduleList = res.data;
          customAxios.get("courseInfo/list").then((res) => {
            courseInfoList = res.data;

            for (var i = 0; i < userScheduleList.length; i++) {
              selectSchedule = selectSchedule.concat(
                courseScheduleList.filter(
                  (val) => val.courseID == userScheduleList[i].courseID
                )
              );
              // selectSchedule.push(courseScheduleList.filter(val=>val.courseID==userScheduleList[i].courseID))
            }

            var entryCourse = courseScheduleList.filter(
              (val) => val.courseID == courseID
            );

            var result = this.checkScheduleConflict(
              selectSchedule,
              entryCourse
            );

            console.log(selectSchedule);

            if (result) {
              this.$message({
                message: "Exist confilt course! Can not select this course.",
                type: "error",
              });
            } else {
              var entryCourseInfo = {
                id: "",
                userID: this.$store.state.userInfo.userID,
                courseID: courseID,
                selectTime: new Date(),
                selectPrivilege: this.$store.state.userInfo.userPrivilege,
              };

              customAxios.post("/userSchedule/add", entryCourseInfo);
              this.get_tableData1();
              this.get_tableData2();
              this.$message({
                message: "Successfully select course by CourseID=" + courseID,
                type: "success",
              });
            }
          });
        });
      });
    },

    select_onClick(courseID) {
      if (this.$store.state.userInfo.userPrivilege < 3) {
        this.loading = Loading.service();
        setTimeout(() => {
          if (this.loading) {
            this.loading.close();
          }
          this.select_onClick1(courseID);
        }, 6000);
      } else {
        this.select_onClick1(courseID);
      }
    },

    remove_onClick(courseID) {
      console.log("remove", courseID);
      var id = "";

      customAxios.get("/userSchedule/list").then((res) => {
        id = res.data.filter((val) => val.courseID == courseID)[0].id;
        // console.log(res.data)
        customAxios
          .get("/userSchedule/deleteUserScheduleByID?id=" + id)
          .then((res) => {
            console.log("res", res);
            this.get_tableData1();
            this.get_tableData2();

            this.$message({
              message: "Successfully remove course by CourseID=" + courseID,
              type: "success",
            });
          });
      });
    },
  },
  mounted() {
    this.get_tableData1();
    this.get_tableData2();
  },
};
</script>

<style>
.pagination {
  margin-top: 10px;
  margin-left: 900px;
  height: 50px;
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