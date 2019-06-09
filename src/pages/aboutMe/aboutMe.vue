<template>
    <div class="aboutMe">
        <div class="banner">
            <img :src="$imgUrl+dataMap.banner" alt="正在加载......">
        </div>
        <div class="aboutMeMain">
            <div class="intrudtion">
                <p class="title">{{dataMap.title}}</p>
                <div class="intruContent" v-html="dataMap.content"></div>
            </div>
            <ul class="quick">
                <li class="liImg">
                    <img :src="$imgUrl+dataMap.telIcon" alt="正在加载......">
                    <p>{{dataMap.tel}}</p>
                </li>
                <li class="liImg">
                    <img :src="$imgUrl+dataMap.emailIcon" alt="正在加载......">
                    <p>{{dataMap.email}}</p>
                </li>
                <li class="liImg">
                    <img :src="$imgUrl+dataMap.addressIcon" alt="正在加载......">
                    <p>{{dataMap.address}}</p>
                </li>
                <li class="liQr">
                    <img :src="$imgUrl+dataMap.qrCode" alt="正在加载......">
                    <p>扫描二维码并关注微信公众号，了解更多活动资讯。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataMap:{}
        }
    },
    created(){
        this.getCiDetail()
    },
    methods:{
        //修改数据详情
        getCiDetail () {
            this.$post(this.$api.webSetting.getCiDetail, {})
            .then(res => {
                if (res.code === '000' && res.data) {
                    this.dataMap = Object.assign({},res.data)
                } else {
                    this.$message({
                        message: '获取网站基本信息失败',
                        type: 'error'
                    })
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.aboutMe{
    .banner{

    }
    .aboutMeMain{
        width:1200px;
        margin:35px auto 25px;
        background: #fff;
        .intrudtion{
            width: 1000px;
            margin: 0 auto;
            .title{
                padding-top: 30px;
                font-size: 34px;
                letter-spacing: 2px;
                text-align: center;
                width: 100%;
                height: 100px;
                line-height: 100px;
            }
            .intruContent{
                width: 100%;
                line-height: 25px;
                color: #555;
                margin-bottom: 30px;
                padding-bottom: 30px;
                border-bottom: 1px solid #eee;
            }
        }
        .quick{
            overflow: hidden;
            width: 1000px;
            margin: 0 auto;
            .liImg{    
                position: relative;
                background: rgba(187, 17, 26);
                width: 230px;
                height: 200px;
                margin: 60px 10px;
                float: left;
                text-align: center;
                font-size: 16px;
                color:#fff;
                img{
                    position: absolute;
                    width: 230px;
                    height: 200px;
                    top:0;
                    left:0;
                }
                p{
                    margin-top:130px;
                    padding:0 30px;    
                    position: relative;
                    z-index: 2;
                }
            }
            .liQr{
                position: relative;
                background: rgba(187, 17, 26);
                width: 230px;
                height: 200px;
                margin: 60px 10px;
                float: left;
                text-align: center;
                font-size: 14px;
                color:#fff;
                img{
                    width:140px;
                    height:140px;
                    margin-top:15px;
                }
                p{
                    padding:0 30px;
                }
            }
        }

    }
}
</style>
