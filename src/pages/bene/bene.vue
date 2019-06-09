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
                    <div class='adressSelect'>
                        <span>厦门&nbsp;<i class="el-icon-arrow-down"></i></span>
                        <com-dist-picker class="select" :address='address' @getAddress='getAddress'></com-dist-picker>
                    </div>
                    <span>&nbsp;&nbsp;全部类型<i class="el-icon-arrow-down"></i> &nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked">可在线申办</el-checkbox>
                </div>
                <div class="right">
                    共{{dataMap && dataMap.total}}个事项
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
                    <el-table-column width="180"
                                    label="区域">
                        <template slot-scope="scope">
                            <span>{{scope.row.provinceName + scope.row.cityName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column 
                            prop="description"
                            label="内容">
                    </el-table-column>
                    <el-table-column prop="policyStatus"
                                    width="120"
                                    label="状态">
                    </el-table-column>
                    <el-table-column width="120"
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
            list: [],
            
            address: {
                cityCode:'',
                cityName:'',
                provinceCode:'',
                provinceName:'',
            }
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
            console.log('this.$store.state.beneMap')
            console.log(this.$store.state.beneMap)
            return this.$store.state.beneMap || {};
        }
    },
    mounted(){
        document.getElementsByClassName('bene-dis-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    created(){
        this.$store.dispatch('getType',{ typeCode:'policyBigType',class:'1'})
        this.$store.dispatch('getType',{ typeCode:'policyPersonal',class:'2'})
        this.getPolicyPage()
    },
    methods:{
        //获取区域信息
        getAddress(value){
            this.address = {
                cityCode:value.city.code,
                cityName:value.city.value,
                provinceCode:value.province.code,
                provinceName:value.province.value,
            }
        },
        getChildType(value){
            this.curType = value;
        },
        getChildTag(value){
            this.curTab = value;
        },
        handleClick(row){
            this.$router.push({
                path:'/benContaner/beneDetail',
                query:{ 
                    id:row.id
                }
            })
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
    },
    watch:{
        'curType'(){
            let typeCode = 'huiTaipolicy'
            switch (this.curType) {
                case '0':
                    typeCode = 'policyPersonal'
                    break;
                case '2':
                    typeCode = 'huiTaipolicy'
                    break;
                default:
                    typeCode = 'corporateAffairs'
                    break;
            }
            this.$store.dispatch('getType',{ typeCode:typeCode,class:'2'})
        }
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
                .adressSelect{
                    position: relative;
                    &>span{

                    }
                    .select{
                        position: absolute;
                        z-index: 2;
                    }
                }
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
