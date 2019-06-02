<template>
    <div class="detail-main">
        <com-detail-aside :asideList='asideList'></com-detail-aside>
        <div class="detail-right">
            <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
            <com-detail-main :asideList='asideList'></com-detail-main>
        </div>
    </div>
</template>

<script>
import ComDetailAside from '@/components/ComDetailAside/ComDetailAside'
import ComBreadCrumbs from '@/components/ComBreadCrumbs/ComBreadCrumbs'
import ComDetailMain from '@/components/ComDetailMain/ComDetailMain'
export default {
    components:{
        ComDetailAside,
        ComBreadCrumbs,
        ComDetailMain
    },
    data(){
        return {
            breadList:[
                {
                    path:'/bene',
                    name:'通惠政'
                },
                {
                    path:'',
                    name:'惠政详情'
                }
            ],
            asideList:[
                {
                    id:'serve_aside_0',
                    name:'基本信息'
                },
                {
                    id:'serve_aside_1',
                    name:'受理条件'
                },
                {
                    id:'serve_aside_2',
                    name:'申请材料'
                },
                {
                    id:'serve_aside_3',
                    name:'办理地点'
                },
                {
                    id:'serve_aside_4',
                    name:'办理流程'
                },
                {
                    id:'serve_aside_5',
                    name:'办理方式'
                },
                {
                    id:'serve_aside_6',
                    name:'审批证件'
                },
                {
                    id:'serve_aside_7',
                    name:'审批收费'
                },
                {
                    id:'serve_aside_8',
                    name:'权利义务'
                },
                {
                    id:'serve_aside_9',
                    name:'咨询收费'
                },
                {
                    id:'aside_10',
                    name:'常见问题'
                }
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.detail-main{
    min-height:500px;
    max-width:1320px;
    min-width:1200px;
    margin:15px auto 25px;
    overflow: hidden;
    .detail-right{
        margin-left:20px;
        float:left;
    }
}
</style>
