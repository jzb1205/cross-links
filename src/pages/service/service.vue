<template>
    <div class="service">
        <div class="server-dis-img">
            <img class="se-img" src="../../assets/img/service-banner.jpg" alt="">
            <com-tab-nav :tablist='typeMap' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='secTypeMap'></com-more-condition>
            <div class="listContion">
                <div class="left">
                    全部服务清单
                </div>
                <div class="right">
                    共{{total}}个服务
                </div>
            </div>
            <div class="table-list">
                <el-table :data="list"
                        row-class-name="changeCss"
                      style="width: 100%">
                    <el-table-column prop="title"
                                    width="200"
                                    label="服务标题">
                    </el-table-column>
                    <el-table-column prop="name"
                                    label="服务名称"
                                    width="120">
                    </el-table-column>
                    <el-table-column prop="type"
                                    label="服务类型"
                                    width="100">
                    </el-table-column>
                    <el-table-column prop="introduction"
                                    label="服务简介">
                    </el-table-column>
                    <el-table-column prop="payType"
                                    label="是否收费"
                                    width="10">
                            <template slot-scope="scope">
                                <span>{{scope.row.payType==='0'?'否':"是"}}</span>
                            </template>
                    </el-table-column>
                    <el-table-column prop="amount"
                                    width="100"
                                    label="服务收费">
                    </el-table-column>
                    <el-table-column prop="timeLimit"
                                    label="服务期限"
                                    width="100">
                    </el-table-column>
                    <el-table-column prop="baseCoding"
                                    label="创建时间"
                                    width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.createTime | timeFormat}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="80"
                                    align="right"
                                    label="操作">
                        <template slot-scope="scope">
                            <div class="option-btn">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                             </div>
                        </template>
                    </el-table-column>
                </el-table>
                <com-pagination :rows='rows' :page='page' :total='total' @getList='querySiListPage'></com-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import ComTabNav from '@/components/ComTabNav/ComTabNav'
import ComMoreCondition from '@/components/ComMoreCondition/ComMoreCondition'
export default {
    components:{
        ComTabNav,
        ComMoreCondition
    },
    data(){
        return {
            page:1,
            rows:10,
            total:0,
            tablist:[
                {
                    id:0,
                    name:'商事服务'
                },
                {
                    id:1,
                    name:'金融服务'
                },
                {
                    id:2,
                    name:'生活服务'
                },
            ],
            curType:0,
            tagList: [
                {
                    id: '',
                    tagName: '全部类型'
                },
                {
                    id: '0',
                    tagName: '时政要闻'
                },
                {
                    id: '1',
                    tagName: '财经动态'
                },
                {
                    id: '2',
                    tagName: '民生广角'
                },
                {
                    id: '3',
                    tagName: '海峡两岸'
                },
                {
                    id: '4',
                    tagName: '其他'
                },
                {
                    id: '5',
                    tagName: '时政要闻'
                },
                {
                    id: '6',
                    tagName: '财经动态'
                },
                {
                    id: '7',
                    tagName: '民生广角'
                },
                {
                    id: '8',
                    tagName: '海峡两岸'
                },
                {
                    id: '9',
                    tagName: '其他'
                },
                {
                    id: '10',
                    tagName: '时政要闻'
                },
                {
                    id: '11',
                    tagName: '财经动态'
                },
                {
                    id: '12',
                    tagName: '民生广角'
                },
                {
                    id: '13',
                    tagName: '海峡两岸'
                },
                {
                    id: '14',
                    tagName: '其他'
                }
            ],
            curTab:'',
            checked:false,
            list: []
        }
    },
    mounted(){
        document.getElementsByClassName('server-dis-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    created () {
        this.secTypeMap = []
        this.querySiListPage()
        this.$store.dispatch('getType',{ typeCode:'serviceBigType',class:'1'})
    },
    computed:{
        typeMap(){
            return this.$store.state.searchList;
        },
        secTypeMap(){
            return this.$store.state.secSearchList;
        },
        dataMap(){
            this.list = this.$store.state.getServiceMap.data.list || []
            this.total = this.$store.state.getServiceMap.data.total || 0
            return this.$store.state.getServiceMap;
        }
    },
    methods:{
        getChildType(value){
            this.curType = value;
        },
        getChildTag(value){
            this.curTab = value;
        },
        handleClick(){
            this.$router.push('/serviceDetail')
        },
        querySiListPage(value){
            let params = {
                page:value && value.page || 1,
                rows:value && value.rows || 10,
                type:this.curTab
            }
            params.type = params.type === '0'?'':params.type
            this.$store.dispatch('querySiListPage',params)
        },
    },
    watch:{
        'curType'(){
            let typeCode = 'businessService'
            switch (this.curType) {
                case '0':
                    typeCode = 'businessService'
                    break;
                case '1':
                    typeCode = 'financeService'
                    break;
                default:
                    typeCode = 'lifeService'
                    break;
            }
            this.$store.dispatch('getType',{ typeCode:typeCode,class:'2'})
        }
    }
}
</script>

<style lang="less" scoped>
.service{
    .server-dis-img {
        position: relative;
        width: 100%;
        overflow: hidden;
        .se-img{
            width:100%;
        }
        .tab-nav{
            width: 1200px;
            height: 55px;
            margin: -59px auto 0;
            background: rgba(240, 180, 66, .5);
            display: flex;
        }
    }
    .info-main {
        width: 1180px;
        min-height: 700px;
        margin: 29px auto 30px;
        padding: 20px 10px;
        border: 1px solid #f2f2f2;
        background: #fff;
        .listContion{
            height: 50px;
            line-height:70px;
            overflow: hidden;
            font-size:14px;
            .left{
                float: left;
            }
            .right{
                float: right;
            }
        }
    }
    .option-btn{
        .el-button+.el-button{
            margin-left: 0;
        }
    }

}
</style>
