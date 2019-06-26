<template>
    <div class="home">
        <div class="home-banner">
            <el-carousel arrow='hover'>
                <el-carousel-item v-for="item in bannerList" :key="item.id" class="home-banner-item">
                    <img class="banner-img banner" :src="item.imgUrl" alt="正在加载中......">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-main">
            <div class="home-notice">
                <div class="home-notice-left">
                    <img src="../../assets/img/icon-notice.png" alt="">
                    通知公告：
                </div>
                <div class="home-notice-right">
                    <marquee width=98% onmouseover=this.stop() onmouseout=this.start()>
                        <li class="marqueeItem" v-for="item in noticeList" :key="item.id" v-html="item.content"></li>
                    </marquee>
                </div>
            </div>
            <div class="home-main-one">
                <div class="main-one-left">
                    <el-carousel height="380px" arrow='hover'>
                        <el-carousel-item v-for="item in infoList" :key="item.id" class="info-banner">
                            <img class="info-banner-img"  @click="toDetail(item,'info')" :src="$imgUrl+item.imgPath" alt="正在加载中......">
                            <div class="bottom">
                                <p class="titleNotice">{{item.title}}</p>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="main-one-right">
                    <p class="news-title">
                        <span class="title">两岸要闻</span>
                        <span class="more" @click='$router.push("/infoContaner")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in infoList" :key="index" @click="toDetail(item,'info')">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.createTime | timeFormat}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="toTw">
                <div class="main-two-one">
                    <p class="news-title">
                        <span class="title">台湾专题专栏</span>
                        <span class="more" @click='$router.push("/benContaner")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <div class="twScroll">
                        <div class='left'>
                            <img src="../../assets/img/home/22.png" alt="">
                        </div>
                        <ul class="outerLink">
                            <li class="content" v-for="it in toTw" :key='it.id'>
                                <div class="twIcon"></div>
                                <p class="twName">{{it.name}}</p>
                            </li>
                        </ul>
                        <div class='right'>
                            <img src="../../assets/img/home/23.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-main-two">
                <div class="main-two-one">
                    <p class="news-title">
                        <span class="title">惠台政策解读</span>
                        <span class="more" @click='$router.push("/benContaner")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in beneList" :key="index" @click="toDetail(item,'bene1')">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.createTime | timeFormat('YYYY-MM-DD')}}</span>
                        </li>
                    </ul>
                </div>
                <div class="main-two-four">
                    <p class="news-title">
                        <span class="title">惠台服务信息</span>
                        <span class="more" @click='$router.push("/serviceContaner")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in benesServiceList" :key="index"  @click="toDetail(item,'service')">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.createTime | timeFormat('YYYY-MM-DD')}}</span>
                        </li>
                    </ul>
                </div>
                <div class="main-two-three info">
                    <p class="news-title infoTitle">
                        <span class="title">互动栏</span>
                        <span class="resultCheck">
                            <span class="icon"></span>
                            <span class="text">结果查询</span>
                        </span>
                        <span class="toInfo">
                            <span class="icon"></span>
                            <span class="text">我要咨询</span>
                        </span>
                    </p>
                    <ul class="infoWrap">
                        <li class="onlineOnfo" v-for="(item,index) in navList" :key="index">
                            <span class="icon">
                                <img :src="item.img" alt="">
                            </span>
                            <span class='title'>{{item.title}}</span>
                            <span class="name">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <p class="news-title">
                        <span class="title">通服务</span>
                        <span class="more">
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li class='service-list' v-for="(item,index) in serviceList" :key="index" @click='$router.push("/homeContaner/serviceItem")'>
                            <span class="icon">
                                <img :src="item.imgUrl" alt="">
                            </span>
                            <span class="name">{{item.name}}</span>
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
            bannerHeight:`${(document.body.clientWidth/1920)*465}px`,
            bannerList:[
                {
                    id:0,
                    imgUrl:require(`../../assets/img/home-banner1.jpg`),
                    path:''
                },
                {
                    id:1,
                    imgUrl:require(`../../assets/img/banner2.png`),
                    path:''
                },
                {
                    id:2,
                    imgUrl:require(`../../assets/img/banner3.png`),
                    path:''
                }
            ],
            infoBannerList:[],
            noticeList:[],
            serviceList:[
                {
                    id:0,
                    imgUrl:require(`../../assets/img/home/9.png`),
                    path:'',
                    name:'工商注册'
                },
                {
                    id:1,
                    imgUrl:require(`../../assets/img/home/10.png`),
                    path:'',
                    name:'工商变更'
                },
                {
                    id:2,
                    imgUrl:require(`../../assets/img/home/11.png`),
                    path:'',
                    name:'资质办理'
                },
                {
                    id:3,
                    imgUrl:require(`../../assets/img/home/12.png`),
                    path:'',
                    name:'创业辅导'
                },
                {
                    id:4,
                    imgUrl:require(`../../assets/img/home/13.png`),
                    path:'',
                    name:'财税服务'
                },
                {
                    id:5,
                    imgUrl:require(`../../assets/img/home/14.png`),
                    path:'',
                    name:'法务咨询'
                },
                {
                    id:6,
                    imgUrl:require(`../../assets/img/home/15.png`),
                    path:'',
                    name:'运营支持'
                },
                {
                    id:7,
                    imgUrl:require(`../../assets/img/home/16.png`),
                    path:'',
                    name:'投资推荐'
                },
                {
                    id:8,
                    imgUrl:require(`../../assets/img/home/17.png`),
                    path:'',
                    name:'融资撮合'
                },
                {
                    id:9,
                    imgUrl:require(`../../assets/img/home/18.png`),
                    path:'',
                    name:'上市规划'
                },
            ],
            imgHttp:this.$imgUrl,
            toTw:[
                {
                    id:'0',
                    name:'产融云',
                    img:require('../../assets/img/home/1.png'),
                    linkUrl:'http://cr.xmsme.com/'
                },
                {
                    id:'1',
                    name:'台资板',
                    img:require('../../assets/img/home/2.png'),
                    linkUrl:'https://mp.weixin.qq.com/s/Jwe9JKr7y5rex1JK8aa-JQ'
                },
                {
                    id:'2',
                    name:'海峡论坛',
                    img:require('../../assets/img/home/3.png'),
                    linkUrl:'http://www.taiwan.cn/hxlt/'
                },
                {
                    id:'3',
                    name:'厦门银行台商信用卡',
                    img:require('../../assets/img/home/4.png'),
                    linkUrl:'http://www.xmccb.com/'
                }
            ],
            navList:[
                {
                    id:'0',
                    name:'人才申报',
                    title:'在线咨询',
                    img:require('../../assets/img/home/5.png'),
                    linkUrl:'http://cr.xmsme.com/'
                },
                {
                    id:'1',
                    title:'在线咨询',
                    name:'专利申报',
                    img:require('../../assets/img/home/6.png'),
                    linkUrl:'https://mp.weixin.qq.com/s/Jwe9JKr7y5rex1JK8aa-JQ'
                },
                {
                    id:'2',
                    title:'在线咨询',
                    name:'政策咨询',
                    img:require('../../assets/img/home/7.png'),
                    linkUrl:'http://www.taiwan.cn/hxlt/'
                },
                {
                    id:'3',
                    name:'',
                    img:require('../../assets/img/home/8.png'),
                    linkUrl:'http://www.xmccb.com/'
                }
            ]
        }
    },
    mounted(){
        this.$nextTick(()=>{
            let h = (document.body.clientWidth/1920)*465
            document.getElementsByClassName('banner-img')[0].style.height = h
            document.getElementsByClassName('el-carousel__container')[0].style.height = h
        })
    },
    created(){
        this.getNoticeInfoPage()
        this.querySiListPage()
        this.getInfoListPage()
        this.getNavigationList()
        this.getPolicyPage()
    },
    computed:{
        benesServiceList(){
            return this.$store.state && this.$store.state.serviceMap && this.$store.state.serviceMap.data && this.$store.state.serviceMap.data.list || []
        },
        infoList(){
            return this.$store.state && this.$store.state.infoMap && this.$store.state.infoMap.data && this.$store.state.infoMap.data.list || []
        },
        beneList(){
            return this.$store.state && this.$store.state.beneMap && this.$store.state.beneMap && this.$store.state.beneMap.list || []
        }
    },
    methods:{
        //获取通知公告
        getNoticeInfoPage(){
            let params = {
                page:1,
                rows:4
            }
            this.$post(this.$api.home.getNoticeInfoPage,params).then(res=>{
                if (res.code === '000') {
                    this.noticeList = res.data && res.data.list || []
                }else{
                    this.$message({
                        message:'获取通知公告列表失败',
                        type:'error'
                    })
                }
            })
        },
        //获取服务
        querySiListPage(){
            let params = {
                page:1,
                rows:5,
                type:''
            }
            this.$store.dispatch('querySiListPage',params)
        },
        //获取资讯
        getInfoListPage(){
            let params = {
                type:'',
                page:1,
                rows:8
            }
            this.$store.dispatch('getInfoListPage',params)
        },
        //获取导航
        getNavigationList(){
            this.$store.dispatch('getNavigationList',{})
        },
        //获取惠政
        getPolicyPage(){
            let params = {
                // type:'huiTaipolicy',
                type:'',
                page:1,
                rows:5
            }
            this.$store.dispatch('getPolicyPage',params)
        },
        toDetail(item,type){
            if (!item.id) {
                this.$message({
                    message:'id不能为空',
                    type:'error'
                })
                return
            }
            switch (type) {
                case 'info':
                    this.$router.push({
                        path:'/infoContaner/informationDetail',
                        query:{id:item.id}
                    })
                    break;
                case 'service':
                    this.$router.push({
                        path:'/serviceContaner/serviceDetail',
                        query:{id:item.id}
                    })
                    break;
                case 'bene1':
                    this.$router.push({
                        path:'/benContaner/beneDetail',
                        query:{ 
                            id:item.id
                        }
                    })
                    break;
                case 'bene2':
                    this.$router.push({
                        path:'/informationDetail',
                        query:{id:item.id}
                    })
                    break;
            
                default:
                    break;
            }
        }
    }
}
</script>

