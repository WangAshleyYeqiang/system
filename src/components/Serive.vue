<template>
  <div>
    <h1 class="text3">Upgrade your serive</h1>

    <div class="main">
      <el-row>
        <el-col :span="8">
          <div class="vip0-bg">
            <img src="./../assets/word-vip0.png" style="margin-top: 90px; margin-left: -120px;">
          </div>

        </el-col>
        <el-col :span="8" push="1">
          <div class="vip2-bg">
            <img src="./../assets/word-vip2.png" style="margin-top: 90px; margin-left:-120px;">
          </div>

        </el-col>
        <el-col :span="8" push="2">
          <div class="vip1-bg">
            <img src="./../assets/word-vip1.png" style="margin-top: 90px; margin-left:-120px;">
          </div>

        </el-col>
      </el-row>
    </div>
    
    <div>
      <el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
    </div>

    

  </div>
</template>

<script>
export default {
  name: "Serive"
}
</script>

<style>
.vip0-bg{
  height: 710px;
  width:300px;
  overflow: visible;
  background-image: url("./../assets/vip0.png");
  background-size: cover;
  background-position: center;
}
.vip2-bg{
   width:300px;
  height: 800px;
  overflow: visible;
  background-image: url("./../assets/vip2.png");
  background-size: cover;
  background-position: center;
  margin-top: -90px;
}
.vip1-bg{
  width:300px;
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
}
</style>