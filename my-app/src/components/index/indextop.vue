<template>
    <div class="index-item">
        <el-row >
            <el-col :span="11"><div class="grid-content bg-purple">
                <router-link to="">影院热映</router-link>
                
                </div></el-col>
            <el-col :span="11"><div class="grid-content bg-purple">
                <router-link to="">11{{ititle}}</router-link>
                
                </div></el-col>
            <el-col :span="11"><div class="grid-content bg-purple">
                <router-link to="">豆瓣事件</router-link>
                
                </div></el-col>
            <el-col :span="11"><div class="grid-content bg-purple">
                <router-link to="">使用豆瓣App</router-link>

                
                </div></el-col>
        </el-row>

    </div>
</template>
<script>
export default {
    props:{
        ititle:String
    }
    
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
    margin-top: 10px;
    margin-left: 10px;
  }
  .bg-purple-dark {
    background: #f6f6f6;
  }
  .bg-purple {
    background: #f6f6f6;
  }
  .bg-purple a{
        display: block;
        text-align: center;
        line-height: 50px;
        color: #000;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
   
  .grid-content {
    border-radius: 4px;
    min-height: 36px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
