<template>
    <div class="detail-main">
        <com-detail-aside :asideList='asideList'></com-detail-aside>
        <div class="detail-right">
            <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
            <com-detail-main :asideList='asideList' :dataMap="dataMap"></com-detail-main>
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
                    path:'/serviceContaner',
                    name:'通服务'
                },
                {
                    path:'',
                    name:'服务详情'
                }
            ],
            asideList:[
                {
                    id:'serve_aside_0',
                    name:'服务类型'
                },
                {
                    id:'serve_aside_1',
                    name:'服务名称'
                },
                {
                    id:'serve_aside_2',
                    name:'服务状态'
                },
                {
                    id:'serve_aside_3',
                    name:'服务费用'
                },
                {
                    id:'serve_aside_4',
                    name:'服务简介'
                },
                {
                    id:'serve_aside_5',
                    name:'服务内容'
                },
                {
                    id:'serve_aside_6',
                    name:'表单模板'
                },
                {
                    id:'serve_aside_7',
                    name:'服务流程'
                },
                {
                    id:'serve_aside_8',
                    name:'服务期限'
                },
                {
                    id:'serve_aside_10',
                    name:'附件下载'
                }
            ],
            dataMap:{}
        }
    },
    created(){
        this.querySiById()
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
        width:1050px;
        margin-left:20px;
        float:left;
    }
}
</style>
