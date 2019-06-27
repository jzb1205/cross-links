<template>
    <div class="bene">
        <div class="bene-dis-img">
            <img class="se-img" src="../../assets/img/bene-banner.jpg" alt="">
            <com-tab-nav :tablist='typeMap' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='secTypeMap' @getChildTag='getChildTag' :curTab='curTab'></com-more-condition>
            <div class="listContion">
                <div class="left">
                    <div class='adressSelect'>
                        <span class="showAddress" @click="showPicker=!showPicker">{{address.provinceName+address.cityName}}&nbsp;<i class="el-icon-arrow-down"></i></span>
                        <transition name="el-zoom-in-top">
                            <com-dist-picker v-show='showPicker' class="select" :address='address' @getAddress='getAddress'></com-dist-picker>
                        </transition>
                    </div>
                    <div class="selectType">
                        <span>&nbsp;&nbsp;全部{{$t("message.bene.lx")}}<i class="el-icon-arrow-down"></i> &nbsp;&nbsp;&nbsp;</span>
                        <el-checkbox v-model="checked">{{$t("message.bene.kzxsb")}}</el-checkbox>
                    </div>
                </div>
                <div class="right">
                    共<span>{{dataMap && dataMap.total}}</span>{{$t("message.bene.gsx")}}
                </div>
            </div>
            <ul class="itemList">
                <li class="overflow" v-if="dataMap.list.length>0" v-for="it in dataMap.list" :key="it.id">
                    <div class="fl itemImg">
                        <img @click="toDetail(it.id)" :src="imgHttp+it.imgPath" alt="">
                    </div>
                    <div class="fl itemDetail">
                        <p class="title" @click="toDetail(it.id)" >{{it.title}}</p>
                        <p class="type">{{$t("message.bene.lx")}}：<span>{{it.type}}</span></p>
                        <p class="tag" v-if="it.tag && it.tag.split(',').length>0">{{$t("message.bene.bq")}}：<el-tag v-for="(is,index) in it.tag.split(',').slice(0,12)" :key="index">{{is}}</el-tag></p>
                        <p class="address">{{$t("message.bene.szqy")}}：<span>{{it.provinceName+it.cityName}}</span></p>
                    </div>
                    <div class="fr detailBtn" @click="toDetail(it.id)">
                            {{$t("message.bene.ckxq")}}
                    </div>
                </li>
            </ul>
            <com-pagination :rows='rows' :page='page' :total='dataMap && dataMap.total' @getList='getPolicyPage'></com-pagination>
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
                cityCode:'110000',
                cityName:'北京市',
                provinceCode:'110100',
                provinceName:'北京城区',
            },
            imgHttp:this.$imgUrl,
            showPicker:false
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
            //点击一级查询 默认全部
            this.curTab = ''
            this.getPolicyPage()
        },
        getChildTag(value){
            this.curTab = value;
            this.getPolicyPage()
        },
        toDetail(id){
            if (!id) {
                this.$message({
                    message:'惠政Id不能为空',
                    type:'error'
                })
                return;
            }
            this.$router.push({
                path:'/benContaner/beneDetail',
                query:{ 
                    id:id
                }
            })
        },
        getPolicyPage(value){
            let params = {
                page:value && value.page || 1,
                rows:value && value.rows || 10,
                type:this.curTab,
            }
            this.$store.dispatch('getPolicyPage',params)
        },
    },
    watch:{
        'curType'(){
            this.curTab = '' //一级类型改变时 二级类型默认 全部类型 项
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
@import url('../../assets/css/comList');
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
        width: 1120px;
        min-height: 700px;
        margin: 29px auto 30px;
        padding: 20px 40px;
        border: 1px solid #f2f2f2;
        background: #fff;
        .listContion{
            height: 50px;
            line-height:70px;    
            margin-bottom: 20px;
            font-size:14px;
            .left{
                float: left;
                .adressSelect{
                    position: relative;
                    display: inline;
                    float: left;
                    &>span{
                        cursor: pointer;
                    }   
                    .select{
                        position: absolute;
                        z-index: 2;
                        top:40px;
                        min-width:410px;
                    }
                }
                .selectType{
                    display: inline;
                    overflow: hidden;
                    span{
                        float: left;
                    }
                    .el-checkbox{
                        float: left;
                    }
                }
            }
            .right{
                float: right;
                span{
                    color:rgba(187, 17, 26);
                    padding:0 5px;

                }
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
