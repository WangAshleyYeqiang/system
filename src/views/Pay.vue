<template>
    <div style="height:100%; width:100%; overflow:hidden" class="bg5">
        <div> 
            <h1 class="payText1">Congratulation!</h1>
            <h2 class="payText2">Being part of the VIP</h2>
        </div>

        <div style="width: 100%; height:100%; overflow:hidden;">
            <img class="lh" src="./../assets/10001.2f2054c92b1b344deb29842ccb16ad7f.webp" alt="">
        </div>

    </div>
    
</template>

<script>
export default {
    name:'Pay',
}
</script>

<style>

.lh{
    overflow: hidden;
    width: 120%;
    height:100%; 
    object-fit: cover;
    position: absolute;
    top: 0;
    left: -200px;
    z-index: 999;
    
    animation-duration: 1000ms;
}
.payText1{
    font-size:48px;
    font-weight: 1000; 
    margin-top: 260px;
}

.payText2{
    font-size:36px;
    font-weight: 800;
    margin-top: 50px;
    line-height: 100px;
}
.bg5{
    background-image: url(./../assets/bg7.png);
    background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
}
</style>