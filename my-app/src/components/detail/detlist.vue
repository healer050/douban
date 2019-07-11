<template>
    <div>
        <div class="det-box">

            <img :src="mingurl" alt="">
            <p>{{detname}}</p>
            <!-- <span>{{dettext}}</span> -->


        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        mingurl:String,
        detname:String

    }
    
}
</script>
<style scoped>
.det-box{
    width: 100px;
    height: 190px;
    /* border: 1px solid red; */
    float: left;
    margin: 10px;
}
.det-box img{
    width: 100px;
    height: 145px;
}
.det-box p{
    font-size:14px;
}
</style>
