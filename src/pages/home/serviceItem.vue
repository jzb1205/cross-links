<template>
    <div class="serviceItem">
        <div class="banner"></div>
         <div class="list_pro">
             <div class="l_title">
                <h1>服务项目</h1>
                <ul>
                    <li v-for="it in navTitle" :key="it.id">
                        <a href="#">{{it.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="l_box gszc">
                <div class="select_btn fl">
                    <h2>{{dataList[0].title}}</h2>
                    <ul>
                        <li v-for="is in dataList[0].navList" :key="is.id" :class="{'cur':curgszcId === is.id}" @click='getgszcId(is.id)'>{{is.name}}</li>
                    </ul>
                    <p>
                        <img :src=dataList[0].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[0].navList" :key="is.id"  v-if="curgszcId === is.id">
                    <ul>
                        <li>
                            <h3>{{is.detail.subTitle}}</h3>
                            <dt>
                                {{is.detail.info1}}
                                <br>
                                {{is.detail.info2}}
                                <br>
                                {{is.detail.info3}}
                            </dt>
                            <span>服务费：<i>{{is.detail.payAmount}}</i></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l_box gsbg">
                <div class="select_btn fl">
                    <h2>{{dataList[1].title}}</h2>
                    <ul>
                        <li v-for="is in dataList[1].navList" :key="is.id" :class="{'cur':curgsbgId === is.id}" @click='getgsbgId(is.id)'>{{is.name}}</li>
                    </ul>
                    <p>
                        <img :src=dataList[1].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[1].navList" :key="is.id"  v-if="curgsbgId === is.id">
                    <ul>
                        <li>
                            <h3>{{is.detail.subTitle}}</h3>
                            <dt>
                                {{is.detail.info1}}
                                <br>
                                {{is.detail.info2}}
                                <br>
                                {{is.detail.info3}}
                            </dt>
                            <span>服务费：<i>{{is.detail.payAmount}}</i></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l_box zzbl">
                <div class="select_btn fl">
                    <h2>{{dataList[2].title}}</h2>
                    <p>
                        <img :src=dataList[2].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[2].navList" :key="is.id">
                    <ul>
                        <li>
                            <h3>{{is.detail.subTitle}}</h3>
                            <dt>
                                {{is.detail.info1}}
                                <br>
                                {{is.detail.info2}}
                                <br>
                                {{is.detail.info3}}
                            </dt>
                            <span>服务费：<i>{{is.detail.payAmount}}</i></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l_box cyfd">
                <div class="select_btn fl">
                    <h2>{{dataList[3].title}}</h2>
                    <p>
                        <img :src=dataList[3].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[3].navList" :key="is.id">
                    <ul>
                        <li>
                            <h3>{{is.detail.subTitle}}</h3>
                            <dt>
                                {{is.detail.info1}}
                                <br>
                                {{is.detail.info2}}
                                <br>
                                {{is.detail.info3}}
                            </dt>
                            <span>服务费：<i>{{is.detail.payAmount}}</i></span>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            curgszcId:'0',
            curgsbgId:'0',
            navTitle:[
                {
                    id:0,
                    name:'工商服务'
                },
                {
                    id:1,
                    name:'运营服务'
                },
                {
                    id:2,
                    name:'上市规划'
                },
                {
                    id:3,
                    name:'投融资服务'
                }
            ],
            dataList:[
                {
                    type:'gszc',
                    id:'0',
                    title:'工商注册',
                    img:require('../../assets//img/inter/list_ico_1.png'),
                    navList:[
                        {
                            id:'0',
                            name:'内资公司注册',
                            detail:{
                                subTitle:'内资公司注册',
                                info1:'时间：20个工作日',
                                info2:`网上工商名核→网下取名核通知→网上设
                                立申请→网下提交设立资料→领取营业执照→刻章
                                等事项→开立银行基本账户`,
                                payAmount:'1040元'
                            }
                        },
                        {   
                            id:'1',
                            name:'外资公司注册',
                            detail:{
                                subTitle:'外资公司注册',
                                info1:'时间：30个工作日',
                                info2:`网上工商名核→网下取名核通知→网上商务局备案
                                或审批→网下取备案通知书→网上设立申请→网下提交设
                                资料→领取营业执照→刻章等事项→开立银行基本账户及外币`,
                                payAmount:'1950元'
                            }
                        },
                        {
                            id:'2',
                            name:'个体工商户',
                            detail:{
                                subTitle:'个体工商户',
                                info1:'时间：20个工作日',
                                info2:'名称预核准→领取营业执照→刻章等事项→开立银行基本账户→国税、地税的报到',
                                payAmount:'390元'
                            }
                        }
                    ]
                },
                {
                    type:'gsbg',
                    id:'0',
                    title:'工商变更',
                    img:require('../../assets//img/inter/list_ico_2.png'),
                    navList:[
                        {
                            id:'0',
                            name:'基本信息变更',
                            detail:{
                                subTitle:'基本信息变更',
                                info1:'名称变更：营业执照更新→重新刻章→银行基本账户更新→国税/地税的名称更新（时间：20个工作日）',
                                info2:`法定代表人变更：营业执照更新→重新刻章→银行基本账户更新→国税/地税的名称更新（时间：10个工作日）`,
                                info3:`股权变更：营业执照更新→银行基本账户更新→国税/地税的名称更新（时间：20个工作日）`,
                                payAmount:'1040元/650元/650元'
                            }
                        },
                        {   
                            id:'1',
                            name:'经营变更',
                            detail:{
                                subTitle:'经营期限变更/经营范围变更',
                                info1:'时间：10个工作日',
                                info2:`经营期限变更：营业执照更新→银行基本账户更新→国税/地税的名称更新`,
                                info3:`经营范围变更：营业执照更新→银行基本账户更新→国税/地税的名称更新`,
                                payAmount:'650元'
                            }
                        },
                        {
                            id:'2',
                            name:'资产变更',
                            detail:{
                                subTitle:'资产变更',
                                info1:'时间：10个工作日',
                                info2:`增资：营业执照更新→银行基本账户更新→国税/地税的名称更新`,
                                info3:`减资：报纸公示→营业执照更新→银行基本账户更新→国税/地税的名称更新`,
                                payAmount:'650元'
                            }
                        },
                        {
                            id:'3',
                            name:'注册地址变更',
                            detail:{
                                subTitle:'注册地址变更',
                                info1:'时间：10个工作日',
                                info2:`同区：营业执照更新→银行基本账户更新→国税/地税的名称更新`,
                                info3:`不同区：完成地址迁入、迁出的工作→营业执照更新→银行基本账户更新→完成税务的迁入、迁出→国税/地税的名称更新`,
                                payAmount:'650元/1040元'
                            }
                        },
                        {
                            id:'4',
                            name:'银行基本变更',
                            detail:{
                                subTitle:'银行基本变更',
                                info1:'时间：10个工作日',
                                info2:`开设一般户→注销基本户→注册新的基本户→国税/地税的银行关联变更`,
                                info3:``,
                                payAmount:'650元'
                            }
                        }
                    ]
                },
                {
                    type:'zzbl',
                    id:'0',
                    title:'资质办理',
                    img:require('../../assets//img/inter/list_ico_3.png'),
                    navList:[
                        {
                            id:'0',
                            name:'',
                            detail:{
                                subTitle:'内资公司注册',
                                info1:`食品经营许可证 1040元 / 卫生许可 1300元 / 酒类许可 1300元`,
                                info2:`环评审批 1300元起 / 劳务派遣许可 3900元`,
                                info3:`道路运输许可 10400元/项（增加一项加1300元）/ 进出口权 2000元`,
                                payAmount:'1040元起'
                            }
                        }
                    ]
                },
                {
                    type:'cyfd',
                    id:'0',
                    title:'创业辅导',
                    img:require('../../assets//img/inter/list_ico_3.png'),
                    navList:[
                        {
                            id:'0',
                            name:'',
                            detail:{
                                subTitle:'创业辅导',
                                info1:`1.行业调查：行业数据、行业政策等；`,
                                info2:`2.可行性分析：竞争对手分析、财务数据分析、风险分析等；`,
                                info3:`3.管理体系指导：人力资源、行政管理、财务管理等。`,
                                payAmount:'19500元'
                            }
                        }
                    ]
                }
            ]
        }
    },
    created(){
    },
    methods:{
        getgszcId(id){
            this.curgszcId = id
        },
        getgsbgId(id){
            this.curgsbgId = id
        }
    }
}
</script>

