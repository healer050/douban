<template>
    <div class="good-movie">
       <a :href="mhref"> 
           <span :style="{color:color,borderColor:borderColor}">{{gooditem}}</span>
           <!-- <span >{{gooditem}}</span> -->
        </a>
        <br v-show="line">
    </div>
</template>

<script>
export default {
    props:{
        gooditem:String,
        borderColor:String,
        color:String,
        mhref:String,
        line:false
    },
   
}
</script>
<style scoped>
.good-movie span{
    display: inline-block;
    text-align: center;
    line-height: 52px;
    border: 1px solid ;
    padding: 0 10px ;
    margin: 10px;
    border-radius: 5px;
    
}
</style>
