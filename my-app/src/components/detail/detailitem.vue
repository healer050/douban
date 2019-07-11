<template>
    <div>
        <!-- details -->
        <div  class="det-item">
            <h3>{{allarr[0].title}}</h3>
            <el-row :gutter="20">
            <el-col :span="14"><div class="grid-content bg-purple">
                 <el-col :span="24"><div class="grid-content bg-purple">
                     <el-rate
                        v-model="allarr[0].rating.average/2"
                        disabled
                        show-score
                        text-color="#ff9900"
                        :score-template="allarr[0].rating.average|str">
                        </el-rate>
                     </div></el-col>
                 <el-col :span="24"><div class="grid-content bg-purple" >
                       <div v-if="num=='movie'">
                          <p>{{allarr[0].genres.join("/")}}/{{allarr[0].directors[0].name}}/
                        {{allarr[0].casts[0].name}}/{{allarr[0].casts[1].name}}/
                        {{allarr[0].casts[2].name}}/{{allarr[0].year}}</p>
                     </div>
                     <div v-else-if="num=='books'">
                         <p>{{allarr[0].author[0]}}/{{allarr[0].author[1]}}/{{allarr[0].publisher}}/
                     {{allarr[0].rating.numRaters}}/{{allarr[0].binding}}/{{allarr[0].price}}/ {{allarr[0].pubdate}}
                      </p>
                     </div> 
                    
                     </div></el-col>
                </div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple imgm1">
                
                <img :src="allarr[0].images.small" alt="">
                </div></el-col>


            </el-row>
             <div v-if="num=='books'">
             <ul class="book-mary">
                 <li><p>在豆瓣购买</p><span>42.5元起</span></li>
                 <li><p>在其他网站购买</p><span>50.5元起</span></li>
                 </ul>
                  <el-row :gutter="30">
                <el-col :span="7"><div class="grid-content bg-purple button-look">
                    <router-link to="">想读</router-link>
                    </div></el-col>
                <el-col :span="7"><div class="grid-content bg-purple button-look">
                    <router-link to="">再读</router-link>
                    </div></el-col>
                <el-col :span="7"><div class="grid-content bg-purple button-look">
                <router-link to="">读过</router-link>
                </div></el-col>
             </el-row>
             
             </div>
              <div v-if="num=='movie'">
            <el-row :gutter="30">
                <el-col :span="11"><div class="grid-content bg-purple button-look">
                    <router-link to="">想看</router-link>
                    </div></el-col>
                <el-col :span="11"><div class="grid-content bg-purple button-look">
                    <router-link to="">看过</router-link>
                    </div></el-col>
             </el-row>
            
             </div>
        <span>{{allarr[0].title}}的内容简介</span>

        <div v-if="num=='movie'">
                    <span v-if="bool">{{allarr[0].summary}}</span>
                    <strong v-else>{{allarr[0].summary}}</strong>
                    <b @click="fun()" v-if="!bool" class="duo">展开更多>></b>
            <!-- {{allarr[0].movie_content}} -->
            </div>
        <div v-else-if="num=='books'">
                    <span v-if="bool">{{allarr[0].summary}}</span>
                    <strong v-else>{{allarr[0].summary}}</strong>
                    <b @click="fun()" v-if="!bool" class="duo">展开更多>></b>
            <!-- {{allarr[0].summary}} -->
            </div>
        <div v-if="num=='movie'" class="movie-per">
            <h3>影人</h3>
            <div class="per">
            <div class="per-r1">
            <Detlist :mingurl="allarr[0].directors[0].avatars.small" :detname="allarr[0].directors[0].name" :dettext="allarr[0]"></Detlist>

                <Detlist v-for="(v,i) in allarr[0].casts" :key="i" :detname="v.name" :mingurl="v.avatars.small"></Detlist>
            </div>
            </div>

        </div>
        <div class="comment">
            <h3>发表评论</h3>
            <div class="comment-add">
            <textarea rows="5" cols="42" v-model="inputText">   
               
            </textarea>
             <span @click="add()" class="add">添加</span>
             </div>
            <!-- <input type="textarea" v-model="inputText"><span @click="add()">添加</span> -->
            <ul class="com-tent">

                <li v-for="(v,i) in obj" :key="i">
                    <span class="user">{{v.user}}</span>
                    <span @click="del(i)" class="del">X</span>
                    <p>{{v.content}}</p>
                    <span class="time">{{v.data}}</span>

                </li>
            </ul>

        </div>

    </div>
        <!-- {{num}} -->

        <!-- {{allarr}} -->
    </div>
