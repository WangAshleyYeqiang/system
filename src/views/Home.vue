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
          v-model="queryText"
          :trigger-on-focus="true"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search"
          @select="handleSelect"
          @keyup.enter="handleSelect"
          class="search"
        >
          <!-- <template slot-scope="{ item }">
            <div class="autocomplete-item" @click="handleItemClick(item)">
              {{ item }}
            </div>
          </template> -->
        </el-autocomplete>
        
<!-- ///////////////////////////// -->
<!-- ///////////////////////// -->
        
      </el-header>

      <el-container>

        <el-aside class="aside">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu

                :default-active="activeMenu"
                class="el-menu-vertical-demo "
                @open="handleOpen"
                @close="handleClose"
                >
                <el-menu-item index="1" @click="router_onClick('/home/hall')">
                  <i class="el-icon-house"></i>
                  <span slot="title" class="el-menu-item.is-active" >Home page</span>
                </el-menu-item>
                <el-menu-item index="2" @click="router_onClick('/home/my')">
                  <i class="el-icon-user"></i>
                  <span slot="title" class="el-menu-item.is-active">Personal information</span>
                </el-menu-item>
                <el-menu-item index="3" @click="router_onClick('/home/select')">
                  <i class="el-icon-discount"></i>
                  <span slot="title" class="el-menu-item.is-active">Course selection</span>
                </el-menu-item>
                <el-menu-item index="4" @click="router_onClick('/home/schdule')">
                  <i class="el-icon-notebook-2"></i>
                  <span slot="title" class="el-menu-item.is-active">School timetable</span>
                </el-menu-item>
               
                <el-menu-item index="5" @click="router_onClick('/home/serive')">
                  <i class="el-icon-shopping-cart-1"></i>
                  <span slot="title" class="el-menu-item.is-active">Upgrade serive</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main class="main">
          <router-view></router-view>
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
    queryText: '',
    options: [{value:'Home page'},{value:'Personal imformation'},{value:'Course selection'},{value:'School timetable'},{value:'Upgrade serive'} ],
    activeMenu:'1'
  };
},
methods: {
  querySearchAsync(queryText,cb) {
    console.log(this.options)
    console.log(queryText)
    
    var resultArry = this.options
    resultArry = this.options.filter(val => val.value.includes(queryText))
    console.log(resultArry)
    
    cb(resultArry)
  },
  // 其他方法
  handleSelect(item) {
  
    if (item) {
      // 根据选项值执行不同的跳转操作
      switch (item.value) {
        case 'Home page':
          this.$router.push('/home/hall');
          this.activeMenu=1;
          break;
        case 'Personal imformation':
          this.$router.push('/home/my'); // 跳转到bbb页面
          this.activeMenu=2;
          break;
        case 'Course selection':
          this.$router.push('/home/select'); // 跳转到ccc页面
          this.activeMenu=3;
          break;
        case 'School timetable':
          this.$router.push('/home/schdule'); // 跳转到ddd页面
          this.activeMenu=4;
          break;
        case 'Upgrade serive':
          this.$router.push('/home/serive'); // 跳转到ddd页面
          this.activeMenu=5;
          break;
        default:
          // 处理未知选项
      }
    }



  },
  router_onClick(path){
    //console.log(this.$router)

    if (path==this.$route.path){
      this.$message({
                  message: "You already at this page!",
                  type: "warning",
                });

      return
    }
  console.log(path);
  this.$router.push(path)
  
  }
},


  };
</script>

<style>



.user-name{
  left:40%;
  top:40% ;
  position: relative;;
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