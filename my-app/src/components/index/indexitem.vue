<template>
    <div>

        <div v-for="(v,i) in indexarr" :key="i" @click="fun(v.id)" >
        <Indexitem :iimgurl="v.image_hlarge" :ititle="v.title" :itext="v.content" :iauthor="v"></Indexitem>
        </div>

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
    methods: {
        fun(id){
            this.$router.push("/indetail/"+id);
        }
    },
    
}
</script>
<style scoped>

</style>
