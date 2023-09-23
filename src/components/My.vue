<template>
  <div>
    <div class="Personal_imformation"><H1>Personal imformation</H1>
    </div>

      <div style=" padding: 5px">
         <el-form ref="form" :model="form" :rules="rules">
         <el-descriptions class="margin-top" title="Personal imformation" :column="3" :size="size" border>
<br>
    <template slot="extra">
    
    </template>
    <el-descriptions-item>
      <template slot="label">
        UserName
      </template>
      Catherine
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">

        UserID
      </template>
      000001
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">

        Your_Type
      </template>
      Student
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
      
        Phone
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
     
        City
      </template>
      海口市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
     
        备注
      </template>
      <el-tag size="small">海南大学</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
       
        School
      </template>
      <!-- 18100000000 -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">

        Location
      </template>
      海南省海口市美兰区人民大道 58号 
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
      Last Login Time
      </template>
      
    </el-descriptions-item>
  </el-descriptions>

          
        </el-form>
        </div>
<br>
<br>
<br>
<br>
<br>
  <el-descriptions title="Certificate" direction="vertical" :column="4"> </el-descriptions>
<br>
  <div>
        <el-table
           :data="tableData"
           style="width: 100%">
          <el-table-column
            prop="Type"
            label="Type"
            width="180">
       </el-table-column>
        <el-table-column
           prop="Grade"
           label="Grade"
           width="180">
        </el-table-column>
       <el-table-column
            prop="PRIZE"
            label="PRIZE">
        </el-table-column>
        </el-table>
  </div>
<br> 
  <!-- <el-descriptions title="Majors" direction="vertical" :column="4"> </el-descriptions>
  <div style="border: 1px solid rgb(28, 104, 219)">
        <el-table
           :data="Majors"
           style="width: 100%">
          <el-table-column
            prop="Type"
            label=""
            width="180">
       </el-table-column>
        <el-table-column
           prop="Grade"
           label=""
           width="180">
        </el-table-column>
       <el-table-column
            prop="PRIZE"
            label="">
        </el-table-column>
        </el-table>
  </div> -->
<br>
      <el-button type="danger" plain @click="signout_onClick">Sign out</el-button>

    
</div>
</template>
<script>
export default {
  name: "My",
  data() {
    return { 
      tableData: [{
        Type: 'CET4',
        Grade: '610 POINTS',
        PRIZE: 'National Second -Class Scholarship'
      }, {
        Type: 'CET6',
        Grade: '578 POINTS',
        PRIZE: 'Third Prize in Group Programming Ladder Tournament'
      }, 
      ]
     
    }
  },
      
    
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
 
  .Personal_imformation {

 
  /**/ width: 1200px;
  height: 90px;
  
  font-weight: 700px; 
  font-size: 40px;
  color: rgb(47, 85, 209);
  margin-top: 30px;
}
</style>