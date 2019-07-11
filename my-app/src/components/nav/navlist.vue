<template>
    <div class="item">
        <router-link :to="linkurl">
            <h1 :style="{color:color}">{{title}}</h1>
            <p>{{content}}</p>

        </router-link>
        
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        linkurl:String,
        content:String,
        color:String
    }
    
}
</script>
<style scoped>
.item{
    width: 33%;
    /* height: 100px; */
    margin-top: 25px;
    float: left;
     text-align: center;
}
.item h1{
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
}
.item p{
    color: #999;
    font-size: 12px;
}
</style>
