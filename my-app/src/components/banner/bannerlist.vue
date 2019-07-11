<template>
    <div class="item">
        <router-link to="">
            <img :src="mimgurl" alt="">
           <p>{{mtitle}}</p>
           <!-- <p>{{mid}}</p> -->
           <el-rate
                v-model="mvalue"
                disabled
                show-score
                text-color="#ff9900"
                :score-template="mnum" >
            </el-rate>
        </router-link>
        
    </div>
</template>
<script>
export default {
    props:{
        mtitle:String,
        mimgurl:String,
        mid:String,
        mvalue:Number,
        mnum:String
    }
    
}
</script>
<style scoped>
.item{
    width: 100px;
    height: 210px;
    /* border: 1px solid royalblue; */
    float: left;
    margin: 5px;
}

.item p{
    font-size: 14px;
    color: #000;
}
.item a{
    cursor: pointer;

}
#ico .el-rate__icon .el-rate__item {
    font-size: 14px;
}

#ico .el-rate__icon .el-rate__text{
    font-size: 12px;
}
.item img{
    width: 100px;
    height: 144px;

}
 /* .el-rate .el-rate__item{
    width: 10px;
} */
/* .el-rate__text{
    width: 10px;
    font-size: 10px;
} */
</style>
