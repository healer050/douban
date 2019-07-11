<template>
    <div>
         <Topnav></Topnav>
          <div class="box"></div>
        <detailitem></detailitem>
         <div v-if="num=='books'">
        <Goodmovie goodtitle="推荐喜鹊谋杀案的豆列" :goodsarr="goodarr"></Goodmovie>
        <Browseitem bitile='了解更多图书信息' :marr="marr"></Browseitem>

         </div>
          <div v-if="num=='movie'">
        <Goodmovie goodtitle="发现好电影" :goodsarr="goodarr"></Goodmovie>
        <Browseitem bitile='分类浏览' :marr="marr"></Browseitem>


         </div>
        <Bottom></Bottom>
        <!-- {{did}} -->
    </div>
</template>
<script>
import Topnav from '../components/nav/topnav'
import detailitem from '../components/detail/detailitem'
import Goodmovie from '../components/movie/goodmovie'
import Browseitem from '../components/movie/browseitem'
import Bottom from '../components/movie/bottom'
export default {
    components:{
        Topnav,
        detailitem,
        Goodmovie,
        Browseitem,
        Bottom
    },
     data() {
        return {
            moviearr:[],
            goodarr:[],
            marr:[],
            num:"",
            arr1:[
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
           arr2:[
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
     created() {
        this.axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                this.num=this.$route.params.bname;
                  if(this.$route.params.bname=='movie'){
                       this.moviearr = ok.data.movie;
                        this.goodarr = ok.data.faxianhaodianying;
                        this.marr = this.arr1;
                  }else if(this.$route.params.bname=='books'){
                      this.moviearr = ok.data.books;
                        this.goodarr = ok.data.goodBook;
                        this.marr = this.arr2;

                  }
                
            })
    },
    computed: {
        
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
