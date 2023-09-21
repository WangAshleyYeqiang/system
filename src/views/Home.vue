<template>
  <div>
    <el-container>

      <el-header class="header">

        <el-row type="flex" justify="center">
          <img class="logo" src="./../assets/HN.png">
          <el-col :span="12" :md="6" :xs="0" push="5">
            <el-autocomplete prefix-icon="el-icon-search" v-model="state" :fetch-suggestions="querySearchAsync"
              placeholder="Search" @select="handleSelect" class="search">
            </el-autocomplete>
          </el-col>

          <el-col :span="8" :xs="0" push="7">
            <i class="el-icon-user icon-user"></i>
          </el-col>

          <el-col :span="4" :xs="0" push="2">
            <h1 class="user-name">Tintin</h1>
          </el-col>

          <el-col class="hidden-sm-and-up" :span="4" push="11">
            <el-dropdown>
              <el-button  style="background-color:white; margin-top: 10px; ">
                <i class="el-icon-arrow-down el-icon--right el-icon-menu" style="margin-left: 3px;"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Tintin</el-dropdown-item>
                <el-dropdown-item divided>Personal information</el-dropdown-item>
                <el-dropdown-item>Course selection</el-dropdown-item>
                <el-dropdown-item>School timetable</el-dropdown-item>
                <el-dropdown-item>Upgrade serive</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </el-col>
        </el-row>
      </el-header>
    </el-container>

    <el-container>

      <el-aside class="aside" style="width: 200px;">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose">
              <el-menu-item index="1">
                <i class="el-icon-house"></i>
                <span slot="title" class="el-menu-item.is-active">Home page</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-user"></i>
                <span slot="title" class="el-menu-item.is-active">Personal information</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-discount"></i>
                <span slot="title" class="el-menu-item.is-active">Course selection</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-notebook-2"></i>
                <span slot="title" class="el-menu-item.is-active">School timetable</span>
              </el-menu-item>

              <el-menu-item index="5">
                <i class="el-icon-shopping-cart-1"></i>
                <span slot="title" class="el-menu-item.is-active">Upgrade serive</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <el-main class="main">
        Main
      </el-main>
    </el-container>



  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: "Home",
}
</script>

<style>
@media (max-width: 768px) {
  .el-aside {
    display: none;
  }
}

.user-name {
  font-size: 25px;
  margin-top: 15px;
}

.icon-user {
  font-size: xx-large;
  top: 15px;
  margin-top: 10px;

}

.el-menu-vertical-demo .el-menu-item.is-active {
  color: white;
  background-color: rgba(53, 87, 220, 1);
}

.logo {
  top: 0px;
  position: absolute;
  left: 20px;
  width: 200px;

}

.search {
  width: 500px;
  margin-top: 10px;

}

.header {
  position: absolute;
  top: 0%;
  width: 100%;
  border: 1px solid black;
  background-color: rgba(53, 87, 220, 1);

}

.aside {
  border: 1px solid black;
  height: 93vmin;
  text-align: left;
  background-color: rgba(245, 246, 250, 1);
}

.main {
  border: 1px solid black;

}
</style>