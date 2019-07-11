<template>
    <div>
        <div class="nav-top">
            <span @click="close()">关闭</span>
            <input type="search" >
            <!-- <img src="../../../static/img/ssk.png" alt=""> -->
        </div>
        <Navitem></Navitem>
        <div>
        <el-row >
            <el-col :span="24"><div class="grid-content bg-purple-dark nav-login">
                <router-link to="/login">登录豆瓣</router-link>
                
                </div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">
                <router-link to="/login">使用桌面版</router-link>
                
                </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <router-link to="/login">使用豆瓣App</router-link>
                </div></el-col>
        </el-row>
        </div>
    </div>
</template>

<script>
import Navitem from '../components/nav/navitem'
export default {
    components:{
        Navitem
    },
    methods: {
        close(){
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>

.nav-top{
    width: 100%;
    background:#fff; 
    padding: 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
    
}
.nav-top span{
    color: #42bd56;
    font-weight: 400;
}

.nav-top input{
    margin-left: 10px;
    width: 80%;
    height: 32px;
    border-radius: 4px;
    background: url()no-repeat 50% #f3f3f3;
}

  .bg-purple-dark {

    /* margin-top:25px ; */
    border-top: 1px solid #e5e5e5;
  }
    .bg-purple-dark a{
        display: block;
        text-align: center;
        line-height: 36px;
        color: #42bd56;
  }
  .bg-purple {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
.bg-purple  a{
    display: block;    
    border-right: 1px solid #e5e5e5;
    width: 100%;
    text-align: center;
    margin-top: 9px;
    color: #42bd56;

  }
  .bg-purple-light {
    border-top: 1px solid #e5e5e5;

  }
.bg-purple-light a{
    display: block;    
    width: 100%;
    text-align: center;
    /* margin-top: 10px; */
    line-height: 36px;
    border-bottom: 1px solid #e5e5e5;
    color: #42bd56;

  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
