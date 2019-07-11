<template>
    <!-- <div> -->
        
        <a href="#" class="brows-list">{{bcontent}} 
            <span class="bro-span">></span>
        </a>
    <!-- </div> -->
</template>
<script>
export default {
    props:{
        bcontent:String
    }
    
}
</script>
<style scoped>
.brows-list{
    line-height: 40px;
    padding: 10px;
    color: #42bd56;


}
.bro-span{
    float: right;
    padding-right:10px; 
}
</style>
