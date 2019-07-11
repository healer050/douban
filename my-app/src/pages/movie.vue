<template>
    <div>
         <Topnav></Topnav>
        <div class="box"></div>
        <Ioading  v-if="bool"></Ioading>
        <div v-else>
            <Banneritem titlen='影院热映' :moviearr="moviearr|arr1" bname="movie"></Banneritem>
            <Banneritem titlen='免费在线观影' :moviearr="moviearr|arr2" bname="movie"></Banneritem>
            <Banneritem titlen='新片速递' :moviearr="moviearr|arr3" bname="movie"></Banneritem>
            <Goodmovie goodtitle="发现好电影" :goodsarr="goodarr"></Goodmovie>
            <Browseitem bitile='分类浏览' :marr="marr"></Browseitem>
            <Bottom ></Bottom>
        </div>
           
    </div>
</template>

<script>
import Topnav from '../components/nav/topnav'
import Banneritem from '../components/banner/banneritem'
import Goodmovie from '../components/movie/goodmovie'
import Browseitem from '../components/movie/browseitem'
import Bottom from '../components/movie/bottom'
import Ioading from '../components/loading'



export default {
       data() {
        return {
            moviearr:[],
            goodarr:[],
             marr:[
                {title:"经典",href:"/movie"},
                {title:"冷门佳片",href:"/movie"},
                {title:"豆瓣高分",href:"/movie"},
                {title:"动作",href:"/movie"},
                {title:"喜剧",href:"/movie"},
                {title:"爱情",href:"/movie"},
                {title:"悬拟",href:"/movie"},
                {title:"恐怖",href:"/movie"},
                {title:"科幻",href:"/movie"},
                {title:"治愈",href:"/movie"},
                {title:"文艺",href:"/movie"},
                {title:"成长",href:"/movie"},
                {title:"动画",href:"/movie"},
                {title:"成长",href:"/movie"},
                {title:"华语",href:"/movie"},
                {title:"欧美",href:"/movie"},
                {title:"韩国",href:"/movie"},
                {title:"日本",href:"/movie"}
           ],
           bool:true
        }
    },
    components:{
        Topnav,
         Banneritem,
         Goodmovie,
         Browseitem,
         Bottom,
         Ioading
    },
    created() {
        this.axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                // console.log(ok);
                // context.commit("maxios",ok.data);
                this.moviearr = ok.data.movie;
                this.goodarr = ok.data.faxianhaodianying;
                this.bool = false;
                console.log(this.goodarr);
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
