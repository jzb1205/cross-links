<template>
    <div class="home">
        <div class="home-banner">
            <el-carousel arrow='hover'>
                <el-carousel-item v-for="item in bannerList" :key="item.id" class="home-banner-item">
                    <img class="banner-img banner" :src="item.imgUrl" alt="正在加载中......">
                </el-carousel-item>
            </el-carousel>
        </div>
        <transition name="el-fade-in-linear">
            <div class="home-main" v-if='loading'>
                <div class="home-notice">
                    <div class="home-notice-left">
                        <img src="../../assets/img/icon-notice.png" alt="">
                        {{$t("message.notice.notice")}}：
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
                            <span class="title">{{$t("message.notice.layw")}}</span>
                            <span class="more" @click='$router.push("/infoContaner")'>
                                {{$t("message.notice.more")}}
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
                <div class="toTw" v-if='toTw.length>0'>
                    <div class="main-two-one">
                        <p class="news-title">
                            <span class="title">{{$t("message.twztzl.twztzl")}}</span>
                            <span class="more" @click='$router.push("/nav")'>
                                {{$t("message.notice.more")}}
                                <i class="el-icon-circle-plus-outline"></i>
                            </span>
                        </p>
                        <div class="scrollWrap" @mouseenter="on_top_enter" @mouseleave="on_top_leave">
                            <swiper :options="swiperOption" ref="mySwiper">
                                <swiper-slide v-for="it in toTw" :class="{'active':it.id==='3'}" :key='it.id'>
                                    <div class="twIcon"  @click="toOuter(it.url)">
                                        <img :src="imgHttp+it.icon" alt="">
                                    </div>
                                    <p class="twName" @click="toOuter(it.url)">{{it.name}}</p>
                                </swiper-slide>
                            </swiper>
                            <div class="swiper-pagination" style="display:none;" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev" v-if="!showBtn"></div>
                            <div class="swiper-button-next" slot="button-next" v-if="!showBtn"></div>
                        </div>
                    </div>
                </div>
                <div class="home-main-two">
                    <div class="main-two-one">
                        <p class="news-title">
                            <span class="title">{{$t("message.htzc.htzcjd")}}</span>
                            <span class="more" @click='$router.push("/benContaner")'>
                                {{$t("message.notice.more")}}
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
                            <span class="title">{{$t("message.htzc.htfwxx")}}</span>
                            <span class="more" @click="$router.push({path:'/serviceContaner',query:{type:'2'}})">
                                {{$t("message.notice.more")}}
                                <i class="el-icon-circle-plus-outline"></i>
                            </span>
                        </p>
                        <ul class="news-list">
                            <li v-for="(item,index) in benesServiceList" :key="index"  @click="toDetail(item,'service1')">
                                <span class="title">{{item.title}}</span>
                                <span class="time">{{item.createTime | timeFormat('YYYY-MM-DD')}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="main-two-three info">
                        <p class="news-title infoTitle"  @click='$router.push("/aboutMe")'>
                            <span class="title">{{$t("message.hdl.hdl")}}</span>
                            <span class="resultCheck">
                                <span class="icon"></span>
                                <span class="text">{{$t("message.hdl.jgcx")}}</span>
                            </span>
                            <span class="toInfo">
                                <span class="icon"></span>
                                <span class="text">{{$t("message.hdl.wyzx")}}</span>
                            </span>
                        </p>
                        <ul class="infoWrap">
                            <li class="onlineOnfo" v-for="(item,index) in navList" :key="index"  @click='$router.push("/aboutMe")'>
                                <span class="icon">
                                    <img :src="item.img" alt="">
                                </span>
                                <span class='title'>{{$t(item.title)}}</span>
                                <span class="name">{{$t(item.name)}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="service">
                        <p class="news-title">
                            <span class="title">{{$t("message.navList.service")}}</span>
                            <span class="more" @click="$router.push({path:'/serviceContaner',query:{type:'1'}})">
                                {{$t("message.notice.more")}}
                                <i class="el-icon-circle-plus-outline"></i>
                            </span>
                        </p>
                        <ul class="news-list">
                            <li class='service-list' v-for="(item,index) in serviceList" :key="index" @click="toDetail(item.url,'service3')">
                                <span class="icon">
                                    <img :src="imgHttp+item.icon" alt="">
                                </span>
                                <span class="name">{{item.name}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
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
                    imgUrl:require(`../../assets/img/banner1.png`),
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
            service:[],
            imgHttp:this.$imgUrl,
            toTwList:[],
            nav:[
                {
                    id:'0',
                    name:'message.hdl.rcsb',
                    title:'message.hdl.zxzx',
                    img:require('../../assets/img/home/5.png'),
                    linkUrl:'http://cr.xmsme.com/'
                },
                {
                    id:'1',
                    title:'message.hdl.zxzx',
                    name:'message.hdl.zlsb',
                    img:require('../../assets/img/home/6.png'),
                    linkUrl:'https://mp.weixin.qq.com/s/Jwe9JKr7y5rex1JK8aa-JQ'
                },
                {
                    id:'2',
                    title:'message.hdl.zxzx',
                    name:'message.hdl.zczx',
                    img:require('../../assets/img/home/7.png'),
                    linkUrl:'http://www.taiwan.cn/hxlt/'
                },
                {
                    id:'3',
                    name:'',
                    img:require('../../assets/img/home/8.png'),
                    linkUrl:'http://www.xmccb.com/'
                }
            ],
            swiperOption: {
                loop:true,
                initialSlide :1,
                width: 935,
                slidesPerView : 4,
                spaceBetween : 20,
                centeredSlides : true,
            　　pagination: {
            　　　　el: '.swiper-pagination',
            　　　　clickable: true // 允许点击小圆点跳转
            　　},
            　　autoplay: {
            　　　　delay: 2000,
            　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
            　　},
            　　navigation: {
            　　　　nextEl: '.swiper-button-next',
            　　　　prevEl: '.swiper-button-prev'
            　　}
            },
            showBtn:false,
            loading:false
        }
    },
    mounted(){
        this.$nextTick(()=>{
            let h = (document.body.clientWidth/1920)*465
            document.getElementsByClassName('banner-img')[0].style.height = h
            document.getElementsByClassName('el-carousel__container')[0].style.height = h
        })
    },
    async created(){
        let _this = this
        this.loading = false
        await this.getNoticeInfoPage()
        await this.querySiListPage()
        await this.getInfoListPage()
        await this.getNavigationList()
        await this.getPolicyPage()
        await this.getNavigationList()
        setTimeout(()=>{
            _this.loading = true
        },500)
    },
    computed:{
        dataList(){
            let list = this.$store.state.navMap || []
            this.serviceList.goverList.children = []
            this.serviceList.convenientList.children = []
            this.serviceList.enterpriseList.children = []
            if (list && list.length>0) {
                list.map((item)=>{
                    switch (item.type) {
                        case '0':
                            this.serviceList.goverList.children.push(item)
                            break;

                        case '1':
                            this.serviceList.convenientList.children.push(item)
                            break;

                        case '2':
                            this.serviceList.enterpriseList.children.push(item)
                            break;
                        default:
                            break;
                    }
                })
            }
            return this.serviceList
        },
        toTw(){
            let list = this.$store.state.navMap || []
            this.toTwList = []
            if (list && list.length>0) {
                list.map((item)=>{
                    if (item.type === '4') {
                        this.toTwList.push(item)
                    }
                })
                //项目小于4个不轮播
                if (this.toTwList.length<5) {
                    this.swiperOption.autoplay.delay = 3000000;
                    this.showBtn = true
                }
            }
            return this.toTwList
        },
        navList(){
            return this.nav
        },
        serviceList(){
            let list = this.$store.state.navMap || []
            this.service = []
            if (list && list.length>0) {
                list.map((item)=>{
                    if (item.type === '5') {
                        this.service.push(item)
                    }
                })
            }
            return this.service
        },
        benesServiceList(){
            return this.$store.state && this.$store.state.serviceMap && this.$store.state.serviceMap.data && this.$store.state.serviceMap.data.list || []
        },
        infoList(){
            return this.$store.state && this.$store.state.infoMap && this.$store.state.infoMap.data && this.$store.state.infoMap.data.list || []
        },
        beneList(){
            return this.$store.state && this.$store.state.beneMap && this.$store.state.beneMap && this.$store.state.beneMap.list || []
        },
        mySwiper() {
            // mySwiper 是要绑定到标签中的ref属性
            return this.$refs.mySwiper.swiper
        },
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
                // type:'1', 金融商事服务  type:'2', 惠台服务信息
            let params = {
                page:1,
                rows:5,
                type:'2'
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
                type:'',
                page:1,
                rows:5
            }
            this.$store.dispatch('getPolicyPage',params)
        },
        toDetail(item,type){
            if (!item.id && !type.includes('service')) {
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
                case 'service1':
                    this.$router.push({
                        path:'/serviceContaner/serviceDetail',
                        query:{
                            id:item.id,
                            type:'2'   //2 惠台服务信息 //1 金融商事服务
                        }
                    })
                    break;
                case 'service2':
                    this.$router.push({
                        path:'/serviceContaner',
                        query:{
                            id:item.id,
                            type:'1'   //2 惠台服务信息 //1 金融商事服务
                        }
                    })
                    break;
                case 'service3':
                    this.$router.push(item)
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
        },
        toOuter(url){
            location.href = url
        },
        async getNavigationList(){
            await this.$store.dispatch('getNavigationList',{})
        },
        on_top_enter() {
            this.mySwiper.autoplay.stop()
        },
        on_top_leave() {
            this.mySwiper.autoplay.start()
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
                .info-banner-img{
                    width:683px;
                    height:380px;
                }
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
                            width: 64px;
                            height: 63px;
                        }
                    }
                    .name{
                        display: inline-block;
                        width: 64px;
                        font-size: 16px;
                        padding:4px 0 10px;
                        text-align: center;
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
.scrollWrap{
    position: relative;
    width: 92%;
    margin: 0 auto;
}
.swiper-container{
    height:190px;
    width:895px;
    background: rgba(187, 17, 26);
    margin:20px auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-left:60px;
    .swiper-wrapper{
        float:left;
        width:935px;
        margin-left:114px!important;
        .swiper-slide{
            display:inline-block;
            text-align:center;
            margin-top:25px;
            overflow: hidden;
            .twIcon{
                overflow: hidden;
                background: #fff;
                padding-bottom:10px;
                img{
                    width:85px;
                    height:85px;
                    margin-top:8px;
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
</style>
