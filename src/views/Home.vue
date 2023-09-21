<template>
  <div>
    <el-container>

      <el-header class="header">

        <h1 class="menu">MENU</h1>
        <i class="el-icon-user icon-user"></i>
        <h1 class="user-name">Tintin</h1>
        
        <el-autocomplete
          prefix-icon="el-icon-search"
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search"
          @select="handleSelect"
          class="search"
          >
          </el-autocomplete>

        
      </el-header>

      <el-container>

        <el-aside class="aside">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu

                default-active="2"
                class="el-menu-vertical-demo "
                @open="handleOpen"
                @close="handleClose"
                >
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
    </el-container>
  </div>
</template>

<script>
export default {
    name:"Home",
}
</script>

<style>
.user-name{
  right:120px;
  top:25px;
  position: absolute;
}
.icon-user{
  right:40px;
  width:400px;
  font-size:xx-large;
  top:15px;
  position: absolute;
}

.el-menu-vertical-demo .el-menu-item.is-active{
  color:black;          
  background-color: rgba(53,87,220,1);       
}

.menu{
  top: 20px;
  left:110px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  position:absolute;
}
.search{
  width:750px;
  top:10px;
  left:-30px;
  position: absolute;
}
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
  text-align: left;
  background-color: rgba(245,246,250,1);
}
.main{
  border: 1px solid black;

}
</style>