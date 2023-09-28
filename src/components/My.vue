<template>
  <div>
    <div class="Personal_imformation"><H1>Personal imformation</H1></div>

    <div style="padding: 5px">
      <el-form ref="form" :model="form" :rules="rules">
        <el-descriptions
          class="margin-top"
          title="Personal imformation"
          :column="3"
          :size="size"
          border
        >
          <br />
          <template slot="extra"> </template>
          <el-descriptions-item>
            <template slot="label"> Name </template>
            {{ $store.state.userInfo.userName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> UserID </template>
            {{ $store.state.userInfo.userID }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Type </template>
            {{ $store.state.userInfo.userType }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Phone </template>
            {{ $store.state.userInfo.userPhone }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Gender </template>
            {{ $store.state.userInfo.userGender }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> School </template>
            <el-tag size="small">{{ $store.state.userInfo.userSchool }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label"> Last Login Time </template>
            {{ standardTime1 }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Create Time </template>
            {{ standardTime2 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-form>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <el-descriptions title="Certificate" direction="vertical" :column="4">
    </el-descriptions>
    <br />
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Type" label="Type" width="180">
        </el-table-column>
        <el-table-column prop="Grade" label="Grade" width="180">
        </el-table-column>
        <el-table-column prop="Time" label="Time"> </el-table-column>
      </el-table>
    </div>
    <br />
    <br />
    <el-button type="danger" plain @click="signout_onClick">Sign out</el-button>
  </div>
</template>





<script>
export default {
  name: "My",
  data() {
    return {
      tableData: [
        {
          Type: "CET4",
          Grade: "610 POINTS",
          Time: "June 17 of the 22-23 school year",
        },
        {
          Type: "CET6",
          Grade: "578 POINTS",
          Time: "December 3 of the 23-24 school year",
        },
      ],
      dbTime: "2023-09-25 15:30:00", // 假设从数据库中获取的时间数据
      standardTime1: "", // 用于存储标准时间格式
      standardTime2: "", // 用于存储标准时间格式
    };
  },
  mounted() {
    // 在组件加载后，将数据库时间转换为标准时间格式
    this.convertToStandardTime();
  },

  methods: {
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
        token: "",
      };
      this.$message({
        message: "Log out success",
        type: "success",
      });
      this.$router.push("/login/signin");
    },
    convertToStandardTime() {
      // 解析时间字符串为日期时间对象
      const d1 = new Date(this.$store.state.userInfo.userLastLoginTime);
      const d2 = new Date(this.$store.state.userInfo.userCreateTime);
      // 将日期时间对象格式化为ISO 8601格式的字符串

      let year = d1.getFullYear();
      let month = d1.getMonth() + 1;
      let sun = d1.getDate();
      let hours = d1.getHours();
      let minutes = d1.getMinutes();

      let year1 = d2.getFullYear();
      let month1 = d2.getMonth() + 1;
      let sun1 = d2.getDate();
      let hours1 = d2.getHours();
      let minutes1 = d2.getMinutes();

      this.standardTime1 = `${year}-${month}-${sun}   ${hours}:${minutes}`;
      this.standardTime2 = `${year1}-${month1}-${sun1}   ${hours1}:${minutes1}`;
    },
  },
};
</script>

<style>
.my-label {
  color: rgb(11, 117, 237);
}

.my-content {
  border: 1px solid rgba(12, 122, 247, 1);
  border-radius: 9px;
  border-width: 1px;
  padding: 3px;
}

.Personal_imformation {
  /**/
  width: 1200px;
  height: 90px;

  font-weight: 700px;
  font-size: 40px;
  color: rgb(47, 85, 209);
  margin-top: 30px;
}
</style>