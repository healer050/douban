<template>
    <div>
        <h3>{{goodtitle}}</h3>
        <div class="good-m">
        <div class="goodm-box">
        <div v-for="(v,i) in goodsarr" :key="i" class="goodm-list">
        <Goodlist  :gooditem="v.title" v-if="v.title" :borderColor="v.color" :color="v.color" :mhref="v.href" :line="v.line"></Goodlist>
        </div>
        </div>
    </div>
    <!-- <Goodlist v-for="(v,i) in goodmarr" :key="i" :gooditem="v.title"  :mhref="v.href"></Goodlist> -->
    
    
    </div>
</template>

<script>
import Goodlist from './goodlist'
export default {
    components:{
        Goodlist
    },
    //  created() {
    //     this.$store.dispatch("axiosIndex");
    // },
    // computed: {
    //     goodmarr(){
    //        return this.$store.getters.getgoodmovie
    //     }
    // },
    props:{
        goodtitle:String,
        goodsarr:Array
    }
    
}
</script>
<style scoped>
.good-m{
    overflow: auto;
}
.goodm-box{
    /* display: flex; */
    width: 1042px;
    }
 .goodm-list{
        display: inline-block;
    }
</style>