<style lang='less' scoped>
.home{
    .home-banner{
        width:100%;  
        min-width:1200px;  
        .banner{
            width:1200px;
        }
        .banner-img{
            width:100%;
            height:300px;
        }
    }
    .home-main{
        width:1200px;
        min-height: 700px;
        margin:33px auto 0;
        padding:15px;
        border:1px solid #f2f2f2;
        background: #fff;
        .home-notice{
            height:20px;
            line-height:20px;
            font-size:14px;
            overflow: hidden;
            .home-notice-left{
                width:100px;
                float: left;
                color: rgba(212, 104, 106);
                img{
                    width: 12px;
                    margin-right: 4px;
                }
            }
            .home-notice-right{
                width:1050px;
                float: left;
                .marqueeItem{
                    display: inline-block;
                    margin-left:100px;
                }
            }
        }
        .home-main-one{
            height:380px;
            margin-top:20px;
            overflow: hidden;
            .main-one-left{
                float: left;
                width:683px;
                .info-banner{
                    overflow: hidden;
                    .titleNotice{
                        text-align: center;
                        width: 85%;
                        color: #fff;
                        line-height:50px;
                        margin: 0 auto;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .bottom{
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        text-align: center;
                        width: 100%;
                        height:190px;
                        z-index: 103;
                        transition: all ease-out .2s;
                        background: rgba(0, 0, 0,.3);
                    }
                    .bottom{
                        margin-top:380px;
                    }
                    &:hover{
                        .bottom{
                            margin-top:330px;
                        }
                    }
                }
                // .banner-img{
                //     width:100%;
                //     cursor: pointer;
                // }
            }
            .main-one-right{
                float: right;
                width: 465px;
                .news-title{
                    border-bottom:2px solid rgb(197, 197, 197);
                    overflow: hidden;
                    .title{
                        float: left;
                        color:  rgba(187, 17, 26);
                        /* padding:6px; */
                        border-bottom:2px solid rgba(187, 17, 26);
                    }
                    .more{
                        cursor: pointer;
                        float: right;
                        i{
                            color:rgba(187, 17, 26);
                        }
                    }
                }
                .news-list{
                    li{    
                        height: 44px;
                        line-height: 44px;
                        list-style-type: circle!important;
                        clear: both;
                        margin-left: 20px;
                        color:#666;
                        cursor: pointer;
                        span{
                            display: inline-block;
                            &.title{
                                width:69%;
                                float: left;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            &.time{
                                width:31%;
                                float: right;
                                text-align: center;
                            }
                        }
                        &:hover{
                            color:rgba(187, 17, 26);
                        }
                    } 
                }
            }
        }
        .home-main-two{
            padding:20px 0 20px 20px;
            overflow: hidden;
            &>div{
                width:542px;
                float: left;
                &:nth-of-type(2n-1){
                    margin-right:60px;
                }
                .news-title{
                    border-bottom:2px solid rgba(187, 17, 26);
                    overflow: hidden;
                    .title{
                        height:38px;
                        text-align: center;
                        float: left;
                        line-height: 38px;
                        color:  #fff;
                        font-size:20px;
                        padding:0 15px;
                        background: rgba(187, 17, 26);
                        border-bottom:2px solid rgba(187, 17, 26);
                    }
                    .more{
                        cursor: pointer;
                        float: right;    
                        position: relative;
                        top: 23px;
                        font-size:12px;
                        i{
                            color:rgba(187, 17, 26);
                        }
                    }
                }
            }
            .main-two-one{
                .news-list{
                    margin:30px 0 40px;
                    li{
                        height:35px;
                        line-height:35px;
                        list-style-type: square!important;
                        list-style-color: #666!important;
                        clear: both;
                        margin-left: 20px;
                        color:#666;
                        cursor: pointer;
                        span{
                            display: inline-block;
                            &.title{
                                width:69%;
                                float: left;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            &.time{
                                width:31%;
                                float: right;
                                text-align: center;
                            }
                        }
                        &:hover{
                            color:rgba(187, 17, 26);
                        }
                    }
                    
                }
            }
            .main-two-two{
                .news-list{
                    margin:30px 0 40px;
                    overflow: hidden;
                    li{
                        cursor: pointer;
                        float: left;
                        width:115px;
                        height:32px;
                        text-align: center;
                        line-height: 32px;
                        color:#333;
                        background: #f2f2f2;
                        margin-right:24px;
                        margin-bottom:25px;
                        &:nth-of-type(4n){
                            margin-right:0;
                        }
                        &:hover{
                            background: #dddd;
                        }
                        &.more{
                           color:rgba(187, 17, 26);
                            background: #ffff; 
                        }
                        &:hover{
                            color:rgba(187, 17, 26);
                        }
                    }
                    
                }
            }
            .main-two-three{
                .news-list{
                    margin-top:50px;
                    overflow: hidden;
                    li{
                        cursor: pointer;
                        float: left;
                        width:80px;
                        // height:80px;
                        margin-right:35px;
                        border-radius:4px;    
                        border-radius: 10px;
                        overflow: hidden;
                        &:nth-last-of-type(1){
                            margin-right:0;
                        }
                        .nav-img{
                            width: 80px;
                            height: 80px;
                            border-radius: 10px;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                                &:hover{
                                    transform: scale(1.15);
                                    transition: all ease-in .1s;
                                }
                            }
                        }
                        .nav-name{
                            text-align: center;
                            margin-top: 18px;
                            font-size: 16px;
                        }
                        &:hover{
                            color:rgba(187, 17, 26);
                        }
                    }
                    
                }
            }
            .info{
                .infoTitle{
                    overflow: hidden;
                    .toInfo,.resultCheck{
                        float:right;
                        cursor: pointer;
                        .icon{
                            position: relative;
                            top: 0;
                            display:inline-block;
                            width: 38px;
                            height: 32px;
                        }
                        .text{
                            position: relative;
                            top: -8px;  
                            font-size: 12px;
                        }
                    }
                    .toInfo{
                        float:right;
                        .icon{
                            background: url('../../assets//img/home/20.png')no-repeat -120px -121px;
                        }
                    }
                    .resultCheck{
                        margin-left:15px;
                        .icon{
                            background: url('../../assets//img/home/21.png')no-repeat -105px -121px;
                        }
                    }
                }
            }
            .main-two-four{
                .news-list{    
                    margin: 30px 0 40px;
                    li{
                        height:35px;
                        line-height:35px;
                        list-style-type: square!important;
                        list-style-color: #666!important;
                        clear: both;
                        margin-left: 20px;
                        color:#666;
                        cursor: pointer;
                        span{
                            display: inline-block;
                            &.title{
                                width:69%;
                                float: left;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            &.time{
                                width:31%;
                                float: right;
                                text-align: center;
                            }
                        }
                        &:hover{
                            color:rgba(187, 17, 26);
                        }
                    } 
                }
            }
        }
        .toTw{
            padding:40px 0 20px 20px;
            overflow: hidden;
            &>div{
                width:1144px;
                float: left;
                .news-title{
                    border-bottom:2px solid rgba(187, 17, 26);
                    overflow: hidden;
                    .title{
                        height:38px;
                        text-align: center;
                        float: left;
                        line-height: 38px;
                        color:  #fff;
                        font-size:20px;
                        padding:0 15px;
                        background: rgba(187, 17, 26);
                        border-bottom:2px solid rgba(187, 17, 26);
                    }
                    .more{
                        cursor: pointer;
                        float: right;    
                        position: relative;
                        top: 23px;
                        font-size:12px;
                        i{
                            color:rgba(187, 17, 26);
                        }
                    }
                }
                .twScroll{
                    overflow: hidden;
                    .left,.right{
                        display: inline-block;
                        width: 50px;
                        position: relative;
                    }
                    .left{
                        float:left;
                        left: -69px;
                        img{
                            position: absolute;
                            left: -34px;
                            top: -26px;
                            cursor: pointer;
                        }
                    }
                    .right{
                        float:left;
                        left: -69px;
                        img{
                            position: absolute;    
                            left: -17px;
                            top: -19px;
                            cursor: pointer;
                        }
                    }
                    .outerLink{
                        float:left;
                        width:85%;
                        margin:50px 0 50px 8%;
                        background: rgba(187, 17, 26);
                        overflow: hidden;
                        li{
                            width: 23.75%;
                            margin: 1% 0 1% 1%;
                            float:left;
                            text-align: center;
                            cursor: pointer;
                            background: #fff;
                            overflow: hidden;
                            .twIcon{            
                                width: 229px;
                                height: 95px;
                            }
                            &:nth-of-type(1){
                                .twIcon{ 
                                    background: url('../../assets//img/home/1.png')no-repeat -20px -95px;
                                }
                            }
                            &:nth-of-type(2){
                                .twIcon{ 
                                    background: url('../../assets//img/home/2.png')no-repeat -16px -95px;
                                }
                            }
                            &:nth-of-type(3){
                                .twIcon{ 
                                    background: url('../../assets//img/home/3.png')no-repeat -23px -95px;
                                }
                            }
                            &:nth-of-type(4){
                                .twIcon{ 
                                    background: url('../../assets//img/home/4.png')no-repeat -33px -95px;
                                }
                            }
                            .twName{
                                background: #ddd;
                                color:#333;
                                padding:4px 0;
                            }
                        }
                    }
                }
            }
        }
        .service{
            ul{
                overflow: hidden;    
                padding-top: 35px;
                padding-bottom: 25px;
                .service-list{
                    list-style: none!important;
                    width:64px;
                    float: left;
                    margin-top:15px;    
                    margin-left: 55px;
                    cursor: pointer;
                    .icon{    
                        display: inline-block;    
                        width: 64px;
                        height: 63px;
                        overflow: hidden;
                        img{
                            position: relative;
                            top: -112px;
                            left: -107px;
                        }
                    }
                    .name{
                        display: inline-block;
                        width: 64px;
                        font-size: 16px;
                        padding:4px 0 10px;
                        text-align: center;
                    }
                    &:nth-of-type(2),&:nth-of-type(6){
                        .icon{    
                            img{
                                top: -92px;
                            }
                        }
                    }
                    &:nth-of-type(8){
                        .icon{    
                            img{
                                top: -119px;
                            }
                        }
                    }
                    &:nth-of-type(9){
                        .icon{    
                            img{
                                top: -102px;
                                left:-114px;
                            }
                        }
                    }
                    &:nth-of-type(4){
                        .icon{    
                            img{
                                left:-111px;
                            }
                        }
                    }
                    &:nth-of-type(5){
                        .icon{    
                            img{
                                top:-106px;
                            }
                        }
                    }
                    &:nth-of-type(7){
                        .icon{    
                            img{
                                left:-98px;
                            }
                        }
                    }
                    &:nth-of-type(1),&:nth-of-type(6){
                        margin-left:0;
                    }
                    &:hover{
                        .name{
                            color:rgba(187, 17, 26);
                        }
                    }
                }
            }
        }
        .info{
            .infoWrap{
                overflow: hidden;
                margin-top: 30px;
                .onlineOnfo{
                    cursor: pointer;
                    width:50%;
                    height:80px;
                    margin-top:40px;
                    overflow: hidden;
                    float:left;
                    position:relative;
                    .icon{
                        width:100%;
                        height:80px;
                        img{
                            position:relative;
                            top:-110px;
                            left:0;
                        }
                    }
                    .title{
                        position: absolute;
                        top: 39px;
                        left: 68px;
                        color: #fff;
                        font-size: 13px;
                    }
                    .name{    
                        position: absolute;
                        top: 32px;
                        left: 163px;
                        font-size: 18px; 
                    }
                    &:nth-of-type(1){
                        margin-left:-12px;
                        .title{
                            top: 36px;
                            left: 65px;
                        }
                        .name{    
                            top: 29px;
                            left: 159px;
                        }
                    }
                    &:nth-of-type(2){        
                        right: -10px;
                    }
                    &:nth-of-type(3){   
                        margin-left:-5px; 
                        margin-top: 25px;
                        .title{    
                            top: 43px;
                            left: 57px;
                        }
                        .name{        
                            top: 39px;
                            left: 154px;
                        }
                    }
                    &:nth-of-type(4){        
                        margin-left: 3px;
                        margin-top: 43px;
                        .title{
                            top: 39px;
                            left: 68px;
                        }
                        .name{    
                            top: 32px;
                            left: 163px;
                        }
                    }
                }
            } 
        }
    }
}
</style>
