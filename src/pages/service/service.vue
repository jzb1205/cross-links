<template>
    <div class="service">
        <div class="server-dis-img">
            <img class="se-img" src="../../assets/img/service-banner.jpg" alt="">
            <com-tab-nav :tablist='typeMap' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='secTypeMap' @getChildTag='getChildTag'></com-more-condition>
            <div class="listContion">
                <div class="left">
                    全部服务清单
                </div>
                <div class="right">
                    共{{dataMap.total}}个服务
                </div>
            </div>
            <div class="table-list">
                <el-table :data="dataMap.list"
                        row-class-name="changeCss"
                      style="width: 100%">
                    <el-table-column prop="title"
                                    width="240"
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
                                    width="80">
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
                                    width="140">
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
                <com-pagination :rows='rows' :page='page' :total='dataMap.total' @getList='querySiListPage'></com-pagination>
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
            curType:0,
            curTab:'',
            checked:false,
        }
    },
    mounted(){
        document.getElementsByClassName('server-dis-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    created () {
        this.querySiListPage()
        this.$store.dispatch('getType',{ typeCode:'serviceBigType',class:'1'})
        this.$store.dispatch('getType',{ typeCode:'businessService',class:'2'})
    },
    computed:{
        typeMap(){
            return this.$store.state.searchList;
        },
        secTypeMap(){
            return this.$store.state.secSearchList || [];
        },
        dataMap(){
            let mapList = this.$store.state.serviceMap && this.$store.state.serviceMap.data
            return {
                list: mapList &&  mapList.list || [],
                total: mapList &&  mapList.total  || 0
            }
        }
    },
    methods:{
        getChildType(value){
            this.curType = value;
        },
        getChildTag(value){
            this.curTab = value;
            this.querySiListPage()
        },
        handleClick(row){
            this.$router.push({
                path:'/serviceContaner/serviceDetail',
                query:{ 
                    id:row.id
                }
            })
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
        min-width:1200px;
        .se-img{
            width:100%;
            min-width:1200px;
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
