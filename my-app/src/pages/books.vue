<template>
    <div>
         <Topnav></Topnav>
          <div class="box"></div>
          <Ioading  v-if="bool"></Ioading>
          <div v-else>
        <Banneritem titlen='最受关注图书|虚构类' :moviearr="moviearr|arr1" bname="books" ></Banneritem>
        <Banneritem titlen='最受关注图书|非虚构类' :moviearr="moviearr|arr2" bname="books"></Banneritem>
        <Banneritem titlen='豆瓣书店' :moviearr="moviearr|arr3" bname="books"></Banneritem>
        <Goodmovie goodtitle="发现好图书" :goodsarr="goodarr"></Goodmovie>
        <Browseitem bitile='分类浏览' :marr="marr"></Browseitem>
        <Bottom></Bottom>
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
            bool:true,
            marr:[
               {title:"小说",href:"/books"},
                {title:"爱情",href:"/books"},
                {title:"历史",href:"/books"},
                {title:"外国文学",href:"/books"},
                {title:"青春",href:"/books"},
                {title:"爱情",href:"/books"},
                {title:"随笔",href:"/books"},
                {title:"励志",href:"/books"},
                {title:"传记",href:"/books"},
                {title:"推理",href:"/books"},
                {title:"奇幻",href:"/books"},
                {title:"旅行",href:"/books"},
                {title:"经管",href:"/books"},
           ]
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
                this.moviearr = ok.data.books;
                this.goodarr = ok.data.goodBook;
                this.bool = false;
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
