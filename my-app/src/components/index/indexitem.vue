<template>
    <div>


        <Indexitem v-for="(v,i) in indexarr" :key="i" :iimgurl="v.image_hlarge" :ititle="v.title" :itext="v.content" :iauthor="v"></Indexitem>


    </div>
    
</template>
<script>
import Indexitem from './indexlist'
export default {
    components:{
        Indexitem
    },
    created() {
        this.$store.dispatch("axiosIndex");
    },
    computed: {
        indexarr(){
            return this.$store.getters.getindexarr;

        }
        
    },
    
}
</script>
<style scoped>

</style>
