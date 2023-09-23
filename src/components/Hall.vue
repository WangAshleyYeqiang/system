<template>
  <div>

    <div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="2" style="width:25%"><i class="el-icon-user"></i><span slot="title"
            class="el-menu-item.is-active text11">Personal information</span></el-menu-item>
        <el-menu-item index="3" style="width:25%"><i class="el-icon-discount"></i><span slot="title"
            class="el-menu-item.is-active text11">Course selection</span></el-menu-item>
        <el-menu-item index="4" style="width:25%"><i class="el-icon-notebook-2"></i><span slot="title"
            class="el-menu-item.is-active text11">School timetable</span></el-menu-item>
        <el-menu-item index="5" style="width:25%"><i class="el-icon-shopping-cart-1"></i><span slot="title"
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
  name: "Hall"
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