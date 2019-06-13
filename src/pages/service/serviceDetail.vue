<template>
    <div class="detail-main">
        <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
        <com-service-detail-main :dataMap="dataMap" :attachmentList='attachmentList' :id='id'></com-service-detail-main>
    </div>
</template>

<script>
import ComBreadCrumbs from '@/components/ComBreadCrumbs/ComBreadCrumbs'
import ComServiceDetailMain from '@/components/ComDetailMain/ComServiceDetailMain'
export default {
    components:{
        ComBreadCrumbs,
        ComServiceDetailMain
    },
    data(){
        return {
            breadList:[
                {
                    path:'/serviceContaner',
                    name:'通服务'
                },
                {
                    path:'',
                    name:'服务详情'
                }
            ],
            dataMap:{},
            attachmentList:[],
            id:this.$route.query.id
        }
    },
    created(){
        this.querySiById()
        this.getAttachmentList()
    },
    methods:{
        querySiById(){
            this.$post(this.$api.service.querySiById,{
                id:this.$route.query.id
            }).then((res)=>{
                if (res.code === '000') {
                    this.dataMap = res.data || {}
                }else{
                    this.$message({
                        message: '获取服务详情失败',
                        type: 'error'
                    });
                }
            })
        },
        //附件
        getAttachmentList () {
            //businessType 资讯0 惠政1 办事指南2 服务3
            this.$post(this.$api.attatch.getAttachmentList, {
                businessId: this.$route.query.id,
                businessType:'3'  
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
        width:1050px;
        margin-left:20px;
        float:left;
    }
}
</style>
