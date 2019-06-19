<template>
    <div class="service">
        <div class="server-dis-img">
            <img class="se-img" src="../../assets/img/service-banner.jpg" alt="">
            <com-tab-nav :tablist='typeMap' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='secTypeMap' @getChildTag='getChildTag' :curTab='curTab'></com-more-condition>
            <div class="listContion">
                <div class="left">
                    全部服务清单
                </div>
                <div class="right">
                    共{{dataMap.total}}个服务
                </div>
            </div>
            <ul class="itemList">
                <li class="overflow" v-if="dataMap.list.length>0" v-for="it in dataMap.list" :key="it.id">
                    <div class="fl itemImg">
                        <img @click="toDetail(it.id)" :src="imgHttp+it.process" alt="">
                    </div>
                    <div class="fl itemDetail">
                        <p class="title" @click="toDetail(it.id)" >{{it.title}}</p>
                        <p class="type">类型：{{it.name?it.name:it.type}}</p>
                        <p class="tag">是否收费：{{it.payType==='0'?'免费':it.amount}}</p>
                        <p class="address">服务期限：<span>{{it.timeLimit}}</span></p>
                    </div>
                    <div class="fr detailBtn" @click="toDetail(it.id)">
                            查看详情
                    </div>
                </li>
            </ul>
            <com-pagination :rows='rows' :page='page' :total='dataMap.total' @getList='querySiListPage'></com-pagination>
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
            imgHttp:this.$imgUrl
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
            //点击一级查询 默认全部
            this.curTab = '';
            this.querySiListPage()
        },
        getChildTag(value){
            this.curTab = value;
            this.querySiListPage()
        },
        toDetail(id){
            if (!id) {
                this.$message({
                    message:'资讯Id不能为空',
                    type:'error'
                })
                return;
            }
            this.$router.push({
                path:'/serviceContaner/serviceDetail',
                query:{ 
                    id:id
                }
            })
        },
        querySiListPage(value){
            let params = {
                page:value && value.page || 1,
                rows:value && value.rows || 10,
                type:this.curType,
                name:this.curTab
            }
            this.$store.dispatch('querySiListPage',params)
        },
    },
    watch:{
        'curType'(){
            this.curTab='' //一级类型改变时 二级类型默认 全部类型 项
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
@import url('../../assets/css/comList');
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
        width: 1120px;
        min-height: 700px;
        margin: 29px auto 30px;
        padding: 20px 40px;
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
