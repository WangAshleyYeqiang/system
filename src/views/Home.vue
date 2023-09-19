<template>
  <div>
    <el-container>

      <el-header class="header">
        
        Header
      </el-header>

      <el-container>

        <el-aside class="aside">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="rgb(239, 241, 249)"
                text-color="black"
                >
                <el-menu-item index="1">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">Home page</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-user-solid"></i>
                  <span slot="title">Personal information</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-discount"></i>
                  <span slot="title">Course selection</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-notebook-2"></i>
                  <span slot="title">School timetable</span>
                </el-menu-item>
               
                <el-menu-item index="5">
                  <i class="el-icon-s-data"></i>
                  <span slot="title">Upgrade serive</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main class="main">
          Main
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    name:"Home",
}
</script>

<style>
.header{
  position: absolute;
  top: 0%;
  width: 100%;
  border: 1px solid black;
  
}
.aside{
  border: 1px solid black;
  width: 250px;
  height: 93vmin;
  background-color: rgb(239, 241, 249);
}
.main{
  border: 1px solid black;

}
</style>