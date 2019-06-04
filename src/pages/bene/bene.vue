<template>
    <div class="bene">
        <div class="bene-dis-img">
            <img class="se-img" src="../../assets/img/bene-banner.jpg" alt="">
            <com-tab-nav :tablist='typeMap' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='secTypeMap'></com-more-condition>
            <div class="listContion">
                <div class="left">
                    <span>厦门&nbsp;<i class="el-icon-arrow-down"></i></span>
                    <span>&nbsp;&nbsp;全部类型<i class="el-icon-arrow-down"></i> &nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked">可在线申办</el-checkbox>
                </div>
                <div class="right">
                    共1235个事项，其中456项可在线申办
                </div>
            </div>
            <div class="table-list">
                <el-table :data="dataMap && dataMap.list"
                        row-class-name="changeCss"
                      style="width: 100%">
                    <el-table-column prop="title"
                                    width="220"
                                    label="标题">
                    </el-table-column>
                    <el-table-column prop="authorId"
                                    label="	发布人ID"
                                    width="120">
                    </el-table-column>
                    <el-table-column prop="type"
                                    width="180"
                                    label="类型">
                    </el-table-column>
                    <el-table-column prop="source"
                                    width="220"
                                    label="来源">
                    </el-table-column>
                    <el-table-column prop="policyStatus"
                                    width="120"
                                    label="状态">
                    </el-table-column>
                    <el-table-column width="80"
                                    align="right"
                                    label="操作">
                        <template slot-scope="scope">
                            <div class="option-btn">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">在线办理</el-button>
                                <el-button @click="handleClick(scope.row)" type="text" size="small">申请材料</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <com-pagination :rows='rows' :page='page' :total='dataMap && dataMap.total' @getList='getPolicyPage'></com-pagination>
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
            list: []
        }
    },
    created(){
        this.getPolicyPage()
    },
    computed:{
        typeMap(){
            return this.$store.state.searchList;
        },
        secTypeMap(){
            return this.$store.state.secSearchList;
        },
        dataMap(){
            return this.$store.state.beneMap.data;
        }
    },
    mounted(){
        document.getElementsByClassName('bene-dis-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    created(){
        this.getPolicyPage()
    },
    methods:{
        getChildType(value){
            this.curType = value;
        },
        getChildTag(value){
            this.curTab = value;
        },
        handleClick(){
            this.$router.push('/beneContaner/serviceDetail')
        },
        getPolicyPage(value){
            let params = {
                page:value && value.page || 1,
                rows:value && value.rows || 10,
                type:this.curTab
            }
            params.type = params.type === '0'?'':params.type
            this.$store.dispatch('getPolicyPage',params)
        },
    }
}
</script>

<style lang="less" scoped>
.bene{
    .bene-dis-img {
        position: relative;
        width: 100%;
        overflow: hidden;
        min-width:1200px;
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
