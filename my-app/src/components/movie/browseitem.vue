<template>
    <div>
        <h3>{{bitile}}</h3>
        <ul>
            <li v-for="(v,i) in marr" :key="i" class="bro-list">
            <Browselist :bcontent="v.title"></Browselist>

            </li>
        </ul>
    </div>
</template>
<script>
import Browselist from './browselist'
export default {
    // data() {
    //     return {
          
    //     }
    // },
    components:{
        Browselist
    },
    props:{
        bitile:String,
        marr:Array
    }
    
}
</script>
<style scoped>
.bro-list{
    width: 49%;
    border-bottom: 1px solid #f6f6f6;
    border-top: 1px solid #f6f6f6;
    display: inline-block;
}
ul{
    margin-top:20px ;
    padding-left:10px ;
}
ul .bro-list:nth-child(2n+1){
    border-right: 1px solid #f6f6f6;

}
</style>
