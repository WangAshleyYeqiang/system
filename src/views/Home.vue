<template>
  <div>
    <el-container>

      <el-header class="header">

        <h1 class="menu">MENU</h1>
        <i class="el-icon-user icon-user"></i>
        <h1 class="user-name">Tintin</h1>
        
        <!-- <el-autocomplete
          prefix-icon="el-icon-search"
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search"
          @select="handleSelect"
          class="search"
          >
          </el-autocomplete> -->


          <el-autocomplete
          v-model="searchText"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search"
          @select="handleSelect"
          class="search"
        >
          <template slot-scope="{ item }">
            <div class="autocomplete-item" @click="handleItemClick(item)">
              {{ item }}
            </div>
          </template>
        </el-autocomplete>
        
<!-- ///////////////////////////// -->
<!-- ///////////////////////// -->
        
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
  data() {
  return {
    searchText: '',
    options: ['Home page', 'Personal imformation', 'ccc', 'ddd'],
  };
},
methods: {
  querySearchAsync(query) {
    return this.options.filter(option => option.includes(query));
  },
  // 其他方法
  handleSelect(item) {
    if (item) {
      // 根据选项值执行不同的跳转操作
      switch (item.value) {
        case 'Home page':
          this.$router.push('/hall'); // 跳转到aaa页面
          break;
        case 'Personal imformation':
          this.$router.push('/my'); // 跳转到bbb页面
          break;
        case 'ccc':
          this.$router.push('/ccc'); // 跳转到ccc页面
          break;
        case 'ddd':
          this.$router.push('/ddd'); // 跳转到ddd页面
          break;
        default:
          // 处理未知选项
      }
    }
  },
}


  };
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