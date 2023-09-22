<template>
  <!-- <div>
    <div>Personal information</div>
    <br />

    <div class="">
      userName: {{$store.state.userInfo.userName}}
    </div>

    <div class="">
      userGender: {{$store.state.userInfo.Gender}}
    </div>
    
    <div class="">
      userPhone: {{$store.state.userInfo.userPhone}}
    </div>

    <div class="">
      userLastLoginTime: {{$store.state.userInfo.userLastLoginTime}}
    </div>

    <div class="">
      userCreateTime: {{$store.state.userInfo.userCreateTime}}
    </div>

    <div class="">
      userPassword: {{$store.state.userInfo.userPassword}}
    </div>

    <div class="">
      userPrivilege: {{$store.state.userInfo.userPrivilege}}
    </div>

    <div class="">
      userType: {{$store.state.userInfo.userType}}
    </div> -->


 <el-descriptions title="Personal Information" column="2" border>
  <el-descriptions-item label="userID"></el-descriptions-item>
  <el-descriptions-item label="userName">{{$store.state.userInfo.userName}}</el-descriptions-item>
  <el-descriptions-item label="userGender"></el-descriptions-item>
  <el-descriptions-item label="userPhone"></el-descriptions-item>
  <el-descriptions-item label="userLastLoginTime"></el-descriptions-item>
  <el-descriptions-item label="userCreateTime"></el-descriptions-item>
  <el-descriptions-item label="userPassword"></el-descriptions-item>
  <el-descriptions-item label="userPrivilege"></el-descriptions-item>
  <el-descriptions-item label="userType"></el-descriptions-item>
</el-descriptions>


    



</template>

<script>
export default {
  name: "My"

 };
</script>

<style>
</style>