</template>
<script>

import Detlist from './detlist'
export default {
    components:{
        Detlist
    },
    data() {
        return {
            num:"",
            obj:[
                {user:"healer",content:"2132431543543",data:"2019/07/10 14:44"}
            ],
            inputText:"",
            nowtime:"",
            bool:false
        }
    },
    props:{
        detname:String
    },
    methods: {
        add(){
            this.nowtime = new Date().toLocaleString();
            if(!this.inputText==""){
                this.obj.unshift({user:"healer",content:this.inputText,data:this.nowtime})
                this.inputText=="";
            }


        },
        del(n){
            this.obj.splice(n,1);

        },
        fun(){
            this.bool=true;
        }

    },
    
    created() {
        this.$store.dispatch("axiosIndex");
        
    },
    computed: {
         allarr(){

                  this.num=this.$route.params.bname;
                //  console.log(this.$route.params.bname)
            if(this.$route.params.bname=='movie'){
                var moivearr =  this.$store.getters.getdmoive.filter((v,i)=>{
                    if(v.id==this.$route.params.id){
                        return v;
                    }
                })
                        // this.num = ""
                        console.log(moivearr)

                        return moivearr;
            
            }else if(this.$route.params.bname=='books'){
                
                    var booksarr =  this.$store.getters.getbooks.filter((v,i)=>{
                    if(v.id==this.$route.params.id){
                        return v;
                    }
                })
                        // console.log(booksarr)
                        // this.num = ""
                        return booksarr;
            }
             
         }
    },
    filters:{
        fen:function(val){
            return val=val/2;
        },
        str:function(val){
            return val.toString()
        }
    },

    
}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
      margin-top: 10px;
    /* background: #d3dce6; */
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

.det-item {
margin: 10px;
}


.imgm1 img{
    height: 182px;
    width: 130px;
}
.button-look{
    border:1px solid  rgb(248, 196, 54);

}
.button-look a{
    color:  rgb(248, 196, 54);
    display: block;
    text-align: center;
    line-height: 36px;

}
.per{
    overflow: auto;
}
.per-r1{
    width:1000px;
}
.book-mary{
     border-bottom:1px solid rgb(236, 235, 235);
     margin-bottom: 20px;
}
.book-mary li{
    border-top:1px solid rgb(243, 241, 241);
    line-height: 40px;

}
.book-mary p{
    color: #42bd56;
     display: inline-block;
}
.book-mary span{
     float: right;
     margin-right: 10px;
      color: gray;
}

.del{
    /* display:inline-block; */
    font-size:16px;
    color:red;
    float: right;
    margin-right:20px;
}
span{
    font-size: 15px;
    color: #494949;
    line-height: 20px;
}
strong{
    font-weight: 200;
    font-size: 15px;
    color: #494949;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden; 
    margin-bottom: 10px;
}
.duo{
    float: right;
    color: #42bd56;

}
/* 评论 */
.comment{
    margin-top: 30px;
}
.comment h3{
    margin:10px 0;
}
.comment p{
    margin:10px 0;
}

.com-tent li{
     padding:10px;
    list-style:none;
    border-bottom:1px solid #e5e9f2;
    border-top:1px solid #e5e9f2;
    overflow: hidden; 

}
.comment-add{
    border:1px solid #e5e9f2;
    
}
.comment-add textarea{
    border: none;
}
.time{
    float:right;
    color: gray;

}
.user{
    font-size: 14px;
    font-weight: 600;
}
</style>