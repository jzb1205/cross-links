<template>
    <div class="detail-main">
        <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
        <com-detail-main></com-detail-main>
    </div>
</template>

<script>
import ComBreadCrumbs from '@/components/ComBreadCrumbs/ComBreadCrumbs'
import ComDetailMain from '@/components/ComDetailMain/ComDetailMain'
export default {
    components:{
        ComBreadCrumbs,
        ComDetailMain
    },
    data(){
        return {
            breadList:[
                {
                    path:'/information',
                    name:'通资讯'
                },
                {
                    path:'',
                    name:'资讯详情'
                }
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.detail-main{
    min-height:500px;
    width:1200px;
    margin:15px auto 25px;
    overflow: hidden;
    .detail-right{
        margin-left:20px;
        float:left;
        width:1200px;
    }
}
</style>
