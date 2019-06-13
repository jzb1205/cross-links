<template>
    <div class="aboutMe">
        <div class="banner">
            <span>承其所托，必全力以赴。</span>
            <p>在线客服</p>
        </div>
        <div class="aboutMeMain">
            <div class="intrudtion">
                <p class="title">{{dataMap.title}}</p>
                <div class="intruContent" v-html="dataMap.content"></div>
            </div>
            <ul class="quick">
                <li class="ico_tel">
                    {{dataMap.tel}}
                </li>
                <li class="ico_mail">
                    {{dataMap.email}}
                </li>
                <li class="ico_add">
                    {{dataMap.address}}
                </li>
                <li class="ico_code">
                    扫描二维码并关注微信公众号，了解更多活动资讯。
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
        width: 100%;
        height: 350px;
        background: url(../../assets/img/web_setting_banner.jpg) no-repeat center center;
        span{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 40px;
            color: #fff;
            display: block;
            padding-top: 160px;
            letter-spacing: 4px;
        }
        p{
            width: 180px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 20px;
            letter-spacing: 2px;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 20px;
            margin: 20px auto;
        }
    }
    .aboutMeMain{
        width:1200px;
        margin:35px auto 25px;
        background: #fff;
        .intrudtion{
            width: 1100px;
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
            width: 100%;
            margin: 0 auto;
            li{
                width: 220px;
                height: 100px;
                margin: 60px 10px;
                float: left;
                padding: 160px 30px 0 30px;
                text-align: center;
                font-size: 16px;
            }
            .ico_tel {
                background: url(../../assets/img/lxwm_ico1.png) rgba(187, 17, 26) center 60px no-repeat;
                color: #fff;
                font-size: 22px;
            }
            .ico_mail {    
                background: url(../../assets/img/lxwm_ico2.png) #eee center 50px no-repeat;
                font-size: 20px;
            }
            .ico_add {
                background: url(../../assets/img/lxwm_ico3.png) rgba(187, 17, 26) center 60px no-repeat;
                color: #fff;
            }
            .ico_code {
                background: url(../../assets/img/lxwm_ico4.jpg) #eee center 10px no-repeat;
                padding-top: 200px;
                height: 60px;
            }
        }

    }
}
</style>
