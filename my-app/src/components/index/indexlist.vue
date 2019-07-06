<template>
    <div>
      <div class="index-item">
          <router-link to="">
          <img :src="iimgurl" alt="">
          <h3>{{ititle}}</h3>
          <div class="index-content">
          <p>{{itext}}</p>

          </div>

            <!-- <span>{{iauthor}}</span> -->
        </router-link>
      </div>  
    </div>
</template>
<script>
export default {
    props:{
        ititle:String,
        itext:String,
         iimgurl:String
    }
    
}
</script>
<style scoped>
.index-item{
    /* margin-top: 20px; */
    padding: 20px;
    border-bottom: 1px solid #e4e4e4;
    /* box-shadow: 0 1px 2px rgba(0,0,0,0.08); */
}
.index-item img{
   width: 335px;
   height: 180px;
}
.index-item h3{
    margin-top: 10px;
    color: #494949;
    
}
.index-item p{
    margin-top: 10px;
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    
}
.index-content{
    height: 65px;
    overflow: hidden;
}
/* .index-item span{
    margin-top: 10px;
    font-size: 12px;
    color: #ccc;
} */

</style>
