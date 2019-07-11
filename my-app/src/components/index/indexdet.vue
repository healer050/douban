<template>
    <div>
        <div class="box"></div>

        <div class="det-a">
            <h3>{{indexall[0].title}}</h3>
            <span class="span1">{{indexall[0].owner.name}}</span>
            <span class="span1">{{indexall[0].time_str}}</span>
            <br/>
        <!-- <p>{{indexall[0].time_str}}</p> -->
        <!-- <p v-html="indexall[0].content"></p> -->
             <span v-html="indexall[0].content.substring(0,200)"></span>
            <span  v-if="boo" v-html="indexall[0].content.substring(200)"></span>
            <div  v-if="!boo" class="more" href="#" @click="func()">查看更多>></div>

        </div>


    <!-- {{indexall}} -->
    
    </div>
</template>
<script>
import Ioading from '../loading'
export default {
    components:{
        Ioading
    },
    data() {
        return {
            indexarr:[],
             boo:false,
             bool:true


        }
    },
    created() {
       this.axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                
                // context.commit("maxios",ok.data);
                this.indexarr = ok.data.shouye;
                this.bool = false;
                 console.log(this.indexarr);
            })
    },
    computed: {
        indexall(){
            var idetarr =this.indexarr.filter((v,i)=>{
               if(v.id==this.$route.params.iid){
                   return v;
               }
            })
                return idetarr;
        }
       

    },
    methods: {
         func(){
            this.boo=true;
        }
    },
    
}
</script>
<style scoped>
.det-a{
    padding:10px;
}
.det-a span{
    margin-top: 10px;

}
.det-a h3{
    /* font-weight: 100; */
    padding: 10px 0;

}
.more{
    float: right;
    color: #42bd56;
    margin-right: 20px;
}
.span1{
    color: gray;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
