<template>
    <div class="serviceItem">
        <div class="banner"></div>
         <div class="list_pro">
             <div class="l_title">
                <h1>{{$t('message.moreService.fwxm')}}</h1>
                <ul>
                    <li v-for="it in navTitle" :key="it.id">
                        <a href="#">{{$t(it.name)}}</a>
                    </li>
                </ul>
            </div>
            <div class="l_box gszc">
                <div class="select_btn fl">
                    <h2>{{$t(dataList[0].title)}}</h2>
                    <ul>
                        <li v-for="is in dataList[0].navList" :key="is.id" :class="{'cur':curgszcId === is.id}" @click='getgszcId(is.id)'>{{$t(is.name)}}</li>
                    </ul>
                    <p>
                        <img :src=dataList[0].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[0].navList" :key="is.id"  v-if="curgszcId === is.id">
                    <ul>
                        <li>
                            <h3>{{$t(is.detail.subTitle)}}</h3>
                            <dt>
                                {{$t(is.detail.info1)}}
                                <br>
                                {{$t(is.detail.info2)}}
                                <br>
                                {{$t(is.detail.info3)}}
                            </dt>
                            
                            <span>服务费：
                                <i v-for="(ik,i) in is.detail.payAmount" :key="i">
                                    {{$t(ik)}}{{$t('message.moreService.item2.y')}}
                                    <em v-if="is.detail.payAmount.length<i">/</em>
                                </i>
                                {{is.detail.subNotice}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l_box gsbg">
                <div class="select_btn fl">
                    <h2>{{$t(dataList[1].title)}}</h2>
                    <ul>
                        <li v-for="is in dataList[1].navList" :key="is.id" :class="{'cur':curgsbgId === is.id}" @click='getgsbgId(is.id)'>{{$t(is.name)}}</li>
                    </ul>
                    <p>
                        <img :src=dataList[1].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[1].navList" :key="is.id"  v-if="curgsbgId === is.id">
                    <ul>
                        <li>
                            <h3>{{$t(is.detail.subTitle)}}</h3>
                            <dt>
                                {{$t(is.detail.info1)}}
                                <br>
                                {{$t(is.detail.info2)}}
                                <br>
                                {{$t(is.detail.info3)}}
                            </dt>
                            <span>服务费：
                                <i v-for="(ik,i) in is.detail.payAmount" :key="i">
                                    {{$t(ik)}}{{$t('message.moreService.item2.y')}}
                                    <em v-if="i<is.detail.payAmount.length-1">/</em>
                                </i>
                                {{is.detail.subNotice}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l_box zzbl">
                <div class="select_btn fl">
                    <h2>{{$t(dataList[2].title)}}</h2>
                    <p>
                        <img :src=dataList[2].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[2].navList" :key="is.id">
                    <ul>
                        <li>
                            <h3>{{$t(is.detail.subTitle)}}</h3>
                            <dt>
                                {{$t(is.detail.info1)}}
                                <br>
                                {{$t(is.detail.info2)}}
                                <br>
                                {{$t(is.detail.info3)}}
                            </dt>
                            <span>服务费：
                                <i v-for="(ik,i) in is.detail.payAmount" :key="i">
                                    {{$t(ik)}}{{$t('message.moreService.item2.y')}}
                                    <em v-if="is.detail.payAmount.length<i">/</em>
                                </i>
                                {{is.detail.subNotice}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l_box cyfd">
                <div class="select_btn fl">
                    <h2>{{$t(dataList[3].title)}}</h2>
                    <p>
                        <img :src=dataList[3].img alt="">
                    </p>
                </div>
                <div class="select_txt fl"  v-for="is in dataList[3].navList" :key="is.id">
                    <ul>
                        <li>
                            <h3>{{$t(is.detail.subTitle)}}</h3>
                            <dt>
                                {{$t(is.detail.info1)}}
                                <br>
                                {{$t(is.detail.info2)}}
                                <br>
                                {{$t(is.detail.info3)}}
                            </dt>
                            <span>服务费：
                                <i v-for="(ik,i) in is.detail.payAmount" :key="i">
                                    {{$t(ik)}}{{$t('message.moreService.item2.y')}}
                                    <em v-if="is.detail.payAmount.length<i">/</em>
                                </i>
                                {{is.detail.subNotice}}
                            </span>
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
            navTitleList:[
                {
                    id:0,
                    name:'message.moreService.gsfw'
                },
                {
                    id:1,
                    name:'message.moreService.yyfw'
                },
                {
                    id:2,
                    name:'message.moreService.ssgh'
                },
                {
                    id:3,
                    name:'message.moreService.trzfw'
                }
            ],
            data:[
                {
                    type:'gszc',
                    id:'0',
                    title:'message.moreService.item1.gszc',
                    img:require('../../assets//img/inter/list_ico_1.png'),
                    navList:[
                        {
                            id:'0',
                            name:'message.moreService.item1.nzgszc',
                            detail:{
                                subTitle:'message.moreService.item1.nzgszc',
                                info1:'message.moreService.item1.info10',
                                info2:`message.moreService.item1.info11`,
                                payAmount:['1040']
                            }
                        },
                        {   
                            id:'1',
                            name:'message.moreService.item1.wzgszc',
                            detail:{
                                subTitle:'message.moreService.item1.wzgszc',
                                info1:'message.moreService.item1.info20',
                                info2:`message.moreService.item1.info21`,
                                payAmount:['1950']
                            }
                        },
                        {
                            id:'2',
                            name:'message.moreService.item1.gtgsh',
                            detail:{
                                subTitle:'message.moreService.item1.gtgsh',
                                info1:'message.moreService.item1.info30',
                                info2:'message.moreService.item1.info31',
                                payAmount:['390']
                            }
                        }
                    ]
                },
                {
                    type:'gsbg',
                    id:'0',
                    title:'message.moreService.item2.gszc',
                    img:require('../../assets//img/inter/list_ico_2.png'),
                    navList:[
                        {
                            id:'0',
                            name:'message.moreService.item2.jbxxbg',
                            detail:{
                                subTitle:'message.moreService.item2.jbxxbg',
                                info1:'message.moreService.item2.info10',
                                info2:`message.moreService.item2.info11`,
                                info3:`message.moreService.item2.info12`,
                                payAmount:['1040','650','650']
                            }
                        },
                        {   
                            id:'1',
                            name:'message.moreService.item2.jybg',
                            detail:{
                                subTitle:'message.moreService.item2.fwf',
                                info1:'message.moreService.item2.info20',
                                info2:`message.moreService.item2.info21`,
                                info3:`message.moreService.item2.info22`,
                                payAmount:['650']
                            }
                        },
                        {
                            id:'2',
                            name:'message.moreService.item2.zcbg',
                            detail:{
                                subTitle:'message.moreService.item2.zcbg',
                                info1:'message.moreService.item2.info20',
                                info2:`message.moreService.item2.info30`,
                                info3:`message.moreService.item2.info31`,
                                payAmount:['650']
                            }
                        },
                        {
                            id:'3',
                            name:'message.moreService.item2.zcdzbg',
                            detail:{
                                subTitle:'message.moreService.item2.zcdzbg',
                                info1:'message.moreService.item2.info20',
                                info2:`message.moreService.item2.info40`,
                                info3:`message.moreService.item2.info41`,
                                payAmount:['650','1040']
                            }
                        },
                        {
                            id:'4',
                            name:'message.moreService.item2.yhjbbg',
                            detail:{
                                subTitle:'message.moreService.item2.yhjbbg',
                                info1:'message.moreService.item2.info20',
                                info2:`message.moreService.item2.info50`,
                                info3:``,
                                payAmount:['650']
                            }
                        }
                    ]
                },
                {
                    type:'zzbl',
                    id:'0',
                    title:'message.moreService.item3.zzbl',
                    img:require('../../assets/img/inter/list_ico_3.png'),
                    navList:[
                        {
                            id:'0',
                            name:'',
                            detail:{
                                subTitle:'message.moreService.item3.zzbl',
                                info1:`message.moreService.item3.info1`,
                                info2:`message.moreService.item3.info2`,
                                info3:`message.moreService.item3.info3`,
                                payAmount:['1040'],
                                subNotice:'起'
                            }
                        }
                    ]
                },
                {
                    type:'cyfd',
                    id:'0',
                    title:'message.moreService.item4.cyfd',
                    img:require('../../assets//img/inter/list_ico_3.png'),
                    navList:[
                        {
                            id:'0',
                            name:'',
                            detail:{
                                subTitle:'message.moreService.item4.cyfd',
                                info1:`message.moreService.item4.info1`,
                                info2:`message.moreService.item4.info2`,
                                info3:`message.moreService.item4.info3`,
                                payAmount:['19500']
                            }
                        }
                    ]
                }
            ]
        }
    },
    created(){
    },
    computed: {
        navTitle(){
            return this.navTitleList
        },
        dataList(){
            return this.data
        }
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
