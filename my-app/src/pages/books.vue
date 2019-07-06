<template>
    <div>
         <Topnav></Topnav>
          <div class="box"></div>
        books
        <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
            </el-rate>
    </div>
</template>

<script>
import Topnav from '../components/nav/topnav'
export default {
    components:{
        Topnav
    },
     data() {
      return {
        value: 3.0
      }
    }
    
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 52px;
    background: silver;
}
</style>
