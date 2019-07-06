<template>
    <div>
         <Topnav></Topnav>
          <div class="box"></div>
        <detailitem></detailitem>
        <!-- {{did}} -->
    </div>
</template>
<script>
import Topnav from '../components/nav/topnav'
import detailitem from '../components/detail/detailitem'
export default {
    components:{
        Topnav,
        detailitem
    },
    computed: {
        // did(){
        //     return this.$store.state.mid;
        // }
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
