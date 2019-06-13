<template>
    <div class="detail-main">
        <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
        <com-bene-detail-main :dataMap="dataMap" :attachmentList='attachmentList' :id='$route.query.id'></com-bene-detail-main>
    </div>
</template>

<script>
import ComBreadCrumbs from '@/components/ComBreadCrumbs/ComBreadCrumbs'
import ComBeneDetailMain from '@/components/ComDetailMain/ComBeneDetailMain'
export default {
    components:{
        ComBreadCrumbs,
        ComBeneDetailMain
    },
    data(){
        return {
            breadList:[
                {
                    path:'/benContaner',
                    name:'通惠政'
                },
                {
                    path:'',
                    name:'惠政详情'
                }
            ],
            dataMap:{},
            attachmentList:[]
        }
    },
    created(){
        this.getPolicyById()
        this.getAttachmentList()
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
        //附件
        getAttachmentList () {
            //businessType 资讯0 惠政1 办事指南2 服务3
            this.$post(this.$api.attatch.getAttachmentList, {
                businessId: this.$route.query.id,
                businessType:'1'  
            }).then(res => {
                if (res.code === '000' && res.data) {
                    this.attachmentList = res.data || []

                } else {
                    this.$message({
                        message: '获取服务信息失败',
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
    width:1200px;
    margin:15px auto 25px;
    overflow: hidden;
    .detail-right{
        margin-left:20px;
        float:left;
    }
}
</style>
