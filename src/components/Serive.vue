<template>
  <div>

    <div class="main">
      <el-row>
        <el-col :span="8">
          <div class="vip0-bg">
            <img src="./../assets/word-vip0.png" style="margin-top: 90px; margin-left: -120px;">
            <div class="vip0-ul">
              <ul>
                <li style="text-align: center; font-size: 24px; font-weight: bolder; margin-left: -50px;">NORAML LEVEL</li>
                <li><i class="el-icon-error icon-error-color"></i> Fast course selection speed<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Very slow)</li>
                <li><i class="el-icon-error icon-error-color"></i> Block advertisement</li>
                <li><i class="el-icon-success icon-right-color"></i> When members are full<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maybe kicked off the list</li>
                <li><i class="el-icon-error icon-error-color"></i> More exquisite timeable</li>
              </ul>
              
            </div>
            <el-button @click="upLevel(2)" :disabled="$store.state.userInfo.userPrivilege==2?true:false"  type="primary" plain style="align-items: center;  width:150px; margin-top: 50px; margin-left: -35px;">
              {{$store.state.userInfo.userPrivilege==2?'You have it':'Buy it'}}</el-button>
          </div>

        </el-col>
        <el-col :span="8" :push="1">
          <div class="vip2-bg">
            <img src="./../assets/word-vip2.png" style="margin-top: 90px; margin-left:-120px;">
            <div class="vip2-ul">
              <ul>
                <li style="text-align: center; font-size: 24px; font-weight: bolder; margin-left: -50px;">GOD LEVEL</li>
                <li><i class="el-icon-success icon-right-color"></i> Fast course selection speed</li>
                <li><i class="el-icon-success icon-right-color"></i> Block advertisement</li>
                <li><i class="el-icon-success icon-right-color"></i> When members are full <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can kick off VIP0 user</li>
                <li><i class="el-icon-success icon-right-color"></i> More exquisite timeable</li>
              </ul>
              
            </div>
            <el-button @click="upLevel(4)" :disabled="$store.state.userInfo.userPrivilege==4?true:false" type="primary" plain style="align-items: center;  width:150px; margin-top: 50px; margin-left: -10px;">
              {{$store.state.userInfo.userPrivilege==4?'You have it':'Buy it'}}</el-button>
          </div>

        </el-col>
        <el-col :span="8" :push="2">
          <div class="vip1-bg">
            <img src="./../assets/word-vip1.png" style="margin-top: 90px; margin-left:-120px;">
            <div class="vip1-ul">
              <ul>
                <li style="text-align: center; font-size: 24px; font-weight: bolder; margin-left: -50px;">PRIME LEVEL</li>
                <li><i class="el-icon-success icon-right-color"></i> Fast course selection speed</li>
                <li><i class="el-icon-success icon-right-color"></i> Block advertisement</li>
                <li><i class="el-icon-success icon-right-color"></i> Never kicked off the list</li>
                <li><i class="el-icon-success icon-right-color"></i> More exquisite timeable</li>
              </ul>
              
            </div>
            <el-button @click="upLevel(3)" :disabled="$store.state.userInfo.userPrivilege==3?true:false" type="primary" plain style="align-items: center; width:150px; margin-top: 50px; margin-left: -30px;">
              {{$store.state.userInfo.userPrivilege==3?'You have it':'Buy it'}}</el-button>
          </div>

        </el-col>
      </el-row>
    </div>





  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Serive",
  methods: {
    upLevel(kinds){





      var userInfo=this.$store.state.userInfo;
      userInfo.userPrivilege=parseInt(kinds)
      axios.put("http://localhost:8081/userInfo/updateUserInfoByUserID",userInfo ).then(res=>{
        console.log(res);
        if (res.data){
          this.$message({
            message:"Successfully up to Level VIP"+(parseInt(kinds)-2).toString(),
            type: 'success'
          })

          axios.get("http://localhost:8081/userInfo/getUserInfoByUserID?userID="+this.$store.state.userInfo.userID).then(ress=>{
            console.log(ress)
            this.$store.state.userInfo=ress.data;
            this.$cookies.set("userInfo", ress.data, { expires: 7 })
          })
        }
      }).catch(err=>{
        this.$message({
            message:"Fail up to Level VIP"+(parseInt(kinds)-2).toString(),
            type: 'warning'
          })
      })
        //this.$store.state.userInfo.userPrivilege=kinds;
        
        return
    }
  },
}
</script>

<style>
.vip1-ul ul li{
  margin-top: 50px;
}

.vip2-ul ul li{
  margin-top: 50px;
}
.vip0-ul ul li{
  margin-top: 50px;
}


.icon-right-color{
  color:rgb(71, 168, 3);
  /* background-color: white; */
  
}
.icon-error-color{
  color:red;
}
.vip2-ul{
  text-align: left;
  margin-top: 50px;
  margin-left: 25px;
  line-height: 20px;
}

.vip1-ul{
  text-align: left;
  margin-top: 50px;
  margin-left: 25px;
  line-height: 20px;
}
.vip0-ul{
  text-align: left;
  margin-top: 50px;
  line-height: 20px;
  margin-left: 25px;
}
.vip0-bg {
  height: 710px;
  width: 300px;
  overflow: visible;
  background-image: url("./../assets/vip0.png");
  background-size: cover;
  background-position: center;
}

.vip2-bg {
  width: 300px;
  height: 800px;
  overflow: visible;
  background-image: url("./../assets/vip2.png");
  background-size: cover;
  background-position: center;
  margin-top: -50px;
}

.vip1-bg {
  width: 300px;
  height: 710px;
  overflow: visible;
  background-image: url("./../assets/vip1.png");
  background-size: cover;
  background-position: center;
}

.main {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 90%
}
</style>