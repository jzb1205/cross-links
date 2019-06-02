<template>
    <div class="detail-main">
        <com-bread-crumbs :breadList='breadList'></com-bread-crumbs>
        <com-info-detail-main :dataMap='dataMap'></com-info-detail-main>
    </div>
</template>

<script>
import ComBreadCrumbs from '@/components/ComBreadCrumbs/ComBreadCrumbs'
import ComInfoDetailMain from '@/components/ComInfoDetailMain/ComInfoDetailMain'
export default {
    components:{
        ComBreadCrumbs,
        ComInfoDetailMain
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
            ],
            dataMap:{}
        }
    },
    created(){
        this.infoDetail()
    },
    methods:{
        //修改数据详情
        infoDetail () {
            this.$get(this.$api.information.infoDetail, {
                params: {
                    id: this.$route.query.id
                }
            }).then(res => {
                if (res.code === '000' && res.data) {
                    this.dataMap = res.data
                } else {
                    this.$message({
                        message: '获取资讯信息失败',
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
        width:1200px;
    }
}
</style>
