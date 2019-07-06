<template>
    <div>
        <el-row  class="top-nav">
          <el-col :span="5"><div class="grid-content top-logo">
            <router-link to="/index"><img src="../../../static/img/logo.png" alt=""></router-link>
            
            </div></el-col>
          <el-col :span="5" ><div class="grid-content top-serch">
            <router-link to="/nav"><img src="../../../static/img/top-serch.png" alt=""></router-link>
            </div></el-col>
          <el-col :span="8" :offset="6"><div class="grid-content bg-purple">
              <p class="top-text"><router-link to="">打开豆瓣App</router-link></p>
            </div></el-col>

        </el-row>
      </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
     padding-top: 5px;
    background: #42bd56;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 26px;
  }
  .row-bg {
    /* padding: 10px 0; */
    background-color: #f9fafc;
  }
.top-logo img{
  width: 48px;
  height: 22px;
  padding-top: 5px;

}
.top-serch img{
    width: 24px;
    height: 18px;
    padding-top: 10px;
}

  .top-nav{
    width: 100%;
    background:#fff; 
    position: fixed;
    top: 0;
    /* border-bottom: 1px solid #99a9bf; */
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
    z-index: 999;
    
  }
  .top-text a{
    text-align: center;
    line-height: px;
    color: #fff;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 14px;
  }

</style>
