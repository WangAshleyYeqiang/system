<template>
  <div>
    <h1 class="text3">Upgrade your serive</h1>

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
            <el-button type="primary" plain style="align-items: center;  width:150px; margin-top: 50px; margin-left: -35px;">Buy It</el-button>
          </div>

        </el-col>
        <el-col :span="8" push="1">
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
            <el-button type="primary" plain style="align-items: center;  width:150px; margin-top: 50px; margin-left: -10px;">Buy It</el-button>
          </div>

        </el-col>
        <el-col :span="8" push="2">
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
            <el-button type="primary" plain style="align-items: center; width:150px; margin-top: 50px; margin-left: -30px;">Buy It</el-button>
          </div>

        </el-col>
      </el-row>
    </div>





  </div>
</template>

<script>
export default {
  name: "Serive"
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
  margin-top: 100px;
  margin-left: 25px;
  line-height: 20px;
}

.vip1-ul{
  text-align: left;
  margin-top: 100px;
  margin-left: 25px;
  line-height: 20px;
}
.vip0-ul{
  text-align: left;
  margin-top: 100px;
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
  margin-top: -90px;
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

.text3 {
  width: 723px;
  height: 87px;
  font-size: 36px;
  color: black;
  text-align: right;
}</style>