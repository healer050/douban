<template>
    <div>
         <Topnav></Topnav>
        <div class="box"></div>
        <Banneritem titlen='近期值得看的国产剧' :moviearr="moviearr|arr1" bname="movie"></Banneritem>
        <Banneritem titlen='近期值得看的综艺节目' :moviearr="moviearr|arr2" bname="movie"></Banneritem>
        <Banneritem titlen='近期值得看的英美剧' :moviearr="moviearr|arr3" bname="movie"></Banneritem>
        <Goodmovie goodtitle="发现好电视剧" :goodsarr="goodarr"></Goodmovie>
        <Browseitem bitile='分类浏览' :marr="marr"></Browseitem>
        <Bottom ></Bottom>

           
    </div>
</template>

<script>
import Topnav from '../components/nav/topnav'
import Banneritem from '../components/banner/banneritem'
import Goodmovie from '../components/movie/goodmovie'
import Browseitem from '../components/movie/browseitem'
import Bottom from '../components/movie/bottom'


export default {
       data() {
        return {
            moviearr:[],
            goodarr:[],
             marr:[
                {title:"英美剧",href:"/movie"},
                {title:"韩剧",href:"/movie"},
                {title:"国产剧",href:"/movie"},
                {title:"日剧",href:"/movie"},
                {title:"动漫",href:"/movie"},
                {title:"综艺",href:"/movie"},   
           ]
        }
    },
    components:{
        Topnav,
         Banneritem,
         Goodmovie,
         Browseitem,
         Bottom
    },
    created() {
        this.axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                // console.log(ok);
                this.moviearr = ok.data.movie;
                 this.goodarr = ok.data.faxianhaodianying;
            })
    },
    filters:{
        arr1(val){
            return val.slice(0,6)
        },
        arr2(val){
            return val.slice(6,12)
        },
        arr3(val){
            return val.slice(12,18)
        }
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
