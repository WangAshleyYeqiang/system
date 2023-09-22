<template>
  <div style=" height: 92vh; overflow: hidden;">
    <el-container >

      <el-header class="header">

        <el-row type="flex" justify="center">
          <img class="logo" src="./../assets/HN.png">
          <el-col :span="12" :md="6" :xs="0" push="5">
            <el-autocomplete
          v-model="queryText"
          :trigger-on-focus="true"
          :fetch-suggestions="querySearchAsync"
          placeholder="Search"
          @select="handleSelect"
          @keyup.enter="handleSelect"
          class="search"
        >
  
        </el-autocomplete>
          </el-col>

          <el-col :span="8" :xs="0" push="6">
            <div v-if="$store.state.userInfo.userGender=='Female'">
            <img  class="avatar" src="./../assets/female.jpg"><img>
            </div>
            <div v-else>
            <img  class="avatar" src="./../assets/male.jpg"><img>
          </div>
          </el-col>

          <el-col :span="4" :xs="0" push="2">
            <h1 class="user-name">{{$store.state.userInfo.userName}} ({{$store.state.userInfo.userID}})</h1>
          </el-col>

          <el-col class="hidden-sm-and-up" :span="4" push="11">
            <el-dropdown>
              <el-button  style="background-color:white; margin-top: 10px; ">
                <i class="el-icon-arrow-down el-icon--right el-icon-menu" style="margin-left: 3px;"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >{{$store.state.userInfo.userName}}</el-dropdown-item>

                <el-dropdown-item divided @click.native="router_onClick('/home/hall')">Homepage</el-dropdown-item>
                <el-dropdown-item @click.native="router_onClick('/home/my')">Personal information</el-dropdown-item>
                <el-dropdown-item @click.native="router_onClick('/home/select')">Course selection</el-dropdown-item>
                <el-dropdown-item @click.native="router_onClick('/home/schdule')">School timetable</el-dropdown-item>
                <el-dropdown-item @click.native="router_onClick('/home/serive')">Upgrade serive</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </el-col>
        </el-row>



         
        
<!-- ///////////////////////////// -->
<!-- ///////////////////////// -->
        
      </el-header>

      <el-container>

        <el-aside class="aside" style="width: 200px;">
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

        <el-main class="main" style=" margin-top: 0%;">
          <el-scrollbar style="height: 85%; width: 100%; overflow-x: hidden;">
            
           <router-view></router-view>

          </el-scrollbar>


        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

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
          this.$router.push('/home/my'); 
          this.activeMenu=2;
          break;
        case 'Course selection':
          this.$router.push('/home/select');
          this.activeMenu=3;
          break;
        case 'School timetable':
          this.$router.push('/home/schdule'); 
          this.activeMenu=4;
          break;
        case 'Upgrade serive':
          this.$router.push('/home/serive'); 
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
  
  },
},

//钩子函数 等home页面开发完成后解除注释
// mounted(){
//     setTimeout(() => {
//       console.log(this.$store.state.userInfo.userID,'home')
//     if(this.$store.state.userInfo.userID==''){
//       this.$message({
//         message:'Please sign in first',
//         type:'error'
//       })
//       this.$router.push('/login/signin')
//     }
//     }, 1000);
//   }


  };
</script>

<style>


.avatar{
  width: 40px;
  height: 40px;
  border-radius:20px;
  margin-top: 1%;
  margin-left: 10%;
}

@media (max-width: 768px) {
  .el-aside {
    display: none;
  }
}



.user-name {
  font-size: 18px;
  margin-top: 20px;
  color: #fff;

}

.icon-user {
  font-size: xx-large;
  top: 15px;
  margin-top: 10px;
  color: #fff;
}

.el-menu-vertical-demo .el-menu-item.is-active {
  color: white;
  background-color: rgba(53, 87, 220, 1);
}

.logo {
  top: 8px;
  position: absolute;
  left: 3px;
  width: 150px;

}

.search {
  width: 500px;
  margin-top: 10px;

}

.header {
  position: absolute;
  top: 0%;
  width: 100%;
 /* border-bottom: 1px solid rgb(252, 252, 252);*/
  background-color: rgba(53, 87, 220, 1);

}

.aside {
 
  height: 93vmin;
  text-align: left;
  background-color: rgba(245, 246, 250, 1);
}

.main {
 
  /* position: absolute;
  top: 0; */

}
</style>