<template>
  <div>
    <div>
      <h1 style="text-align: center; font-size: 36px; font-weight: 700">
        {{ this.$store.state.userInfo.userName }}'s Timetable
      </h1>
    </div>

    <div class="main" style="width: 100%">
      <div class="" style="margin-top: -30px; width: 100%">
        <div>
          <el-row>
            <el-col :span="5">
              <el-button
                @click="weekchange(-1)"
                :disabled="zc <= 1 ? true : false"
                class="schdule-button"
                style="background-color: rgb(116, 116, 232)"
                ><i class="el-icon-back" style="color: white"></i
              ></el-button>
            </el-col>
            <el-col :span="14">
              <p style="margin-top: 15px">
                This current week is Week {{ zc }}.
              </p>
            </el-col>
            <el-col :span="5">
              <el-button
                @click="weekchange(1)"
                :disabled="zc >= 20 ? true : false"
                class="schdule-button"
                style="background-color: rgb(116, 116, 232)"
                ><i class="el-icon-right" style="color: white"></i
              ></el-button>
            </el-col>
          </el-row>
        </div>

        <el-table
          :data="timetable"
          :span-method="objectSpanMethod"
          border
          :header-cell-style="{
            background: '#d9e5fd',
            color: 'black',
            fontWeight: 1000,
          }"
          :cell-style="tableCellStyle"
          style="margin-top: 20px"
        >
          <el-table-column prop="sjd" label="Time" width="85" align="center">
          </el-table-column>
          <el-table-column prop="jc" label="Class" width="80" align="center">
          </el-table-column>
          <el-table-column prop="mon" label="MON" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.mon.title }}</h4>
              <div v-html="scope.row.mon.content"></div>
            </template>
          </el-table-column>
          <el-table-column prop="tue" label="TUE" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.tue.title }}</h4>
              <div v-html="scope.row.tue.content"></div>
            </template>
          </el-table-column>
          <el-table-column prop="wed" label="WED" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.wed.title }}</h4>
              <div v-html="scope.row.wed.content"></div>
            </template>
          </el-table-column>
          <el-table-column prop="thu" label="THU" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.thu.title }}</h4>
              <div v-html="scope.row.thu.content"></div>
            </template>
          </el-table-column>
          <el-table-column prop="fri" label="FRI" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.fri.title }}</h4>
              <div v-html="scope.row.fri.content"></div>
            </template>
          </el-table-column>
          <el-table-column prop="sat" label="SAT" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.sat.title }}</h4>
              <div v-html="scope.row.sat.content"></div>
            </template>
          </el-table-column>
          <el-table-column prop="sun" label="SUN" align="center">
            <template slot-scope="scope">
              <h4>{{ scope.row.sun.title }}</h4>
              <div v-html="scope.row.sun.content"></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import parseWeekDay from "./../utils/parseWeekDay";

