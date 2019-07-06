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
                 <el-col :span="24"><div class="grid-content bg-purple">
                     <p>{{allarr[0].genres.join("/")}}/{{allarr[0].directors[0].name}}/
{{allarr[0].casts[0].name}}/{{allarr[0].casts[1].name}}/{{allarr[0].casts[2].name}}/{{allarr[0].year}}</p>
                     
                     </div></el-col>
                </div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple imgm1">
                
                <img :src="allarr[0].images.small" alt="">
                </div></el-col>


            </el-row>
            <el-row :gutter="30">
                <el-col :span="11"><div class="grid-content bg-purple button-look">
                    <router-link to="">想看</router-link>
                    
                    </div></el-col>
                <el-col :span="11"><div class="grid-content bg-purple button-look">
                    <router-link to="">看过</router-link>

                    
                    </div></el-col>
             </el-row>
            

        </div>
        
        <!-- {{allarr}} -->
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("axiosIndex");
    },
    computed: {
        allarr(){
           
           var moivearr =  this.$store.getters.getdmoive.filter((v,i)=>{
               if(v.id==this.$store.state.mid){
                   return v;
               }
           })
           return moivearr;
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

.det-item h3{

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
</style>
