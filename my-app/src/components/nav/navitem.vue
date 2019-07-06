<template>
    <div>
        <Navlist v-for="(v,i) in arr" :key="i" :title="v.title" :content="v.connet" :linkurl="v.url" :color="v.colorstyle"></Navlist>
    </div>
</template>
<script>
import Navlist from './navlist'
export default {
    components:{

        Navlist
    },
    data() {
        return {
            arr:[
                {title:"电影",connet:"影院热映",colorstyle:"rgb(35, 132, 232)",url:"/movie"},
                {title:"电视",connet:"正在热播",colorstyle:"rgb(122, 106, 219)",url:"/tv"},
                {title:"图书",connet:"畅销排行",colorstyle:"rgb(159, 120, 96)",url:"/books"},
                {title:"同城",connet:"周末活动",colorstyle:"rgb(230, 70, 126)",url:"/movie"},
                {title:"小组",connet:"志趣相投",colorstyle:"rgb(42, 184, 204)",url:"/movie"},
                {title:"音乐",connet:"新碟榜",colorstyle:"rgb(244, 143, 46)",url:"/movie"},
                {title:"阅读",connet:"电子书",colorstyle:"rgb(159, 120, 96)",url:"/movie"},
                {title:"游戏",connet:"虚拟世界",colorstyle:"rgb(87, 116, 197)",url:"/movie"},
                {title:"应用",connet:"玩手机",colorstyle:"rgb(89, 108, 221)",url:"/movie"},
                {title:"广播",connet:"友邻动态",colorstyle:"rgb(225, 100, 77)",url:"/movie"},
                {title:"FM",connet:"红心歌单",colorstyle:"rgb(64, 207, 169)",url:"/movie"},
                {title:"豆品",connet:"生活美学",colorstyle:"rgb(66, 189, 86)",url:"/movie"}
            ]
        }
    },
    
}
</script>
<style scoped>

</style>