export default {
  props: {
    // 下午节次数
    afternoonLength: {
      type: [String, Number],
      default: 4,
    },
    // 总节次
    length: {
      type: [String, Number],
      default: 11,
    },
    // 课表数据
    events: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
      zc: 1,
      // 课程表数据
      timetable: [],
      events1: [],
      hoverOrderArr: [],
      weeks: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    };
  },
  mounted() {
    this.loading = true;
    this.makeTimetable();
    setTimeout(() => {
      this.get_timetable();
      this.loading = false;
    }, 1000);
  },

  watch: {
    events: {
      handler(newVal, oldVal) {
        this.mergeData();
      },
      deep: true,
    },
  },
  created() {
    this.makeTimetable();
  },
  methods: {
    // 单元格添加背景色
    tableCellStyle(row) {
      if (row.row[row.column.property].title !== undefined) {
        return "background-color:rgb(53 87 220 / 80%);color: #fff; border-radius:10px";
      }
    },
    // 构造课程表完整数据
    makeTimetable() {
      this.timetable = [];
      for (let i = 0; i < this.length; i++) {
        let one = {
          sjd: "",
          jc: i + 1,
          mon: {},
          tue: {},
          wed: {},
          thu: {},
          fri: {},
          sat: {},
          sun: {},
        };
        if (i < 4) {
          one.sjd = "Morning";
        } else if (i > 3 && i < this.afternoonLength + 4) {
          one.sjd = "Afternoon";
        } else {
          one.sjd = "Evening";
        }
        this.timetable.push(one);
      }
    },
    mergeData() {
      console.log("mergeData in");
      console.log(this.zc, "zc");
      console.log(this.events1, "mergeDatea event");

      this.makeTimetable();
      // 合并数据
      if (this.events1.length > 0) {
        for (let i = 0; i < this.events1.length; i++) {
          // 获取星期几
          console.log(this.events1[i].zc, " ", this.zc);
          if (this.events1[i].zc + 1 == this.zc) {
            console.log(this.events1[i], "done");
            let week = this.weeks[this.events1[i].xq - 1];
            this.timetable[this.events1[i].start - 1][week] = this.events1[i];
          }
        }
      }
      console.log(this.timetable, "mergeData");
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex < 4) {
          if (rowIndex === 0) {
            return {
              rowspan: 4,
              colspan: 1,
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        } else if (rowIndex > 3 && rowIndex < 4 + this.afternoonLength) {
          if (rowIndex === 4) {
            return {
              rowspan: this.afternoonLength,
              colspan: 1,
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        } else {
          if (rowIndex === 4 + this.afternoonLength) {
            return {
              rowspan: this.length - 4 - this.afternoonLength,
              colspan: 1,
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        }
      }
      if (columnIndex === 2) {
        if (row.mon.title !== undefined) {
          return {
            rowspan: row.mon.end - row.mon.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
      if (columnIndex === 3) {
        if (row.tue.title !== undefined) {
          return {
            rowspan: row.tue.end - row.tue.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
      if (columnIndex === 4) {
        if (row.wed.title !== undefined) {
          return {
            rowspan: row.wed.end - row.wed.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
      if (columnIndex === 5) {
        if (row.thu.title !== undefined) {
          return {
            rowspan: row.thu.end - row.thu.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
      if (columnIndex === 6) {
        if (row.fri.title !== undefined) {
          return {
            rowspan: row.fri.end - row.fri.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
      if (columnIndex === 7) {
        if (row.sat.title !== undefined) {
          return {
            rowspan: row.sat.end - row.sat.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
      if (columnIndex === 8) {
        if (row.sun.title !== undefined) {
          return {
            rowspan: row.sun.end - row.sun.start + 1,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      }
    },
    weekchange(change) {
      this.zc = this.zc + change;
      // this.get_timetable()
      this.mergeData();
    },
    get_timetable() {
      console.log(this.events1);
      console.log("in");
      var events1 = [];
      var course = {
        zc: "", //周次
        xq: "", //星期
        title: "", //课程名称
        class: "", //课程类型
        content: "", //课程时间地点
        start: "", //开始节次
        end: "", //结束节次
      };

      var userSchdule = ""; //选课ID列表
      var courseInfo = ""; //所有课程-详细信息
      var courseSchdule = ""; //所有课程-课程表

      axios.get("http://localhost:8081/userSchedule/list").then((res) => {
        // 筛选出该学生课表
        userSchdule = res.data.filter(
          (val) => val.userID == this.$store.state.userInfo.userID
        );

        axios.get("http://localhost:8081/courseInfo/list").then((res) => {
          courseInfo = res.data;
          axios.get("http://localhost:8081/courseSchedule/list").then((res) => {
            courseSchdule = res.data;

            console.log(userSchdule, courseInfo, courseSchdule);
            for (var i = 0; i < userSchdule.length; i++) {
              var tempCourseInfo = "";
              var tempCourseSchdele = "";

              //取出课程基本信息
              tempCourseInfo = courseInfo.filter(
                (val) => val.courseID == userSchdule[i].courseID
              )[0];
              //取出课程课表信息
              tempCourseSchdele = courseSchdule.filter(
                (val) => val.courseID == userSchdule[i].courseID
              );

              for (var ii = 0; ii < tempCourseSchdele.length; ii++) {
                console.log(tempCourseSchdele[ii], ii);
                var tempCourse = {
                  zc: "", //周次
                  xq: "", //星期
                  title: "", //课程名称
                  class: "", //课程类型
                  content: "", //课程时间地点
                  start: "", //开始节次
                  end: "", //结束节次
                };

                tempCourse.zc = tempCourseSchdele[ii].courseWeek - 1;
                tempCourse.xq = tempCourseSchdele[ii].courseDay;
                tempCourse.title = tempCourseInfo.courseName;
                tempCourse.class = tempCourseInfo.courseType;
                tempCourse.content = `${tempCourseInfo.courseTecher} ${tempCourseSchdele[ii].courseRoom}`;
                tempCourse.start = tempCourseSchdele[ii].courseStartTime;
                tempCourse.end = tempCourseSchdele[ii].courseEndTime;

                events1.push(tempCourse);
              }

              this.events1 = events1;
            }

            console.log(events1, "getTimetable");
            this.mergeData();
          });
        });
      });
    },
  },
};
</script>
<style>
.schdule-button {
  width: 60px;
}
.main {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}
</style>