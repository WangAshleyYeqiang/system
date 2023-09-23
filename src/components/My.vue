<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules">
      <el-descriptions title="Personal information" direction="vertical" :column="4" label-class-name="my-label" border>
      <el-descriptions-item label="Name">Catherine</el-descriptions-item>
      <el-descriptions-item label="Age">21</el-descriptions-item>
    <el-descriptions-item label="Student Number">20213003451</el-descriptions-item>
    <el-descriptions-item label="Gender">Female</el-descriptions-item>
    <el-descriptions-item label="Native place">Hainan</el-descriptions-item>
    <el-descriptions-item label="Nationality">Han</el-descriptions-item>
  <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">海南学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址"> 海南省海口市美兰区人民大道 58号 </el-descriptions-item>
</el-descriptions>

<template slot="extra">
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>

</template>
        <el-form-item>
        <el-cascader :options="options" clearable></el-cascader>
      </el-form-item>

    </el-form>
<div>


  
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    111
  <!-- <el-descriptions class="margin-top" title="Certificate" :column="3" direction="vertical" label-class-name="my-label">
  <el-descriptions-item label="Type">CET4</el-descriptions-item>
  <el-descriptions-item label="Grade">610 POINTS</el-descriptions-item>
  <el-descriptions-item label="PRIZE">National Second -Class Scholarship</el-descriptions-item>


  <el-descriptions-item >CET6</el-descriptions-item>
  <el-descriptions-item >610 POINTS</el-descriptions-item>
</el-descriptions> -->

<!-- <el-descriptioyy -->
</div>

    <el-button type="danger" plain @click="signout_onClick">Sign out</el-button>
  </div>
</template>

<script>
export default {
  name: "My",
  
      
    
  methods:{
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
    },
      data() {
    return { 
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
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