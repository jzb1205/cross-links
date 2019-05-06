<template>
    <div class="home">
        <div class="home-banner">
            <el-carousel height="465px" arrow='hover'>
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img class="banner-img" :src="item.imgUrl" alt="正在加载中......">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-main">
            <div class="home-notice">
                <div class="home-notice-left">
                    <i class="el-icon-phone-outline"></i>
                    &nbsp;
                    通知公告：
                </div>
                <div class="home-notice-right">
                    <marquee width=98% onmouseover=this.stop() onmouseout=this.start()> 此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容此处输入滚动内容 </marquee>
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
                        <span class="more">
                            更多
                            <i class="el-icon-circle-plus-outline"></i>
                        </span>
                    </p>
                    <ul class="news-list">
                        <li v-for="(item,index) in newsList" :key="index">
                            <span class="title">{{item.title}}</span>
                            <span class="time">{{item.time}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="home-main-two">
                <div class="main-two-one"></div>
                <div class="main-two-two"></div>
                <div class="main-two-three"></div>
                <div class="main-two-four"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return {
        bannerList:[
            {
                id:0,
                imgUrl:require(`../../assets/img/banner.png`),
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
        newsList:[
            {
                title:'新闻概要--概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要',
                time:'2019-05-06'
            },
            {
                title:'新闻概要--概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要',
                time:'2019-05-06'
            },
            {
                title:'新闻概要--概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要',
                time:'2019-05-06'
            },
            {
                title:'新闻概要--概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要',
                time:'2019-05-06'
            },
            {
                title:'新闻概要--概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要',
                time:'2019-05-06'
            }
        ]
    }
}
}
</script>

<style lang='less' scoped>
.home{
    .home-banner{
        .banner-img{
            width:100%;
        }
    }
    .home-main{
        width:1170px;
        min-height: 700px;
        margin:33px auto;
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
                color: rgba(212, 104, 106)
            }
            .home-notice-right{
                width:1070px;
                float: left;
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
                    }
                    
                }
            }
        }
    }
}
</style>
