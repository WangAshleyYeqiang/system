<template>
  <el-row>
  <div class="bg">
    
      <img class="bg_tr" src="./../assets/topright.png">
      <img class="bg_HN" src="./../assets/HN.png">

    <el-row>
      <el-col :span="12" :md="12" :xs="0">

        <div>
          <el-row>
            <el-col :span="24" :md="24">
              <div class="title">
                <h1 class="text1">Academic Affairs System <br />of Hainan University</h1>
              </div>
            </el-col>
          </el-row>


          <div v-if="$route.path === '/login/signin'">
            <el-row>
              <el-col :span="24" :md="24">
                <h1 class="text2">Don't have an account? </h1>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" :md="24">
                <el-button @click="register_onClick('/login/register')" class="el_button_register"
                  style="color: rgba(255, 255, 255, 1);
                   background-color: rgba(53,87,220,1);
                   margin-top: 150px;">Register</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-else>
            <el-row>
              <el-col :span="24" :md="24">
                <h1 class="text2">Have account</h1>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" :md="24" >
                <el-button @click="register_onClick('/login/signin')" class="el_button_register"
                  style="color: rgba(255, 255, 255, 1); 
                  background-color: rgba(53,87,220,1);
                  margin-top: 150px;">Sign In</el-button>
              </el-col>
            </el-row>
          </div>
        </div>

      </el-col>


      <el-col :span="12" :md="12" :xs="{span:24}" >

        <div class="">
          <router-view></router-view>

          <div v-if="$route.path === '/login/signin'">
          <h1 class="hidden-sm-and-up" style="margin-top: 30px;">Don't have an account?</h1>
          <el-button  @click="register_onClick('/login/register')" class="hidden-sm-and-up el_button_register"
          style="color: rgba(255, 255, 255, 1);
          background-color: rgba(102,177,255,1);
          margin-top: 10px;">Register</el-button>
          </div>
          <div v-else>
            <el-button  @click="register_onClick('/login/signin')" class="hidden-sm-and-up el_button_register"
          style="color: rgba(255, 255, 255, 1);
          background-color: rgba(102,177,255,1);
          margin-top: 50px;">Sign In</el-button>
          </div>
        </div>
      </el-col>
    </el-row>




    

  </div>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {

  name: 'Login',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    register_onClick(path) {
      this.$router.push(path);
    }
  }
};

</script>

<style>
.bg {
  background-image: url('./../assets/Login_bg.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
}

.bg_HN {
  top: 650px;
  left: 60px;
  width: 250px;
  position: absolute;
}

.bg_tr {
  top: 500px;
  left: 1150px;
  width: 350px;
  position: absolute;
}

.text1 {
  font-size: 36px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);

}

.text2 {
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  margin-top: 150px;

}

.el_button_register {
  width: 177px;
  height: 48px;
}

.title {
  margin-top: 100px;
}
</style>