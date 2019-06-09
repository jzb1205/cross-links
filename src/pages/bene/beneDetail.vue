<template>
    <div class="detail-main">
        <com-detail-aside :asideList='asideList'></com-detail-aside>
        <div class="detail-right">
            <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
            <com-service-detail-main :asideList='asideList' :dataMap="dataMap" :id='$route.query.id'></com-service-detail-main>
        </div>
    </div>
</template>

<script>
import ComDetailAside from '@/components/ComDetailAside/ComDetailAside'
import ComBreadCrumbs from '@/components/ComBreadCrumbs/ComBreadCrumbs'
import ComServiceDetailMain from '@/components/ComDetailMain/ComServiceDetailMain'
export default {
    components:{
        ComDetailAside,
        ComBreadCrumbs,
        ComServiceDetailMain
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
            ],
            dataMap:{}
        }
    },
    methods:{
        //修改数据详情
        getPolicyById () {
            this.$post(this.$api.bene.getPolicyById, {
                id: this.$route.query.id
            }).then(res => {
                if (res.code === '000' && res.data) {
                    this.dataMap = Object.assign({},res.data)
                } else {
                    this.$message({
                        message: '获取惠政信息失败',
                        type: 'error'
                    })
                }
            })
        },
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
