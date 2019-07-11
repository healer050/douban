<template>
    <div>
        <div class="box"></div>
        <Topnav></Topnav>
        <Indexdet></Indexdet>
        <Bottom></Bottom>
    </div>
</template>
<script>
import Topnav from '../components/nav/topnav'
import Indexdet from '../components/index/indexdet'
import Bottom from '../components/movie/bottom'
export default {
    components:{
        Topnav,
        Indexdet,
        Bottom
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
