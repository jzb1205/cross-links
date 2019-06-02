<template>
    <div class="bene">
        <div class="bene-dis-img">
            <img class="se-img" src="../../assets/img/bene-banner.jpg" alt="">
            <com-tab-nav :tablist='tablist' @getChildType='getChildType'></com-tab-nav>
        </div>
        <div class="info-main">
            <com-more-condition :tagList='tagList'></com-more-condition>
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
                <el-table :data="tableData"
                        row-class-name="changeCss"
                      style="width: 100%">
                    <el-table-column prop="title"
                                    label="实施清单事项名称">
                    </el-table-column>
                    <el-table-column prop="date"
                                    label="目录清单事项名称"
                                    width="220">
                    </el-table-column>
                    <el-table-column prop="name"
                                    width="220"
                                    label="主管部门">
                    </el-table-column>
                    <el-table-column prop="type"
                                    width="220"
                                    label="行政划区">
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
                <com-pagination :rows='rows' :page='page' :total='total' @getList='getInfoListPage'></com-pagination>
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
                    name:'个人办事'
                },
                {
                    id:1,
                    name:'法人办事'
                },
                {
                    id:2,
                    name:'惠台政策'
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
            tableData: [
                {   
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }, 
                {
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }, 
                {
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }, 
                {
                    title:'和国防经费国家和方式',
                    date: '2016-05-02',
                    name: '王小虎',
                    type:'时政要闻'
                }
            ]
        }
    },
    mounted(){
        document.getElementsByClassName('bene-dis-img')[0].style.height = (document.body.clientWidth/1920)*329;
    },
    methods:{
        getChildType(value){
            this.curType = value;
        },
        getChildTag(value){
            this.curTab = value;
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
