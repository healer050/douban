<template>
    <div>
         <Topnav></Topnav>
        <div class="box"></div>
        <Banneritem titlen='影院热映'></Banneritem>
            movie
    </div>
</template>

<script>
import Topnav from '../components/nav/topnav'
import Banneritem from '../components/banner/banneritem'
export default {
    
    components:{
        Topnav,
         Banneritem
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
