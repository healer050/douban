<template>
    <div class="movie-item">
        <div class="moive-top">
        <span>{{titlen}}</span>
        <router-link to="">更多</router-link>
        </div>
        <div class="movie-slider">
        <div class="movie-bottom" v-for="(v,i) in moviearr" :key="i" @click="moviefun(bname,v.id)">
            
        <Balist  :mtitle="v.title" :mimgurl="v.images.small"  :mvalue="v.rating.average/2" :mnum="v.rating.average|str" ></Balist>
        </div>
        </div>
        <!-- <img src="../../../static/img/a2.jpg" alt=""> -->
    <!-- <div class="box">
    {{moviearr}}

    </div> -->
    </div>
</template>
<script>
import Balist from './bannerlist'
export default {
 
    // created() {
    //     this.axios({
    //             url:"/link/data",
    //             method:"get"
    //         }).then((ok)=>{
    //             // console.log(ok);
    //             // context.commit("maxios",ok.data);
    //             this.moviearr = ok.data.movie;
    //         })
    // },

    // created() {
    //     this.$store.dispatch("axiosIndex");
    // },
    components:{
        Balist
    },
    // computed: {
    //     moviearr(){

    //         // console.log(this.titlen);
    //         if(this.titlen=='影院热映'){
    //         return  this.$store.getters.getdmoive.slice(0,8);

    //         }else if(this.titlen=='免费在线观影'){
    //         return  this.$store.getters.getdmoive.slice(8,16);


    //         }else if(this.titlen=='新片速递'){
    //         return  this.$store.getters.getdmoive.slice(16,24);


    //         }
    //         // return this.$store.state.axiosarr;
    //     }
       
    // },
     props:{
         titlen:String,
         moviearr:Array,
         bname:String
     },
     filters:{
        fen:function(val){
            return val=val/2;
        },
        str:function(val){
            return val.toString()
        }
    },
    methods: {
        moviefun(bname,id){
            this.$router.push("/details/"+bname+"/"+id);
            this.$store.commit("mupdata",id);

        }
    },

}
</script>

<style scoped>
.moive-item{
    
    background: skyblue;
    
}
.moive-top{
    margin:  10px;
}
.moive-top a{
    color: aquamarine;
    float: right;


}
.movie-bottom{
    width: 1200px;
}


.movie-slider{
    overflow: auto;
}
.box{
    width: 100px;
    height: 200px;
    background: skyblue;
}
.el-rate__item{
    width: 10px;
}

</style>

