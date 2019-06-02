<template>
    <div class="home">
        <div class="home-banner">
            <el-carousel :height="bannerHeight" arrow='hover'>
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img class="banner-img" :src="item.imgUrl" alt="正在加载中......">
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
                        <el-carousel-item v-for="item in bannerList" :key="item.id">
                            <img class="banner-img"  :src="item.imgUrl" alt="正在加载中......">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="main-one-right">
                    <p class="news-title">
                        <span class="title">两岸要闻</span>
                        <span class="more" @click='$router.push("/information")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in infoList" :key="index" @click="toDetail(item.id,'info')">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.createTime | timeFormat('YYYY-MM-DD')}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="home-main-two">
                <div class="main-two-one">
                    <p class="news-title">
                        <span class="title">惠台政策</span>
                        <span class="more" @click='$router.push("/bene")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in serviceList" :key="index">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.time}}</span>
                        </li>
                    </ul>
                </div>
                <div class="main-two-two">
                    <p class="news-title">
                        <span class="title">个人办事</span>
                        <span class="more">
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in personThing" :key="index">
                            <span class="title">{{item.lable}}</span>
                        </li>
                        <li class="more">更多</li>
                    </ul>
                </div>
                <div class="main-two-three">
                    <p class="news-title">
                        <span class="title">通导航</span>
                        <span class="more" @click='$router.push("/nav")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in navList" :key="index">
                            <p class="nav-img" ><img :src="item.imgUrl" alt="正在加载中......"></p>
                            <p class="nav-name">{{item.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="main-two-four">
                    <p class="news-title">
                        <span class="title">通服务</span>
                        <span class="more" @click='$router.push("/service")'>
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in serviceList.slice(0,4)" :key="index">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.createTime | timeFormat('YYYY-MM-DD')}}</span>
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
            noticeList:[],
            personThing:[
                {
                    lable:'设立变更'
                },
                {
                    lable:'准营准办'
                },
                {
                    lable:'资质认证'
                },
                {
                    lable:'年检年审'
                },
                {
                    lable:'税收财务'
                },
                {
                    lable:'人力资源'
                },
                {
                    lable:'社会保障'
                },
                {
                    lable:'投资审批'
                },
                {
                    lable:'融贷信贷'
                },
                {
                    lable:'抵押质押'
                },
                {
                    lable:'商务贸易'
                },
                {
                    lable:'招标拍卖'
                },
                {
                    lable:'海关口岸'
                },
                {
                    lable:'涉外服务'
                },
                {
                    lable:'农林牧渔'
                },
            ],
            navList:[
                {
                    id:0,
                    imgUrl:require(`../../assets/img/nav1.png`),
                    name:'求职招聘',
                    path:''
                },
                {
                    id:1,
                    imgUrl:require(`../../assets/img/nav2.png`),
                    name:'租赁',
                    path:''
                },
                {
                    id:2,
                    imgUrl:require(`../../assets/img/nav3.png`),
                    name:'二手买卖',
                    path:''
                },
                {
                    id:3,
                    imgUrl:require(`../../assets/img/nav3.png`),
                    name:'在线交友',
                    path:''
                },
                {
                    id:4,
                    imgUrl:require(`../../assets/img/nav4.png`),
                    name:'线下活动',
                    path:''
                }
            ]
        }
    },
    mounted(){
    },
    created(){
        this.getNoticeInfoPage()
        this.getServiceList()
    },
    computed:{
        serviceList(){
            return this.$store.state && this.$store.state.serviceMap && this.$store.state.serviceMap.data && this.$store.state.serviceMap.data.list || []
        },
        infoList(){
            return this.$store.state && this.$store.state.infoMap && this.$store.state.infoMap.data && this.$store.state.infoMap.data.list || []
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
        getServiceList(){
            let params = {
                page:1,
                rows:4,
                type:''
            }
            this.$store.dispatch('querySiListPage',params)
        },
        //获取资讯
        getServiceList(){
            let params = {
                type:'',
                page:1,
                rows:6
            }
            this.$store.dispatch('getInfoListPage',params)
        },
        toDetail(id,type){
            if (!id) {
                this.$message({
                    message:'id不能为空',
                    type:'error'
                })
                return
            }
            switch (type) {
                case 'info':
                    this.$router.push({
                        path:'/informationDetail',
                        query:{id:id}
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
        .banner-img{
            width:100%;
            height:465px;
        }
    }
    .home-main{
        width:1170px;
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
                width:1070px;
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
                .banner-img{
                    width:100%;
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
                        padding:6px 0;
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
                        height:45px;
                        line-height:45px;
                        list-style-type: circle!important;
                        clear: both;
                        margin-left: 20px;
                        color:#666;
                        cursor: pointer;
                        span{
                            display: inline-block;
                            &.title{
                                width:70%;
                                float: left;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            &.time{
                                width:25%;
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
                        width:112px;
                        text-align: center;
                        float: left;
                        line-height: 38px;
                        color:  #fff;
                        font-size:20px;
                        padding:6px 0;
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
                                width:70%;
                                float: left;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            &.time{
                                width:25%;
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
                        // width:80px;
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
                                width:100%;
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
            .main-two-four{
                .news-list{
                    margin-top:20px;
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
                                width:70%;
                                float: left;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            &.time{
                                width:25%;
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
    }
}
</style>
