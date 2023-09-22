<template>


 <el-descriptions title="Personal Information" column="2" border>
  <el-descriptions-item label="user ID">
    {{$store.state.userInfo.userID}}
  </el-descriptions-item>
  <el-descriptions-item label="Name">
    {{$store.state.userInfo.userName}}
  </el-descriptions-item>
  <el-descriptions-item label="Gender">
    {{$store.state.userInfo.userGender}}
  </el-descriptions-item>
  <el-descriptions-item label="Phone">
    {{$store.state.userInfo.userPhone}}
  </el-descriptions-item>
  <el-descriptions-item label="Last LoginTime">
    {{$store.state.userInfo.userLastLoginTime}}
  </el-descriptions-item>
  <el-descriptions-item label="Create Time">
    {{$store.state.userInfo.userCreateTime}}
  </el-descriptions-item>
  <el-descriptions-item label="Password">
    {{$store.state.userInfo.userPassword}}
  </el-descriptions-item>
  <el-descriptions-item label="Privilege">
    {{$store.state.userInfo.userPrivilege}}
  </el-descriptions-item>
  <el-descriptions-item label="user Type">
    {{$store.state.userInfo.userType}}
  </el-descriptions-item>
</el-descriptions>


    



</template>

<script>
export default {
  name: "My"

 };
</script>

<style>
</style>