<style lang='less' scoped>
.serviceItem{
    .banner{
        width: 100%;
        height: 500px;
        background: url('../../assets//img/inter/serviceItem.jpg') no-repeat center center;
    }
    .fl{
        float: left;
    }
    .list_pro{
        .l_title{   
            width: 100%;
            padding: 90px 0 30px 0;
            h1{    
                font-size: 35px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 10px;
            }
            ul{    
                width: 450px;
                height: 50px;
                margin: 0 auto;
                li{
                    float: left;
                    margin: 5px;
                    border: 1px solid #333;
                    a{
                        display: block;
                        width: 100px;
                        height: 35px;
                        text-align: center;
                        line-height: 35px;
                        font-size: 14px;
                    }
                }
            }
        }
        .select_btn{
            width: 220px;
            height: 350px;
            position: relative;
            h2{
                padding-left: 30px;
                height: 60px;
                line-height: 60px;
                font-size: 25px;
                color: #FFF;
            }
            ul{
                padding-left: 89px;
                /* padding-top: 30px; */
                li{
                    width: 115px;
                    padding-left: 15px;
                    height: 38px;
                    margin-bottom: 5px;
                    color: #FFF;
                    text-align: left;
                    line-height: 38px;
                    border: 1px solid #FFF;
                    cursor: pointer;
                    &.cur{
                        background-color: #FFF;
                        color: #333;
                        cursor: pointer;
                    }
                }
            }
            p{
                position: absolute;
                left: 20px;
                bottom: 10px;
                img{
                    border:none;
                }
            }
        }
        .select_txt{
            ul{
                width: 880px;
                height: 250px;
                margin: 50px;
                overflow: hidden;
                li{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    h3{
                        position: relative;
                        font-size: 21px;
                        display: block;
                        color: #000;
                        padding-left: 15px;
                        height: 25px;
                        line-height: 25px;
                        text-align: left;
                        margin-bottom: 30px;
                        &::before{
                            content: "";
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            display: block;
                            width: 3px;
                            height: 25px;
                            background-color: red;
                            overflow: hidden;
                        }
                        &::after{
                            content: "";
                            position: absolute;
                            top: 12px;
                            left: 150px;
                            display: block;
                            width: 730px;
                            height: 1px;
                            background: #e1e1e1;
                        }
                    }
                    dt{
                        color: #ccc;
                        line-height: 24px;
                        max-height: 130px;
                    }
                    &>span{
                        position: absolute;
                        bottom: 15px;
                        left: 0px;
                        font-size: 18px;
                        i{
                            color: red;
                            font-size: 35px;
                        }
                    }
                }
            }
        }
        .l_box{
            width: 1200px;
            height: 350px;
            margin: 0 auto;
            margin-bottom: 30px;
        }
        .gszc{
            border: 2px solid #77D066;
            .select_btn{
                background-color: #77D066;
            }
        }
        .gsbg{
            border: 2px solid #FFB323;
            .select_btn{
                background-color: #FFB323;
                ul{
                    margin-top:20px;
                }
            }
        }
        .zzbl{
            border: 2px solid #55B3E2;
            .select_btn{
                background-color: #55B3E2;
            }
        }
        .cyfd{
            border: 2px solid #77D066;
            .select_btn{
                background-color: #77D066;
            }
        }
    }
}
</style>
