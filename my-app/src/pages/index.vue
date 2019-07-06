<template>
    <div>
  
        <Topnav></Topnav>
        <div class="box"></div>
        <Indextop></Indextop>
        <Indexitem></Indexitem>

    </div>
</template>

<script>
import Topnav from '../components/nav/topnav'
import Indextop from '../components/index/indextop'
import Indexitem from '../components/index/indexitem'


export default {
   

    components:{
        Topnav,
        Indextop,
        Indexitem
       
    },

    
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 52px;
    background: silver;
}
</style>
